import * as rpc from 'rage-rpc';
import User from '../../models/User';
import { validateName } from '../../utils/validation';
import notifications from '../../helpers/notifications';
import './cityHallBuilding';

class CityHall {
	protected prices: any;

	constructor() {
		this.prices = {
			licenses: {
				car: 2000,
				truck: 6000,
				motorcycle: 4000,
				gun: 100000,
				house: 500000,
				business: 250000,
				gold: 15000,
				diver: 10000,
				processing: 35000,
				boat: 30000,
				air: 100000,
				fishing: 120000
			},
			card: 1000,
			passport: 50
		};
	}

	openMenu(player: PlayerMp, type: string) {
		const licenses = type === 'licenses' ? player.licenses : null;

		rpc.callClient(player, 'CityHall-ShowMenu', [type, this.prices[type], licenses]);
	}

	async generateCardNumber() {
		let number;

		do {
			const cardNumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
			// eslint-disable-next-line no-await-in-loop
			const isExists = await User.findOne({ cardNumber }).countDocuments();

			if (!isExists) number = cardNumber;
		} while (!number);

		return number;
	}

	async buyCard(player: PlayerMp) {
		try {
			if (player.cardNumber) {
				return notifications.error(player, 'У вас уже есть банковский счет!');
			}

			await player.moneyHelper.different(this.prices.card, 'card');

			const cardNumber = await this.generateCardNumber();
			await User.findByIdAndUpdate(player.dbId, { $set: { cardNumber } });

			player.cardNumber = cardNumber;

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	getFinalPrice(licenses: string[]) {
		let finalPrice = 0;

		licenses.forEach((name) => {
			const price = this.prices.licenses[name];

			finalPrice += price;
		});

		return finalPrice;
	}

	async buyLicenses(player: PlayerMp, licenses: string[]) {
		try {
			const cost = this.getFinalPrice(licenses);

			await player.moneyHelper.different(cost, 'licenses');

			licenses.forEach((name) =>
				player.licenses.push({
					name,
					legal: true
				})
			);

			await User.findByIdAndUpdate(player.dbId, {
				$set: { licenses: player.licenses }
			});

			notifications.success(player, 'Успешная покупка!');

			return player.licenses;
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	async changeDocs(player: PlayerMp, { firstName, lastName }) {
		try {
			const error = await validateName(firstName, lastName);
			if (error) return notifications.error(player, error);

			const canBuy = await player.moneyHelper.change(
				-this.prices.passport,
				'drivepoints',
				'change name'
			);
			if (!canBuy) {
				notifications.error(player, 'Недостаточно средств!');
				return Promise.reject();
			}

			await User.findByIdAndUpdate(player.dbId, { $set: { firstName, lastName } });
			player.setVariable('realName', `${firstName} ${lastName}`);

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const cityHall = new CityHall();

mp.events.subscribe({
	'CityHall-BuyLicenses': (player, ...basket) => cityHall.buyLicenses(player, basket),
	'CityHall-BuyCard': (player) => cityHall.buyCard(player),
	'CityHall-BuyDocs': (player, data) => cityHall.changeDocs(player, data)
});
mp.events.subscribeToDefault({
	'Keys-E': (player) => {
		if (!player.canOpen.cityHall) return;

		cityHall.openMenu(player, player.canOpen.cityHall);
	}
});

export default cityHall;
