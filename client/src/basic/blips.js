const natives = {};

natives.SET_BLIP_SPRITE = (blip, sprite) => {
	mp.game.invoke('0xDF735600A4696DAF', blip, sprite);
};
natives.SET_BLIP_COORDS = (blip, x, y, z) => {
	mp.game.invoke('0xAE2AF67E9D9AF65D', blip, x, y, z);
};
natives.SET_BLIP_ALPHA = (blip, a) => mp.game.invoke('0x45FF974EEE1C8734', blip, a);
natives.SET_BLIP_COLOUR = (blip, c) => mp.game.invoke('0x03D7FB09E75D6B7E', blip, c);
natives.SET_BLIP_ROTATION = (blip, r) => mp.game.invoke('0xF87683CDF73C3F6E', blip, r);
natives.SET_BLIP_FLASHES = (blip, f) => mp.game.invoke('0xB14552383D39CE3E', blip, f);
natives.SET_BLIP_FLASH_TIMER = (blip, t) => mp.game.invoke('0xD3CD6FD297AE87CC', blip, t);

class BlipManager {
	constructor() {
		this.blips = {};
		this.radiusBlips = {};
		this.dynamicBlips = {};

		this.workBlip = null;
	}

	_createBlip(name, model, color, { x, y, z }) {
		return mp.blips.new(model, new mp.Vector3(x, y, z), {
			name,
			scale: 1,
			color,
			drawDistance: 100,
			shortRange: false
		});
	}

	createRegularBlip(model, name, color, position) {
		this.removeRegularBlip(name);

		this.blips[name] = this._createBlip(name, model, color, position);
	}

	createWorkBlip(color, position) {
		this.removeWorkBlip();

		this.workBlip = this._createBlip('Чекпоинт', 0, color, position);

		this.workBlip.setRoute(true);
		this.workBlip.setRouteColour(color);
	}

	createRadiusBlip(name, color, { x, y, z }, radius) {
		this.removeRadiusBlip(name);

		this.radiusBlips[name] = mp.game.ui.addBlipForRadius(x, y, z, radius);

		natives.SET_BLIP_ALPHA(this.radiusBlips[name], 160);
		natives.SET_BLIP_COLOUR(this.radiusBlips[name], color);
		natives.SET_BLIP_FLASHES(this.radiusBlips[name], true);
	}

	createDynamicBlip(entityType, id, model, color) {
		this.removeDynamicBlip(entityType, id);

		const entity = mp[`${entityType}s`].atRemoteId(id);
		const blip = this._createBlip('', model, color, entity.position);

		const interval = setInterval(() => {
			if (!mp[`${entityType}s`].exists(entity)) {
				return this.removeDynamicBlip(entityType, id);
			}

			blip.setCoords(entity.position);
		}, 1000);

		this.dynamicBlips[`${entityType}-${id}`] = {
			blip,
			interval
		};
	}

	removeRegularBlip(name) {
		if (!this.blips[name]) return;

		this.blips[name].destroy();
		delete this.blips[name];
	}

	removeWorkBlip() {
		if (this.workBlip) this.workBlip.destroy();
		this.workBlip = null;
	}

	removeRadiusBlip(name) {
		if (!this.radiusBlips[name]) return;

		mp.game.ui.removeBlip(this.radiusBlips[name]);
		delete this.radiusBlips[name];
	}

	removeDynamicBlip(entityType, id) {
		const name = `${entityType}-${id}`;

		if (!this.dynamicBlips[name]) return;

		clearInterval(this.dynamicBlips[name].interval);
		this.dynamicBlips[name].blip.destroy();

		delete this.dynamicBlips[name];
	}
}

const blipManager = new BlipManager();

mp.events.add({
	createBlip: (model, name, color, position) => {
		blipManager.createRegularBlip(model, name, color, position);
	},
	createRadiusBlip: (name, color, position, radius = 220) => {
		blipManager.createRadiusBlip(name, color, position, radius);
	},
	createDynamicBlip: (entityType, id, model, color) => {
		blipManager.createDynamicBlip(entityType, id, model, color);
	},
	createWorkBlip: (position, color) => blipManager.createWorkBlip(color, position),
	removeBlip: (name) => blipManager.removeRegularBlip(name),
	removeRadiusBlip: (name) => blipManager.removeRadiusBlip(name),
	removeDynamicBlip: (entityType, id) => blipManager.removeDynamicBlip(entityType, id),
	deleteWorkBlip: () => blipManager.removeWorkBlip(),
	createWaypoint: (x, y) => mp.game.ui.setNewWaypoint(x, y)
});
