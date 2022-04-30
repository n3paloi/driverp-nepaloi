const player = mp.players.local;

class CruiseControl {
	private maxSpeed: number;

	constructor() {
		this.maxSpeed = 0;

		mp.events.subscribeToDefault({
			render: this.controlSpeed.bind(this)
		});
	}

	get isActivated() {
		return this.maxSpeed > 0;
	}

	toggle() {
		const { vehicle } = player;

		if (mp.gui.cursor.visible || !vehicle || !this.canStart(vehicle)) return;

		if (!this.isActivated) {
			this.maxSpeed = vehicle.getSpeed();
			vehicle.setMaxSpeed(this.maxSpeed);

			mp.game.ui.notifications.info('Круиз-контроль активирован');
		} else {
			this.maxSpeed = 0;
			vehicle.setMaxSpeed(1000.0);

			mp.game.ui.notifications.info('Круиз-контроль отключён');
		}
	}

	private isStopKeyPressed() {
		return mp.keys.isDown(70) || mp.keys.isDown(13);
	}

	private canStart(vehicle: VehicleMp) {
		const speed = Math.round(vehicle.getSpeed() * 3.6);
		return vehicle.getPedInSeat(-1) === player.handle && !vehicle.isInAir() && speed > 20;
	}

	private controlSpeed() {
		const { vehicle } = player;

		if (this.isActivated && vehicle) {
			vehicle.setMaxSpeed(this.maxSpeed);

			if (this.isStopKeyPressed()) this.toggle();
		}
	}
}

export default new CruiseControl();
