import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Service from './service';
import vehicle from '../basic/vehicle';
import coords from '../data/services/carSell';
import vehicles from '../data/vehicles';
import notifications from '../helpers/notifications';

class VehicleSell extends Service {
	constructor() {
		const info = {
			name: 'Продажа транспорта',
			entities: coords,
			markerData: { radius: 2 },
			blipData: { model: 524, color: 2 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		mp.events.subscribe({
			'VehicleSell-Confirm': this.toSell.bind(this)
		});
	}

	getPrice(player: PlayerMp) {
		return player.vehicle && (vehicles[player.vehicle.name].price / 100) * 45;
	}

	async toSell(player: PlayerMp) {
		const cost = this.getPrice(player);

		if (!isNumber(cost) || cost < 0) return Promise.reject();

		const canSell = await player.moneyHelper.change(cost, 'bank', 'veh gov sell');

		if (!canSell) return Promise.reject();

		await vehicle.delete(player.vehicle);

		notifications.success(player, 'ТС успешно продано');
	}

	showMenu(player: PlayerMp) {
		if (!vehicle.isOwner(player.vehicle, player)) {
			return notifications.error(player, 'Нужно быть в своём ТС!');
		}

		rpc.callClient(player, 'VehicleSell-ShowMenu', this.getPrice(player));
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.vehicle) return notifications.error(player, 'Нужно быть в ТС!');

		this.showMenu(player);
	}
}

const vehicleSell = new VehicleSell();
