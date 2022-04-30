import { random, sample } from 'lodash';
import { getNearestVehicleInRange } from '../utils/vehicles';
import vehicleTuning from '../basic/vehicle/tuning';
import vehicleManager from '../basic/vehicle';

type Position = PositionEx & { rot?: number };

class JobVehicle {
	private readonly models: string[];

	private readonly positions: Position[];

	private readonly color?: RGB;

	constructor(models: string[], positions: Position[], color?: RGB) {
		this.models = models;
		this.positions = positions;
		this.color = color;
	}

	async spawn(player: PlayerMp, owning = true) {
		const model = sample(this.models);
		const position = this.getFreePosition() || sample(this.positions);

		const vehicle = await vehicleManager.create(
			model,
			position,
			{
				type: 'user',
				id: owning ? player.dbId : 'temp'
			},
			true,
			true
		);
		vehicle.job = player.job;
		this.paintVehicle(vehicle);

		return vehicle;
	}

	private paintVehicle(vehicle: VehicleMp) {
		const color: RGB = this.color || [random(0, 255), random(0, 255), random(0, 255)];
		vehicleTuning.setPaint(vehicle, color);
	}

	private getFreePosition() {
		return this.positions.find((item) => {
			const vehicle = getNearestVehicleInRange(new mp.Vector3(item.x, item.y, item.z), 2);
			return !vehicle;
		});
	}
}

export default JobVehicle;
