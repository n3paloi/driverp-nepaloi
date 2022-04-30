import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Service from './service';
import { getNearestVehicleInRange } from '../utils/vehicles';
import coords from '../data/services/illegalMarkets';
import prison from '../basic/prison';
import notifications from '../helpers/notifications';
import vehicleState from '../basic/vehicle/state';

class IllegalMarket extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'Барыга',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 543, color: 56 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			lockPick: 500,
			sack: 1000,
			rope: 500
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'IllegalMarket-ShowBuyerMenu', this.prices);
	}

	getFinalPrice(items: any) {
		let finalPrice = 0;

		for (const name in items) {
			if (items[name] || items[name] < 0) {
				const price = this.prices[name];

				finalPrice += price * items[name];
			}
		}

		return finalPrice;
	}

	async buy(player: PlayerMp, things: any) {
		try {
			const cost = parseInt(this.getFinalPrice(things), 10);

			if (!isNumber(cost) || cost < 0) return Promise.reject();

			await player.moneyHelper.different(cost, 'illegal market');

			for (const name in things) {
				if (things[name]) {
					player.addToInventory({ name, type: 'others', count: things[name] });
				}
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	useLockPick(player: PlayerMp, items: any) {
		const vehicle = getNearestVehicleInRange(player.position, 3);

		if (player.vehicle || !vehicle || vehicle.dbId || !vehicleState.get(vehicle).locked)
			return;

		items.count--;

		player.playAnimation('mini@cpr@char_a@cpr_str', 'cpr_success', 1, 33);

		player.timeout(() => {
			vehicleState.setLockStatus(vehicle, false);

			player.stopAnimation();
			notifications.success(player, 'Машина успешно взломана');
			prison.addViolation(player, 1.3);

			mp.events.call('playerUnlockVehicle', player, vehicle);
		}, 15000);

		notifications.info(player, 'Щас... ещё немножко....');
	}
}

const illegalMarket = new IllegalMarket();

mp.events.subscribe({
	'IllegalMarket-Buy': (player, basket) => illegalMarket.buy(player, basket)
});

export default illegalMarket;
