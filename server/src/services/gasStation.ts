import { isNumber } from 'lodash';
import * as rpc from 'rage-rpc';
import Service from './service';
import coords from '../data/services/gasStations';
import { getNearestVehicleInRange } from '../utils/vehicles';
import notifications from '../helpers/notifications';
import vehicleFuel from '../basic/vehicle/fuel';

class GasStation extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'АЗС',
			entities: coords,
			markerData: { radius: 2.5 },
			blipData: { model: 361, color: 78 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			liter: 20,
			jerrycan: 600
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'GasStation-ShowDialog', this.prices);
	}

	useJerrycan(player: PlayerMp, jerrycans: any) {
		if (player.vehicle) {
			return notifications.error(
				player,
				'Выйдите из ТС, чтобы использовать данный предмет'
			);
		}

		const vehicle = getNearestVehicleInRange(player.position, 3.2);

		if (vehicle) {
			vehicleFuel.fillUp(vehicle, vehicle.getVariable('maxFuel') / 1.5);

			jerrycans.count--;
		}
	}

	async buyJerrycan(player: PlayerMp, value: any) {
		try {
			const count = parseInt(value, 10);

			if (!isNumber(count) || count < 0) return;

			await player.moneyHelper.different(this.prices.jerrycan * count, 'jerrycan');

			await player.addToInventory({ count, type: 'others', name: 'jerrycan' });

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	async fillUp(player: PlayerMp, value: any) {
		try {
			if (!player.isDriver()) {
				return notifications.error(player, 'Сядьте на водительское место!');
			}

			const liters = parseInt(value, 10);

			if (!isNumber(liters) || liters < 0) return;

			const cost = liters * this.prices.liter;
			await player.moneyHelper.different(cost, 'fuel');

			vehicleFuel.fillUp(player.vehicle, liters);

			notifications.success(player, 'Вы успешно заправились');
		} catch (err) {
			return Promise.reject();
		}
	}

	async buy(player: PlayerMp, liters: number, jerrycans: number) {
		if (jerrycans) await this.buyJerrycan(player, jerrycans);
		if (liters) await this.fillUp(player, liters);
	}
}

const gasStation = new GasStation();

mp.events.subscribe({
	'GasStation-Buy': (player, liters, jerrycans) => {
		gasStation.buy(player, liters, jerrycans);
	}
});

export default gasStation;
