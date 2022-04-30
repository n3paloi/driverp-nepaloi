import * as crypto from 'crypto';
import Promo from '../models/Promo';
import User from '../models/User';
import notifications from '../helpers/notifications';

class Referal {
	public fullfiledTime = 3;

	public income = 15000;

	public award = 25000;

	constructor() {
		mp.events.subscribe({
			'Referal-GetData': this.getCodeData.bind(this),
			'Referal-UseCode': this.useCode.bind(this)
		});
	}

	async createRandomCode(userId: string) {
		const code = await this.generateCode();
		const promoData = {
			userId,
			code,
			income: this.income,
			award: this.award
		};

		await new Promo(promoData).save();
	}

	async createCustomCode(player: PlayerMp, income: number, award: number, code: string) {
		await new Promo({ code, income, award }).save();
		notifications.success(player, 'Промокод успешно создан!');
	}

	async removeCode(player: PlayerMp, code: string) {
		const isExists = await this.checkCode(player, code);
		if (!code || !isExists) return;

		await Promo.findOneAndRemove({ code });
		notifications.success(player, 'Промокод успешно удалён');
	}

	async giveMoney(player: PlayerMp) {
		const code: any = await Promo.findOne({
			used: { $elemMatch: { userId: player.dbId } }
		});
		if (!code) return;

		await player.moneyHelper.change(code.award, 'bank', 'referal');

		if (code.userId) {
			const inviter = mp.players
				.toArray()
				.find((item) => item.loggedIn && item.dbId === code.userId);

			if (inviter) {
				await inviter.moneyHelper.change(code.income, 'bank', 'referal income');
			} else {
				await User.findByIdAndUpdate(code.userId, {
					$inc: { 'money.bank': code.income }
				});
			}
		}
	}

	private async useCode(player: PlayerMp, code: string) {
		const promo: any = await Promo.findOne({ code, userId: { $ne: player.dbId } });
		if (!promo) return Promise.reject({ err: 'Неверный промо-код' });

		const alreadyUsed = await Promo.findOne({
			'used.userId': player.dbId
		}).countDocuments();
		if (alreadyUsed) return Promise.reject({ err: 'Вы уже использовали промо-код' });

		promo.used.push({ userId: player.dbId });
		await promo.save();

		if (player.playedTime >= this.fullfiledTime * 60) {
			await this.giveMoney(player);
		}
	}

	private async checkCode(player: PlayerMp, code: string) {
		const isExists = await Promo.findOne({ code });
		if (!isExists) {
			notifications.error(player, 'Неверный промокод!');
			return false;
		}

		return true;
	}

	private async getCodeData(player: PlayerMp) {
		const promo = await Promo.findOne({ userId: player.dbId }).lean();

		const users = await User.find({
			_id: { $in: promo.used.map(({ userId }) => userId) }
		})
			.sort({ _id: -1 })
			.limit(5)
			.select({ firstName: 1, lastName: 1, _id: 0 })
			.lean();

		return {
			code: promo.code,
			income: promo.income,
			award: promo.award,
			referals: users.map((item) => `${item.firstName} ${item.lastName}`),
			totalAmount: promo.used.length
		};
	}

	private async generateCode() {
		let code;

		do {
			const hash = crypto
				.randomBytes(20)
				.toString('hex')
				.slice(0, 6)
				.toUpperCase();

			// eslint-disable-next-line no-await-in-loop
			const isExists = await Promo.findOne({ code: hash })
				.countDocuments()
				.exec();

			if (!isExists) code = hash;
		} while (!code);

		return code;
	}
}

export default new Referal();
