import Validator from 'validator';
import spawn from '../../data/spawn';
import User from '../../models/User';
import Auth from './auth';
import Referal from '../referal';
import { validateName } from '../../utils/validation';
import notifications from '../../helpers/notifications';

class Register extends Auth {
	async tryCreateAccount(
		player: PlayerMp,
		email: string,
		firstName: string,
		lastName: string,
		password: string,
		password2: string
	) {
		if (!Validator.isEmail(email)) {
			return Promise.reject({ field: 'email', message: 'Указан некорректный email!' });
		}

		let isExist = await User.findOne({ socialClub: player.socialClub }).countDocuments();

		if (isExist) {
			return Promise.reject({
				field: 'email',
				message: 'Вы уже регистрировали аккаунт!'
			});
		}

		isExist = await User.findOne({ email }).countDocuments();

		if (isExist) {
			return Promise.reject({ field: 'email', message: 'Этот email уже используется' });
		}

		const error = await validateName(firstName, lastName);

		if (error) return notifications.error(player, error);

		if (!Validator.isLength(password, { min: 4 })) {
			return Promise.reject({
				field: 'password',
				message: 'Минимальная длина пароля 4 символа'
			});
		}

		if (password !== password2) {
			return Promise.reject({ field: 'password', message: 'Пароли не совпадают!' });
		}

		const user = await new User({
			firstName,
			lastName,
			email,
			socialClub: player.socialClub,
			ip: player.ip,
			serial: player.serial,
			password: this.hashPassword(password),
			position: spawn,
			money: { cash: 1000000 } // Деньги при регистрации
		}).save();

		await Referal.createRandomCode(user._id);
	}
}

const register = new Register();

mp.events.subscribe(
	{
		'Auth-TryCreateAccount': (
			player: PlayerMp,
			email: string,
			firstName: string,
			lastName: string,
			password: string,
			password2: string
		) =>
			register.tryCreateAccount(player, email, firstName, lastName, password, password2)
	},
	false
);
