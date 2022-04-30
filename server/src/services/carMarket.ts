import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Service from './service';
import VehicleModel from '../models/Vehicle';
import vehicleManager from '../basic/vehicle';
import coords from '../data/services/carMarkets';
import vehicles from '../data/vehicles';
import notifications from '../helpers/notifications';

class CarMarket extends Service {
	private maxOwners: number;

	constructor() {
		const info = {
			name: 'Авторынок',
			entities: coords,
			markerData: { radius: 2 },
			blipData: { model: 498, color: 2 }
		};

		super(info.name, info.entities, info.markerData, info.blipData);

		this.maxOwners = 5;
	}

	getMinimalPrice(player: PlayerMp) {
		return (vehicles[player.vehicle.name].price / 100) * 10;
	}

	checkPassangerCount(player: PlayerMp) {
		return new Promise((resolve, reject) => {
			if (player.vehicle.getOccupants().length < 2) {
				notifications.error(player, 'Нужен пассажир для продажи автомобиля');

				reject();
			}

			if (player.vehicle.getOccupants().length > 2) {
				notifications.error(player, 'Оставьте только одного пассажира');

				reject();
			}

			resolve();
		});
	}

	async showSellerMenu(player: PlayerMp) {
		if (!vehicleManager.isOwner(player.vehicle, player)) {
			return notifications.error(player, 'Нужно быть в своём ТС!');
		}

		await this.checkPassangerCount(player);

		rpc.callClient(player, 'CarMarket-ShowMenu', [
			player.vehicle.name,
			this.getMinimalPrice(player),
			true
		]);
	}

	async showBuyerMenu(player: PlayerMp, value: any) {
		await this.checkPassangerCount(player);

		const buyer = player.vehicle.getOccupants()[1];
		const price = parseInt(value, 10);

		if (!mp.players.exists(buyer) || !isNumber(price)) return;
		if (price < this.getMinimalPrice(player)) {
			return notifications.error(player, 'Ваше значение меньше мин. суммы продажи!');
		}

		const { vehicle } = player;

		vehicle.customPrice = price;

		rpc.callClient(buyer, 'CarMarket-ShowMenu', [
			vehicle.name,
			price,
			false,
			vehicle.owners.length,
			this.maxOwners
		]);
	}

	async trade(player: any) {
		if (!player.vehicle) return Promise.reject();

		const seller = player.vehicle.getOccupant(-1);
		const { vehicle } = player;
		const { customPrice: price } = vehicle;

		if (
			!mp.players.exists(seller) ||
			!mp.vehicles.exists(vehicle) ||
			!vehicleManager.isOwner(vehicle, seller) ||
			price < 0
		) {
			return Promise.reject();
		}

		if (vehicle.owners.length >= this.maxOwners) {
			notifications.error(player, 'Достигнут лимит владельцев у данного ТС');

			return Promise.reject();
		}

		const canBuy = await player.moneyHelper.change(-price, 'bank', 'car market buy');

		if (!canBuy) {
			notifications.error(player, 'Недостаточно средств!');

			return Promise.reject();
		}

		await seller.moneyHelper.change(price, 'bank', 'car market sell');

		player.vehicles[vehicle.dbId] = {
			name: vehicle.name,
			id: vehicle.id,
			type: vehicleManager.getType(vehicle.name),
			number: vehicle.numberPlate
		};
		delete seller.vehicles[vehicle.dbId];

		vehicle.owners.push(seller.dbId);

		await vehicleManager.setOwner(vehicle, {
			type: 'user',
			id: player.dbId
		});
		await VehicleModel.findByIdAndUpdate(vehicle.dbId, {
			$push: { owners: seller.dbId }
		});

		notifications.success(seller, 'Успешная продажа!');
		notifications.success(player, 'Успешная покупка!');
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.vehicle) return notifications.error(player, 'Нужно быть в ТС!');

		this.showSellerMenu(player);
	}
}

const carMarket = new CarMarket();

mp.events.subscribe({
	'CarMarket-Confirm': (player) => carMarket.trade(player),
	'CarMarket-ShowBuyerMenu': (player, price) => carMarket.showBuyerMenu(player, price)
});
