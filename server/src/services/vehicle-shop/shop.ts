import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import notifications from '../../helpers/notifications';
import vehiclesList from '../../data/vehicles';
import vehicleManager from '../../basic/vehicle';
import Service from '../service';

const shops: { [name: string]: VehicleShop } = {};

type VehicleShopData = {
	name: string;
	entities: PositionEx[];
	markerData: { radius: number };
	blipData: { model: number; color: number };
};

class VehicleShop extends Service {
	private vehicles: string[];

	private readonly id: string;

	constructor(id: string, data: VehicleShopData, vehicles: string[]) {
		super(data.name, data.entities, data.markerData, data.blipData);

		this.id = id;
		this.vehicles = vehicles;
		shops[id] = this;

		VehicleShop.subscribeToEvents();
	}

	static subscribeToEvents() {
		mp.events.subscribe({
			'VehicleShop-Buy': async (player: PlayerMp, id: string, model: string) => {
				const shop = shops[id];
				await shop.buy(player, model);
			},
			'VehicleShop-Exit': (player: PlayerMp) => {
				player.dimension = 0;
			}
		});
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle) return;

		player.dimension = player.id + 1;
		player.serviceIndex = mp.colshapes.at(player.colshapeId)?.customData;

		rpc.callClient(player, 'VehicleShop-ShowBuyerMenu', [this.id, this.getPrices()]);
	}

	async buy(player: PlayerMp, model: string) {
		try {
			if (!this.canHaveVehicle(player)) return;

			const { price } = vehiclesList[model];
			if (!isNumber(price)) return;

			await player.moneyHelper.different(price, 'veh shop');

			const position = {
				x: 0,
				y: 0,
				z: 0,
				dimension: 1000
			};
			const vehicle = await vehicleManager.create(
				model,
				position,
				{ type: 'user', id: player.dbId },
				false,
				true,
				player
			);
			player.vehicles[vehicle.dbId].id = undefined;
			vehicle.destroy();

			notifications.success(player, 'Успешная покупка! Вызвать ТС можно через телефон');
		} catch (err) {
			return Promise.reject();
		}
	}

	protected getPrices() {
		const prices: { [name: string]: number } = {};

		this.vehicles.forEach((name) => {
			prices[name] = vehiclesList[name].price;
		});

		return prices;
	}

	protected canHaveVehicle(player: PlayerMp) {
		const vehCount = Object.keys(player.vehicles).length;

		if (vehCount >= player.vehicleSlots) {
			return notifications.error(player, 'Нужно больше слотов для ТС!');
		}

		return true;
	}
}

export default VehicleShop;
