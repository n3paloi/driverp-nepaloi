import * as rpc from 'rage-rpc';
import Service from './service';
import vehicleManager from '../basic/vehicle';
import coords from '../data/services/airports';
import notifications from '../helpers/notifications';

class Airport extends Service {
	constructor() {
		const info = {
			name: 'Аэропорт',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 585, color: 26 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.subscribeToEvents();
	}

	spawn(player: PlayerMp, id: string) {
		const index = mp.colshapes.at(player.colshapeId).customData;
		const position = { ...coords[index].stand, dimension: 0 };

		vehicleManager.spawnPlayerVehicle(player, id, position);

		notifications.success(player, 'Ваше ТС успешно доставлено!');
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.isHasLicense('air')) {
			return notifications.error(player, 'У вас нет лицензии на воздушный транспорт!');
		}

		const vehicles = [];

		Object.entries(player.vehicles).forEach(
			([dbId, vehicle]) => vehicle.type === 'air' && vehicles.push({ dbId, ...vehicle })
		);

		rpc.callClient(player, 'Airport-ShowMenu', [vehicles]);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Airport-SpawnVehicle': (player, id) => this.spawn(player, id)
		});
	}
}

const airport = new Airport();
