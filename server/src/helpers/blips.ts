type BlipData = {
	position: PositionEx;
	model: number;
	name: string;
	color: number;
	scale?: number;
};

class Blips {
	constructor() {
		mp.events.subscribe({
			getBlipNames: this.getAllBlipNames,
			markNearestBlip: this.getNearestBlip.bind(this)
		});
	}

	get count() {
		return mp.blips.length;
	}

	create(data: BlipData) {
		const { position, model, name, color, scale = 1 } = data;
		const { x, y, z, dimension = 0 } = position;

		return mp.blips.new(model, new mp.Vector3(x, y, z), {
			name,
			scale,
			color,
			dimension,
			shortRange: true
		});
	}

	createForPlayer(player: PlayerMp, data: BlipData) {
		const { position, model, name, color, scale = 1 } = data;

		player.call('createBlip', [model, name, color, position, scale]);
	}

	createWorkBlip(player: PlayerMp, position: PositionEx, color: number) {
		player.call('createWorkBlip', [position, color]);
	}

	createWaypoint(player: PlayerMp, position: PositionEx) {
		player.waypoint = position;

		player.call('createWaypoint', [position.x, position.y]);
	}

	delete(blip: BlipMp) {
		blip.destroy();
	}

	deleteForPlayer(player: PlayerMp, name: string) {
		player.call('removeBlip', [name]);
	}

	deleteWorkBlip(player: PlayerMp) {
		player.call('deleteWorkBlip');
	}

	getNearestBlip(player: PlayerMp, name: string) {
		const { position } = player;
		const blips = mp.blips.toArray();

		let nearestEntity = blips[0];

		blips.forEach((blip) => {
			if (blip.name !== name) return;

			if (
				nearestEntity.name !== name ||
				blip.dist(position) < nearestEntity.dist(position)
			) {
				nearestEntity = blip;
			}
		});

		this.createWaypoint(player, nearestEntity.position);
	}

	getAllBlipNames() {
		const names = [];

		mp.blips.forEach((blip) => {
			if (!names.includes(blip.name)) names.push(blip.name);
		});

		return names;
	}
}

export default new Blips();
