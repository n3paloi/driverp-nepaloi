import { isNumber } from 'lodash';
import { getPlayerByDbId } from '../../utils/players';
import notifications from '../../helpers/notifications';
import FactionGarage from '../../factions/garage';

class VehicleDespawn {
	private despawnTimeout: number;

	constructor() {
		this.despawnTimeout = 10;

		mp.events.add('playerQuit', this.despawnPlayerVehicles);
		mp.events.subscribe({
			despawnPlayerVehicle: this.despawnWithTimeout.bind(this)
		});
	}

	despawnVehicle(vehicle: VehicleMp) {
		if (!mp.vehicles.exists(vehicle) || vehicle.getOccupants().length) return;

		const { owner } = vehicle;

		if (!owner) return vehicle.destroy();

		const player = getPlayerByDbId(owner.id);

		if (player && player.vehicles[vehicle.dbId]) {
			player.vehicles[vehicle.dbId].id = undefined;
			notifications.info(player, 'Ваше ТС эвакуировано');
		} else if (owner.type === 'faction') {
			return FactionGarage.despawnVehicle(vehicle);
		}

		vehicle.destroy();
	}

	private despawnWithTimeout(player: PlayerMp, dbId: string) {
		if (player.vehicleDespawn || !dbId) return;

		const data = player.vehicles[dbId];
		const vehicle = isNumber(data.id) ? mp.vehicles.at(data.id) : null;

		if (!vehicle) return;

		if (vehicle && vehicle.getOccupants().length) {
			return notifications.error(player, 'В вашем ТС сидит пассажир!');
		}

		setTimeout(() => {
			if (!mp.players.exists(player)) return;

			if (mp.vehicles.exists(vehicle) && vehicle.getOccupants().length) {
				player.vehicleDespawn = false;

				return notifications.error(player, 'В ваше ТС кто-то сел...');
			}

			this.despawnVehicle(vehicle);

			player.vehicleDespawn = false;
		}, this.despawnTimeout * 1000);

		notifications.info(
			player,
			`Механик эвакуирует ваше ТС через ${this.despawnTimeout} сек.`
		);

		player.vehicleDespawn = true;
	}

	private despawnPlayerVehicles(player: PlayerMp) {
		if (!player.dbId) return;

		Object.values(player.vehicles).forEach((item) => {
			if (!isNumber(item.id)) return;

			const vehicle = mp.vehicles.at(item.id);

			if (mp.vehicles.exists(vehicle)) vehicle.destroy();
		});
	}
}

export default new VehicleDespawn();
