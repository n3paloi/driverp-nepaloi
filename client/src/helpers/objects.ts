import { isNumber } from 'lodash';

type ObjectData = {
	bone: any;
	model: string;
	x: number;
	y: number;
	z: number;
	rx: number;
	ry: number;
	rz: number;
};

class Objects {
	private objects: {
		player: Map<number, ObjectMp>;
		vehicle: Map<number, ObjectMp>;
	};

	constructor() {
		this.objects = {
			player: new Map(),
			vehicle: new Map()
		};

		this.subscribeToEvents();
	}

	private add(type: string, id: number, object: ObjectMp) {
		const objects = this.objects[type];

		if (objects) objects.set(id, object);
	}

	private get(type: string, id: number) {
		const objects = this.objects[type];

		return objects ? objects.get(id) : null;
	}

	private delete(type: string, id: number) {
		const object = this.get(type, id);

		if (!mp.objects.exists(object)) return;

		object.destroy();
		this.objects[type].delete(id);
	}

	private attach(entity: EntityMp) {
		if (!entity) return;

		const id = entity.remoteId;

		if (this.get(entity.type, id)) return;

		const data: ObjectData = entity.getVariable('attachedObject');

		if (!data || !data.model) return;

		const object = mp.objects.new(mp.game.joaat(data.model), entity.position, {
			rotation: new mp.Vector3(0, 0, 0),
			alpha: 255,
			dimension: entity.dimension
		});
		if (!mp.objects.exists(object)) return;

		const bone = isNumber(data.bone) ? data.bone : entity.getBoneIndexByName(data.bone);

		object.attachTo(
			entity.handle,
			bone,
			data.x,
			data.y,
			data.z,
			data.rx,
			data.ry,
			data.rz,
			true,
			true,
			false,
			false,
			0,
			true
		);

		this.add(entity.type, id, object);
	}

	private detach(entity: EntityMp) {
		if (!entity) return;

		this.delete(entity.type, entity.remoteId);
	}

	private subscribeToEvents() {
		mp.events.add({
			attachObject: this.attach.bind(this),
			detachObject: this.detach.bind(this)
		});
	}
}

export default new Objects();
