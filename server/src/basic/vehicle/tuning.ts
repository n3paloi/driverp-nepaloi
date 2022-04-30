export type TuningData = {
	engine: number;
	turbo: number;
	horn: number;
	transmission: number;
	glasses: number;
	suspention: number;
	brakes: number;
	lights: number;
	armour: number;
	spoiler: number;
	sideskirt: number;
	exhaust: number;
	frame: number;
	grille: number;
	hood: number;
	roof: number;
	bumpers: {
		front: number;
		rear: number;
	};
	neon: {
		color: RGB;
		position: number;
	};
	numbers: number;
	livery: number;
	wheels: {
		model: number;
		color: number;
		tyres: number;
		smoke?: RGB;
	};
	paint: {
		primary: RGB;
		secondary: RGB;
		type: number;
	};
};

class VehicleTuning {
	get default(): TuningData {
		return {
			engine: -1,
			turbo: -1,
			horn: -1,
			transmission: -1,
			glasses: 0,
			suspention: -1,
			brakes: -1,
			lights: -1,
			armour: -1,
			neon: {
				color: [255, 255, 255],
				position: -1
			},
			spoiler: -1,
			sideskirt: -1,
			exhaust: -1,
			frame: -1,
			grille: -1,
			hood: -1,
			roof: -1,
			bumpers: {
				front: -1,
				rear: -1
			},
			numbers: 0,
			livery: -1,
			wheels: {
				model: -1,
				color: 0,
				tyres: 0,
				smoke: [255, 255, 255]
			},
			paint: {
				primary: [0, 0, 0],
				secondary: [0, 0, 0],
				type: 0
			}
		};
	}

	update(vehicle: VehicleMp, data: { [K in keyof TuningData]?: TuningData[K] }) {
		vehicle.setVariable('tuning', { ...this.get(vehicle), ...data });
	}

	setPaint(vehicle: VehicleMp, color: RGB, type = 0) {
		this.update(vehicle, { paint: { type, primary: color, secondary: color } });
	}

	private get(vehicle: VehicleMp) {
		return vehicle?.getVariable('tuning') || {};
	}
}

export default new VehicleTuning();