import notifications from '../../helpers/notifications';
import coords from '../../data/services/airShop';
import VehicleShop from './shop';

const items = ['havok', 'swift2', 'duster', 'dodo', 'vestra', 'luxor2', 'shamal'];

class AirShop extends VehicleShop {
	constructor() {
		super(
			'airshop',
			{
				name: 'Авиасалон',
				entities: coords,
				markerData: { radius: 0.75 },
				blipData: { model: 602, color: 4 }
			},
			items
		);
	}

	protected canHaveVehicle(player: PlayerMp) {
		const vehCount = Object.keys(player.vehicles).length;

		if (vehCount >= player.vehicleSlots) {
			return notifications.error(player, 'Нужно больше слотов для ТС!');
		}
		if (!player.isHasLicense('air')) {
			return notifications.error(player, 'У вас нет лицензии на воздушный транспорт!');
		}

		return true;
	}
}

const shop = new AirShop();
