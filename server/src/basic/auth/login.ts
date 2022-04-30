import * as moment from 'moment';
import * as rpc from 'rage-rpc';
import User from '../../models/User';
import Auth from './auth';
import Player from '../player';
import notifications from '../../helpers/notifications';
import token from './token';

class Login extends Auth {
	checkExpiresBanDate(date) {
		if (moment(date).valueOf() > moment().valueOf()) {
			return moment(date).format('DD.MM.YYYY HH:mm');
		}
	}

	isPlayingNow(email: string) {
		return (
			mp.players.toArray().findIndex((item) => item.dbId && item.email === email) >= 0
		);
	}

	isRecognizedDevice(player: PlayerMp, serial: string, social: string) {
		return social === player.socialClub && serial === player.serial;
	}

	async checkBan(player: PlayerMp, user: any) {
		let { ban } = user;

		if (ban && Object.keys(ban).length === 0) return false;

		const expiresDate = this.checkExpiresBanDate(ban.term);

		if (expiresDate || ban.perm) {
			notifications.error(
				player,
				`Вы забанены! Причина: ${ban.reason}. Бан истекает: ${
					ban.perm ? 'Никогда' : expiresDate
				}`
			);

			player.kick(ban.reason);

			return true;
		}

		ban = null;
		await user.save();

		return false;
	}

	async loadUser(player: PlayerMp, user: any) {
		await Player.loadAccount(player, user);

		user.loginAt = Date.now();
		user.ip = player.ip;
		user.serial = player.serial;
		user.socialClub = player.socialClub;

		await user.save();

		player.loggedIn = true;

		mp.events.call('Auth-SuccessLogin', player);
	}

	async tryLoginWithCode(player: PlayerMp, email: string, code: string) {
		const user = await User.findOne({ email });

		if (!user || !token.isValid(user.token, code)) {
			return Promise.reject(new Error());
		}

		user.token = null;

		this.loadUser(player, user);
	}

	async sendRecoveryCode(email: string) {
		const user = await User.findOne({ email });

		if (!user) return Promise.reject(new Error());

		token.send('recovery', email);
	}

	async checkRecoveryCode(player: PlayerMp, email: string, code: string) {
		const user = await User.findOne({ email });

		player.token = code;

		return user && token.isValid(user.token, code);
	}

	async resetPassword(player: PlayerMp, email: string, password: string) {
		const user = await User.findOne({ email });

		if (!user || !token.isValid(user.token, player.token)) {
			return Promise.reject(new Error());
		}

		user.password = this.hashPassword(password);
		user.token = null;

		user.save();
	}

	async tryLogin(player: PlayerMp, email: string, password: string) {
		const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

		if (!user) {
			return Promise.reject({ field: 'email', message: 'Аккаунт не существует' });
		}

		const hash = await this.hashPassword(password);

		if (user.password !== hash) {
			return Promise.reject({ field: 'password', message: 'Неверный пароль!' });
		}

		if (await this.checkBan(player, user)) return;

		const account = await User.findOne({ serial: player.serial });

		if (account && (await this.checkBan(player, account))) return;

		if (this.isPlayingNow(email)) return player.kick('');

		if (!this.isRecognizedDevice(player, user.serial, user.socialClub)) {
			await token.send('login', email);

			return Promise.reject(new Error());
		}

		this.loadUser(player, user);
	}
}

const login = new Login();

mp.events.subscribe(
	{
		'Auth-TryLogin': (player, email, password) => login.tryLogin(player, email, password),
		'Auth-TryLoginWithCode': (player, email, code) =>
			login.tryLoginWithCode(player, email, code),
		'Auth-GetRecoveryCode': (player, email) => login.sendRecoveryCode(email),
		'Auth-CheckCode': (player, email, code) =>
			login.checkRecoveryCode(player, email, code),
		'Auth-ResetPassword': (player, email, password) =>
			login.resetPassword(player, email, password)
	},
	false
);
mp.events.subscribeToDefault({
	playerReady: (player) => rpc.callClient(player, 'Auth-ShowLoginWindow')
});
