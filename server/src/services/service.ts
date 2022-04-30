import colshapeManager from '../helpers/colshapes';
import notifications from '../helpers/notifications';

type Entity = {
	x: number;
	y: number;
	z: number;
	radius?: number;
	spawn?: any;
};
type MarkerData = {
	radius: number;
};
type BlipData = {
	model: number;
	color: number;
};

abstract class Service {
	public name: string;

	private readonly blipData?: { model: number; color: number };

	private readonly markerData?: { radius: number };

	constructor(name: string, entities: Entity[], marker?: MarkerData, blip?: BlipData) {
		this.name = name;
		this.markerData = marker;
		this.blipData = blip;

		this.loadEntities(entities);
	}

	abstract pressedKeyOnMainShape(player: PlayerMp): void;

	protected onExitShape(player: PlayerMp) {}

	protected enteredMainShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	private loadEntities(items: Entity[]) {
		items.forEach((entity, index) => this.createEntities(entity, index));
	}

	private createEntities(data: Entity, index: number) {
		const { x, y, z } = data;
		const radius: number = data.radius ?? this.markerData?.radius;

		colshapeManager.create(
			{ x, y, z },
			radius,
			{
				onEnter: this.enteredMainShape.bind(this),
				onKeyPress: this.pressedKeyOnMainShape.bind(this),
				onExit: this.onExitShape.bind(this),
				keyName: 'E'
			},
			index
		);

		if (this.markerData) {
			mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
				color: [0, 255, 0, 60],
				visible: true
			});
		}
		if (this.blipData) {
			mp.blips.new(this.blipData.model, new mp.Vector3(x, y, z), {
				name: this.name,
				shortRange: true,
				scale: 0.75,
				color: this.blipData.color
			});
		}
	}
}

export default Service;