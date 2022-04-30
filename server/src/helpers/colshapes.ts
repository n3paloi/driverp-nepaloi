import { isNumber } from 'lodash';

interface Handlers {
	keyName?: string;
	onEnter?: (...args: any[]) => void;
	onKeyPress?: (...args: any[]) => void;
	onExit?: (...args: any[]) => void;
}

class ColshapeManager {
	private handlers: Map<number, Handlers>;

	constructor() {
		this.handlers = new Map();

		this.subscribeToEvents();
	}

	create(position: PositionEx, radius: number, handlers: Handlers, data?: any) {
		const { x, y, z, dimension = 0 } = position;

		const shape = mp.colshapes.newSphere(x, y, z, radius);
		shape.dimension = dimension;
		shape.customData = data;

		this.handlers.set(shape.id, handlers);

		return shape;
	}

	private getHandlers(id: number) {
		return this.handlers.get(id);
	}

	private playerEnterColshape(player: PlayerMp, shape: ColshapeMp) {
		player.colshapeId = shape.id;

		const handlers = this.getHandlers(shape.id);

		if (handlers && handlers.onEnter) {
			handlers.onEnter(player, shape);
		}
	}

	private playerExitColshape(player: PlayerMp, shape: ColshapeMp) {
		const handlers = this.getHandlers(shape.id);

		if (handlers && handlers.onExit) {
			handlers.onExit(player);
		}

		delete player.colshapeId;
	}

	private playerKeyPress(player: PlayerMp, key: string) {
		if (!isNumber(player.colshapeId)) return;

		const handlers = this.getHandlers(player.colshapeId);

		if (handlers && handlers.keyName === key && handlers.onKeyPress) {
			handlers.onKeyPress(player, mp.colshapes.at(player.colshapeId).customData);
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerEnterColshape: this.playerEnterColshape.bind(this),
			playerExitColshape: this.playerExitColshape.bind(this),
			playerKeyPress: this.playerKeyPress.bind(this)
		});
	}
}

export default new ColshapeManager();
