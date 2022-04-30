const localPlayer = mp.players.local;

class AdminESP {
	private activated = false;

	constructor() {
		this.subscribeToEvents();
	}

	get isActivated() {
		return this.activated;
	}

	private highlightPlayers() {
		mp.players.forEachInStreamRange((player) => {
			if (player.handle !== 0 && player !== mp.players.local) {
				const { x, y, z } = player.position;

				mp.game.graphics.drawText(
					`${player.getVariable('realName')}(${player.remoteId}) #${player.getVariable(
						'uid'
					)}`,
					[x, y, z + 1.5],
					{
						scale: [0.3, 0.3],
						outline: true,
						color: [255, 255, 255, 255],
						font: 4,
						centre: true
					}
				);
			}
		});
	}

	private highlightVehicles() {
		mp.vehicles.forEachInStreamRange((vehicle) => {
			if (vehicle.handle !== 0) {
				const { x, y, z } = vehicle.position;

				mp.game.graphics.drawText(
					`${mp.game.vehicle.getDisplayNameFromVehicleModel(
						vehicle.model
					)} (${vehicle.getNumberPlateText()})`,
					[x, y, z - 0.5],
					{
						scale: [0.3, 0.3],
						outline: true,
						color: [255, 255, 255, 255],
						font: 4,
						centre: true
					}
				);
				mp.game.graphics.drawText(
					`${Math.round(vehicle.getSpeed() * 3.6)} kmh`,
					[x, y, z - 0.4],
					{
						scale: [0.3, 0.3],
						outline: true,
						color: [255, 255, 255, 255],
						font: 4,
						centre: true
					}
				);
			}
		});
	}

	private render() {
		if (this.isActivated) {
			this.highlightPlayers();
			this.highlightVehicles();
		}
	}

	private toggle() {
		if (!localPlayer.getVariable('adminLvl')) return;

		this.activated = !this.isActivated;

		if (this.isActivated) mp.game.ui.notifications.info('ESP: Включен');
		else mp.game.ui.notifications.info('ESP: Выключен');
	}

	private subscribeToEvents() {
		mp.events.subscribe({ 'Admin-ToggleESP': this.toggle.bind(this) });
		mp.events.subscribeToDefault({ render: this.render.bind(this) });
	}
}

const esp = new AdminESP();
