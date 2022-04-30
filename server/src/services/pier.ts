import * as rpc from 'rage-rpc';
import Service from './service';
import vehicleManager from '../basic/vehicle';
import coords from '../data/services/piers';
import notifications from '../helpers/notifications';

class Pier extends Service {
	constructor() {
		const info = {
			name: 'Пирс',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 471, color: 26 }
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
		if (!player.isHasLicense('boat')) {
			return notifications.error(player, 'У вас нет лицензии на водный транспорт!');
		}

		const boats = [];

		Object.entries(player.vehicles).forEach(
			([dbId, vehicle]) => vehicle.type === 'boat' && boats.push({ dbId, ...vehicle })
		);

		rpc.callClient(player, 'Pier-ShowMenu', [boats]);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Pier-SpawnBoat': (player, id) => this.spawn(player, id)
		});
	}
}

const pier = new Pier();