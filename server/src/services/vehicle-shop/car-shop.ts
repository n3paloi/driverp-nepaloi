import notifications from '../../helpers/notifications';
import coords from '../../data/services/carShops';
import VehicleShop from './shop';

const items = [
	'vwtoua19c',
	'q820',
	'pts21',
	'bmwg07',
	'cullinan',
	'rs7',
	'divo',
	'lx2018',
	'C7',
	'gx71',
	'e92',
	'tahoe',
	'e63',
	'supra2',
	'camry55',
	'lc100',
	'm5e60',
	'500w124',
	'63lb',
	'm4f82',
	'teslax',
	'tts',
	'models',
	'brabus700',
	'dl2016',
	'srt8',
	'svr16',
	'bmm',
	'675lt',
	'urus',
	'lamboavj',
	'supersport',
	'ff',
	'evo10',
	'skyline',
	'gs350',
	'cox2013',
	'f458',
	'r8v10',
	'16challenger',
	'17m760i',
	'69charger',
	'a8audi',
	'ap2',
	'bentayga17',
	'm5f90',
	'm5',
	'bmwe36',
	'c63w204',
	'civic',
	'focusrs',
	'g65amg',
	'gtr',
	'impala',
	'toyotasj',
	'lhuracan',
	'm2f22',
	'm3e46',
	'silv86',
	'oldm6',
	'panamera17turbo',
	'AUDIRS6TK',
	'S63AMG',
	'mustangbkit',
	'urban',
	'vaz2106',
	'volga',
	'w140',
	'w210',
	'wraith',
	'x5e53',
	'x5m2016',
	'gle450',
	'18performante',
	'bmwm5f90'
];

class CarShop extends VehicleShop {
	constructor() {
		super(
			'carshop',
			{
				name: 'Автосалон',
				entities: coords,
				markerData: { radius: 0.75 },
				blipData: { model: 669, color: 24 }
			},
			items
		);
	}

	protected canHaveVehicle(player: PlayerMp) {
		const vehCount = Object.keys(player.vehicles).length;

		if (vehCount >= player.vehicleSlots) {
			return notifications.error(player, 'Нужно больше слотов для ТС!');
		}
		if (!player.isHasLicense('car')) {
			return notifications.error(player, 'У вас нет прав категории B!');
		}

		return true;
	}
}

const shop = new CarShop();
