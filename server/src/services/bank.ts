import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../models/User';
import coords from '../data/services/bank';
import Service from './service';
import notifications from '../helpers/notifications';

class Bank extends Service {
	constructor() {
		const info = {
			name: 'Банк',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 500, color: 2 }
		};

		super(info.name, info.entities, info.markerData, info.blipData);
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'Bank-ShowMenu');
	}

	async getCash(player: PlayerMp, value: number) {
		if (!player.cardNumber) {
			return notifications.error(player, 'У вас нет банковского счета!');
		}

		await player.moneyHelper.move(value, 'bank', 'cash');
	}

	async putCash(player: PlayerMp, value: number) {
		if (!player.cardNumber) {
			return notifications.error(player, 'У вас нет банковского счета!');
		}

		await player.moneyHelper.move(value, 'cash', 'bank');
	}

	async sendMoney(player: PlayerMp, value: string, number: string) {
		const cardNumber = parseInt(number, 10);
		const user = await User.findOne({
			cardNumber: isNumber(cardNumber) ? cardNumber : 0
		});

		if (!user) {
			return notifications.error(player, 'Неверный номер счета!');
		}

		await player.moneyHelper.transfer(parseInt(value, 10), 'bank', user._id);
	}
}

const bank = new Bank();

mp.events.subscribe({
	'Bank-GetCash': (player, value) => bank.getCash(player, value),
	'Bank-PutCash': (player, value) => bank.putCash(player, value),
	'Bank-SendMoney': (player, value, cardNumber) =>
		bank.sendMoney(player, value, cardNumber)
});
