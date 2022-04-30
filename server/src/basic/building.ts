import colshapes from '../helpers/colshapes';
import notifications from '../helpers/notifications';

export default class Building {
	protected name: string;

	private outPos?: { x: number; y: number; z: number };

	private inPos?: { x: number; y: number; z: number };

	private blipData: { model: number; color: number };

	private markerData: { radius: number; color: RGBA };

	constructor(data) {
		this.name = data.name;
		this.outPos = data.outPos;
		this.inPos = data.inPos;
		this.blipData = data.blipData;
		this.markerData = data.markerData;

		this.createMainEntities();
	}

	getEntranceCoords() {
		const { x, y, z } = this.outPos;

		return new mp.Vector3(x, y, z);
	}

	tryToEnter(player: PlayerMp) {
		if (player.dist(this.getEntranceCoords()) <= 3) player.tp(this.inPos);
		else player.tp(this.outPos);
	}

	protected createDoorShape({ model, x, y, z }) {
		const doorShape: any = mp.colshapes.newSphere(x, y, z, 1.2);

		doorShape.doorId = model;
		doorShape.pos = { x, y, z };
	}

	private enteredEntranceShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
	}

	private enteredExitShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
	}

	private createEntrance() {
		const { x, y, z } = this.outPos;

		colshapes.create(this.outPos, this.markerData.radius, {
			onEnter: this.enteredEntranceShape.bind(this),
			onKeyPress: this.tryToEnter.bind(this),
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
			color: this.markerData.color,
			visible: true
		});
	}

	private createExit() {
		const { x, y, z } = this.inPos;

		colshapes.create(this.inPos, this.markerData.radius, {
			onEnter: this.enteredExitShape.bind(this),
			onKeyPress: this.tryToEnter.bind(this),
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
			color: this.markerData.color,
			visible: true
		});
	}

	private createMainEntities() {
		if (this.inPos) {
			this.createEntrance();
			this.createExit();
		}

		const { x, y, z } = this.outPos;

		mp.blips.new(this.blipData.model, new mp.Vector3(x, y, z), {
			name: this.name,
			shortRange: true,
			scale: 1.2,
			color: this.blipData.color
		});
	}
}
