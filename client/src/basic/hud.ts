import * as rpc from 'rage-rpc';

class HUD {
	private visible = true;

	private showHelp = true;

	constructor() {
		mp.keys.bind(192, false, this.toggleCursor);
		mp.keys.bind(48, false, this.toggle.bind(this));

		mp.events.subscribeToDefault({ render: this.hideUnnecessaryElements });
		mp.events.subscribe({
			'HUD-GetMinimapAnchor': this.getMinimapAnchor
		});

		setInterval(() => this.updateOnline(), 6000);
	}

	get state() {
		return {
			visible: this.visible,
			help: this.showHelp
		};
	}

	get isVisible() {
		return this.visible;
	}

	showAmmo(count: number) {
		rpc.callBrowsers('HUD-SetAmmo', count);
	}

	showLocation(street: string, zone: string, greenZone: boolean) {
		rpc.callBrowsers('HUD-SetLocation', { street, zone, greenZone });
	}

	setMicStatus(status: boolean, speaker = false) {
		rpc.callBrowsers('HUD-SetMicStatus', { status, speaker });
	}

	updateOnline() {
		rpc.callBrowsers('App-SetOnline', mp.players.length);
	}

	setPlayerId(id: number) {
		rpc.callBrowsers('Player-SetId', id);
	}

	async updateDonationMultiplier() {
		const multiplier: number = await rpc.callServer('Donation-GetMultiplier');

		rpc.callBrowsers('App-SetDonation', multiplier);
	}

	getMinimapAnchor() {
		const sfX = 1.0 / 20.0;
		const sfY = 1.0 / 20.0;
		const safeZone = mp.game.graphics.getSafeZoneSize();
		const aspectRatio = mp.game.graphics.getScreenAspectRatio(false);
		const resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
		const scaleX = 1.0 / resolution.x;
		const scaleY = 1.0 / resolution.y;

		const minimap = {
			scaleX,
			scaleY,
			width: scaleX * (resolution.x / (4 * aspectRatio)),
			height: scaleY * (resolution.y / 5.674),
			topY: 0,
			rightX: 0,
			bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
			leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10)))
		};

		minimap.rightX = minimap.leftX + minimap.width;
		minimap.topY = minimap.bottomY - minimap.height;

		return minimap;
	}

	private setVisible(status: boolean) {
		this.visible = status;

		mp.game.ui.displayAreaName(status);
		mp.game.ui.displayRadar(status);
		mp.game.ui.displayHud(status);
		mp.gui.chat.show(status);

		rpc.callBrowsers('App-UpdateHUD', this.state);
	}

	private setHelpVisible(status: boolean) {
		this.showHelp = status;

		rpc.callBrowsers('App-UpdateHUD', this.state);
	}

	private reset() {
		this.setVisible(true);
		this.setHelpVisible(true);
	}

	private toggle() {
		if (mp.gui.cursor.visible) return;

		if (this.showHelp && this.isVisible) this.setHelpVisible(false);
		else if (this.isVisible) this.setVisible(false);
		else this.reset();
	}

	private toggleCursor() {
		if (mp.players.local.getVariable('isDying')) return;

		const status = mp.gui.cursor.visible;

		mp.gui.cursor.show(!status, !status);
	}

	private hideUnnecessaryElements() {
		mp.game.ui.displayAmmoThisFrame(false);
		mp.game.ui.displayAreaName(false);
		mp.game.ui.hideHudComponentThisFrame(6);
		mp.game.ui.hideHudComponentThisFrame(7);
		mp.game.ui.hideHudComponentThisFrame(8);
		mp.game.ui.hideHudComponentThisFrame(9);
		mp.game.ui.hideHudComponentThisFrame(13);
	}
}

export default new HUD();
