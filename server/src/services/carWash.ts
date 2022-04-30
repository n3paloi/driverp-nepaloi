import * as rpc from 'rage-rpc';
import Service from './service';
import coords from '../data/services/carWash';
import notifications from '../helpers/notifications';
import vehicleState from '../basic/vehicle/state';

class CarWash extends Service {
	private price: number;

	constructor() {
		const info = {
			name: 'Автомойка',
			entities: coords,
			markerData: { radius: 2.5 },
			blipData: { model: 100, color: 48 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.price = 500;
	}

	async buy(player: PlayerMp) {
		try {
			await player.moneyHelper.different(this.price, 'car wash');

			vehicleState.setDirtLevel(player.vehicle, 0);

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.vehicle) return;

		rpc.callClient(player, 'CarWash-ShowBuyerMenu', this.price);
	}
}

const carWash = new CarWash();

mp.events.subscribe({
	'CarWash-Buy': (player) => carWash.buy(player)
});