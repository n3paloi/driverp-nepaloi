import { random } from 'lodash';
import vehicleState from './state';

type Health = {
	body: number;
	engine: number;
};

class VehicleHealth {
	constructor() {
		mp.events.subscribeToDefault({
			vehicleDamage: this.onGotDamage.bind(this)
		});
	}

	set(vehicle: VehicleMp, body: number, engine: number) {
		vehicleState.setHealth(vehicle, body, engine);
	}

	isCriticalDamage(vehicle: VehicleMp, health: Health) {
		const damage =
			health.body - vehicle.bodyHealth + (health.engine - vehicle.engineHealth);

		return damage > 120;
	}

	setEngineCoolDown(vehicle: VehicleMp, duration: number) {
		if (!vehicle.canStart) return;

		vehicle.engine = false;
		vehicle.canStart = false;

		setTimeout(() => {
			vehicle.canStart = true;
		}, duration);
	}

	private onGotDamage(vehicle: VehicleMp) {
		const { health } = vehicleState.get(vehicle);

		if (random(0, 2) && this.isCriticalDamage(vehicle, health)) {
			this.setEngineCoolDown(vehicle, 4500);
		}

		this.set(vehicle, vehicle.bodyHealth, vehicle.engineHealth);
	}
}

export default new VehicleHealth();
