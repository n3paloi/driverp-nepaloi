import notifications from '../../helpers/notifications';
import coords from '../../data/services/boatShop';
import VehicleShop from './shop';

const items = ['dinghy', 'jetmax', 'seashark', 'speeder', 'toro', 'tropic2'];

class BoatShop extends VehicleShop {
	constructor() {
		super(
			'boatshop',
			{
				name: 'Магазин лодок',
				entities: coords,
				markerData: { radius: 0.75 },
				blipData: { model: 455, color: 60 }
			},
			items
		);
	}

	protected canHaveVehicle(player: PlayerMp) {
		const vehCount = Object.keys(player.vehicles).length;

		if (vehCount >= player.vehicleSlots) {
			return notifications.error(player, 'Нужно больше слотов для ТС!');
		}
		if (!player.isHasLicense('boat')) {
			return notifications.error(player, 'У вас нет лицензии на водный транспорт!');
		}

		return true;
	}
}

const shop = new BoatShop();
