class VehicleFuel {
	constructor() {
		this.runFuelInterval();
	}

	fillUp(vehicle: VehicleMp, amount: number) {
		const totalFuel = Math.round(vehicle.getVariable('fuel') + amount);
		const maxFuel = vehicle.getVariable('maxFuel');

		vehicle.setVariable('fuel', totalFuel < maxFuel ? totalFuel : maxFuel);
	}

	private decreaseFuel(vehicle: VehicleMp) {
		if (vehicle.engine) {
			const fuel = vehicle.getVariable('fuel');

			if (fuel >= 0) {
				vehicle.setVariable('fuel', fuel > 0 ? fuel - 1.5 : fuel);
			}
		}
	}

	private runFuelInterval() {
		setInterval(
			() => mp.vehicles.forEach((vehicle) => this.decreaseFuel(vehicle)),
			60 * 1000
		);
	}
}

export default new VehicleFuel();
