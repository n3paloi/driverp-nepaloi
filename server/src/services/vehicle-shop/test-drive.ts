import vehicleManager from '../../basic/vehicle';

class TestDrive {
	private vehicles: Map<string, VehicleMp>;

	constructor() {
		this.vehicles = new Map();

		mp.events.subscribe({
			'TestDrive-Start': this.start.bind(this),
			'TestDrive-Stop': this.stop.bind(this)
		});
	}

	private async start(player: PlayerMp, position: PositionEx, model: string) {
		if (this.vehicles.has(player.dbId)) return;

		const vehicle = await vehicleManager.create(
			model,
			position,
			{
				type: 'user',
				id: player.dbId
			},
			true
		);
		vehicle.dimension = player.dimension;
		this.vehicles.set(player.dbId, vehicle);

		player.putIntoVehicle(vehicle, -1);
	}

	private stop(player: PlayerMp) {
		const vehicle = this.vehicles.get(player.dbId);

		if (vehicle) {
			vehicle.destroy();
			this.vehicles.delete(player.dbId);
		}
	}
}

const testDrive = new TestDrive();
