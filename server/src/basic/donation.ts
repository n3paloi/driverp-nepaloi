import * as rpc from 'rage-rpc';
import UserModel from '../models/User';
import notifications from '../helpers/notifications';
import prison from './prison';

const moneyItems = {
	'100k': 100000,
	'1kk': 1000000,
	'5kk': 5000000
};

const prices = {
	'100k': 100,
	'1kk': 1000,
	'5kk': 5000,
	escape: 250,
	vehicleSlot: 500
};

class Donation {
	constructor() {
		mp.events.subscribe({
			'Donation-GetMultiplier': this.getMultiplier,
			'Donation-ShowMenu': this.showMenu,
			'Donation-Buy': this.buy.bind(this)
		});
	}

	private getMultiplier() {
		return parseInt(process.env.DONATION_MULTIPLIER, 10);
	}

	private showMenu(player: PlayerMp) {
		rpc.callClient(player, 'Donation-ShowMenu', prices);
	}

	private async buy(player: PlayerMp, product: string) {
		try {
			switch (product) {
				case 'escape':
					await this.escapeFromPrison(player);
					break;

				case 'wanted':
					await this.clearWanted(player);
					break;

				case 'vehicleSlot':
					await this.addVehicleSlot(player);
					break;

				default:
					await this.giveMoney(player, product);
					break;
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	private async addVehicleSlot(player: PlayerMp) {
		const canBuy = await player.moneyHelper.change(
			-prices.vehicleSlot,
			'drivepoints',
			'vehicle slot'
		);

		if (!canBuy) {
			notifications.error(player, 'Недостаточно средств!');

			return Promise.reject();
		}

		await UserModel.findByIdAndUpdate(player.dbId, { $inc: { vehicleSlots: 1 } });

		player.vehicleSlots += 1;
	}

	private async clearWanted(player: PlayerMp) {
		if (!prison.getViolator(player.id) || player.getVariable('insideJail')) {
			notifications.error(player, 'Вас не розыскивают!');

			return Promise.reject();
		}

		const canBuy = await player.moneyHelper.change(
			-prices.wanted,
			'drivepoints',
			'clear wanted'
		);

		if (!canBuy) {
			notifications.error(player, 'Недостаточно средств!');

			return Promise.reject();
		}

		await prison.deleteViolator(player);
	}

	private async escapeFromPrison(player: PlayerMp) {
		const violator = prison.getViolator(player.id);

		if (!violator || !violator.inside) {
			notifications.error(player, 'Вы не находитесь в заключении!');

			return Promise.reject();
		}

		const canBuy = await player.moneyHelper.change(
			-prices.escape,
			'drivepoints',
			'escape from prison'
		);

		if (!canBuy) {
			notifications.error(player, 'Недостаточно средств!');

			return Promise.reject();
		}

		await prison.deleteViolator(player);
		prison.releaseViolator(player);
	}

	private async giveMoney(player: PlayerMp, item: string) {
		const amount = moneyItems[item];
		if (!amount) return Promise.reject();

		const canBuy = await player.moneyHelper.change(
			-prices[item],
			'drivepoints',
			'buy money'
		);
		if (!canBuy) {
			notifications.error(player, 'Недостаточно средств!');
			return Promise.reject();
		}

		await player.moneyHelper.change(amount, 'bank', 'donation');
	}
}

const donation = new Donation();
