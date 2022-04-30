import * as rpc from 'rage-rpc';
import Service from './service';
import coords from '../data/services/carRepairs';
import { getNearestVehicleInRange } from '../utils/vehicles';
import { getStreamedPlayers } from '../utils/players';
import notifications from '../helpers/notifications';
import vehicleState from '../basic/vehicle/state';

class VehicleRepair extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'СТО',
			entities: coords,
			markerData: { radius: 2.5 },
			blipData: { model: 446, color: 83 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			repair: 500,
			repairKit: 950
		};
	}

	repairVehicle(vehicle: VehicleMp, maxHealth: number) {
		if (!vehicle) return;

		vehicle.repair();

		vehicleState.setHealth(vehicle, maxHealth, maxHealth);
		vehicleState.setDoors(vehicle, []);
	}

	useRepairKit(player: PlayerMp, kits: any) {
		if (player.vehicle) {
			return notifications.error(
				player,
				'Выйдите из ТС, чтобы использовать данный предмет'
			);
		}

		const vehicle = getNearestVehicleInRange(player.position, 3.2);

		if (!vehicle) return;

		this.repairVehicle(vehicle, (vehicle.maxHealth / 100) * 80);

		getStreamedPlayers(vehicle.position).forEach((item) =>
			rpc.callClient(item, 'VehicleRepair-Repair', vehicle)
		);

		kits.count--;
	}

	getFinalPrice(products: any) {
		let finalPrice = 0;

		for (const name in products) {
			if (products[name] > 0) {
				const price = this.prices[name];

				finalPrice += price * products[name];
			}
		}

		return finalPrice;
	}

	async buy(player: PlayerMp, products: any) {
		try {
			const cost = this.getFinalPrice(products);

			await player.moneyHelper.different(cost, 'repair kit');

			for (const name in products) {
				if (products[name]) {
					player.addToInventory({ name, type: 'others', count: products[name] });
				}
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	async buyRepair(player: PlayerMp) {
		try {
			if (!player.isDriver()) {
				return notifications.error(player, 'Сядьте на водительское место!');
			}

			await player.moneyHelper.different(this.prices.repair, 'repair');

			await this.repairVehicle(player.vehicle, player.vehicle.maxHealth);

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'VehicleRepair-ShowBuyerMenu', this.prices);
	}
}

const vehicleRepair = new VehicleRepair();

mp.events.subscribe({
	'VehicleRepair-BuyRepair': (player) => vehicleRepair.buyRepair(player),
	'VehicleRepair-Buy': (player, basket) => vehicleRepair.buy(player, basket)
});

export default vehicleRepair;
