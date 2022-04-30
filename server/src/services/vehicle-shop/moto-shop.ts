import notifications from '../../helpers/notifications';
import coords from '../../data/services/motoShops';
import VehicleShop from './shop';

const items = [
	'bmx',
	'cruiser',
	'fixter',
	'scorcher',
	'tribike',
	'tribike2',
	'tribike3',
	'cliffhanger',
	'fcr2',
	'hakuchou',
	'sanctus',
	'vader',
	'shotaro',
	'bati',
	'daemon',
	'enduro',
	'chimera',
	'double',
	'hexer',
	'carbonrs',
	'faggio3'
];

class MotoShop extends VehicleShop {
	constructor() {
		super(
			'motoshop',
			{
				name: 'Мотосалон',
				entities: coords,
				markerData: { radius: 0.75 },
				blipData: { model: 559, color: 46 }
			},
			items
		);
	}

	protected canHaveVehicle(player: PlayerMp) {
		const vehCount = Object.keys(player.vehicles).length;

		if (vehCount >= player.vehicleSlots) {
			return notifications.error(player, 'Нужно больше слотов для ТС!');
		}
		if (!player.isHasLicense('motorcycle')) {
			return notifications.error(player, 'У вас нет прав категории A!');
		}

		return true;
	}
}

const shop = new MotoShop();
