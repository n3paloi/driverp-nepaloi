type State = {
	engine: boolean;
	locked: boolean;
	dirtLevel: number;
	health: {
		body: number;
		engine: number;
	};
	roof: boolean;
	doors: number[];
	wheels: number[];
	radioIndex: number;
	trunk: boolean;
	indicators: {
		left: boolean;
		right: boolean;
	};
};

class VehicleState {
	get(vehicle: VehicleMp): State {
		return vehicle?.getVariable('state');
	}

	setEngineState(vehicle: VehicleMp, status: boolean, instantly: boolean) {
		if (vehicle) vehicle.setEngineOn(status, instantly, true);
	}

	setDirtLevel(vehicle: VehicleMp, value: number) {
		if (vehicle) vehicle.setDirtLevel(value);
	}

	setLockStatus(vehicle: VehicleMp, status: boolean) {
		if (!vehicle) return;

		if (status) {
			mp.game.audio.playSoundFromEntity(
				1,
				'Remote_Control_Close',
				vehicle.handle,
				'PI_Menu_Sounds',
				true,
				0
			);
		} else {
			mp.game.audio.playSoundFromEntity(
				1,
				'Remote_Control_Open',
				vehicle.handle,
				'PI_Menu_Sounds',
				true,
				0
			);
		}

		vehicle.setDoorsLocked(status ? 2 : 1);
	}

	setDoorsState(vehicle: VehicleMp, doors: number[]) {
		if (!vehicle) return;

		doors.forEach((status, index) => {
			if (!status) vehicle.setDoorShut(index, false);
			else vehicle.setDoorOpen(index, false, false);
		});
	}

	setWheelsState(vehicle: VehicleMp, wheels: number[]) {
		if (!vehicle) return;

		vehicle.setTyresCanBurst(true);

		wheels.forEach((status, index) => {
			if (status === 1) vehicle.setTyreBurst(index, false, 1000);
			else if (status === 0) vehicle.setTyreFixed(index);
			else vehicle.setTyreBurst(index, true, 1000);
		});
	}

	setHealth(vehicle: VehicleMp, body: number, engine: number) {
		if (!vehicle) return;

		vehicle.setBodyHealth(body);
		vehicle.setEngineHealth(engine);
	}

	setTurnSignalsStatus(vehicle: VehicleMp, left: boolean, right: boolean) {
		if (!vehicle) return;

		vehicle.setIndicatorLights(1, left);
		vehicle.setIndicatorLights(0, right);
	}

	setRoofState(vehicle: VehicleMp, state: boolean) {
		if (!vehicle) return;

		if (state) vehicle.raiseConvertibleRoof(false);
		else vehicle.lowerConvertibleRoof(false);
	}
}

export default new VehicleState();
