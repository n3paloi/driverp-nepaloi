import './controls';
import './sync';
import './speedometer';
import './cruise-control';

const player = mp.players.local;

class Vehicle {
	constructor() {
		this.subscribeToEvents();
	}

	getNearestInRange(range: number) {
		const { x, y, z } = player.position;

		let currentVehicle: VehicleMp;
		let tempDist = 99999999;

		mp.vehicles.forEachInStreamRange((vehicle) => {
			const { position } = vehicle;
			const dist = mp.game.system.vdist(position.x, position.y, position.z, x, y, z);

			if (dist < range && dist < tempDist) {
				currentVehicle = vehicle;
				tempDist = dist;
			}
		});

		return currentVehicle;
	}

	canSpawn() {
		const {
			position: { x, y, z }
		} = player;

		return mp.game.pathfind.isPointOnRoad(x, y, z, 0);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			canSpawnVehicle: this.canSpawn
		});
	}
}

export default new Vehicle();
