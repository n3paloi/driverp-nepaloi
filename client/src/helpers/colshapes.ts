class Colshapes {
	private handlers: Map<number, ColshapeHandlers>;

	private current: ColshapeMp;

	constructor() {
		this.handlers = new Map();

		mp.colshapes.create = this.create.bind(this);

		this.subscribeToEvents();
	}

	create(position: PositionEx, radius: number, handlers: ColshapeHandlers) {
		const shape = mp.colshapes.newSphere(
			position.x,
			position.y,
			position.z + 1.2,
			radius
		);

		this.handlers.set(shape.id, handlers);

		return shape;
	}

	private getHandlers(id: number) {
		return this.handlers.get(id);
	}

	private playerEnterColshape(shape: ColshapeMp) {
		this.current = shape;

		const handlers = this.getHandlers(shape.id);

		if (handlers && handlers.onEnter) handlers.onEnter();
	}

	private playerExitColshape(shape: ColshapeMp) {
		const handlers = this.getHandlers(shape.id);

		if (handlers && handlers.onExit) handlers.onExit();

		this.current = null;
	}

	private playerKeyPress() {
		if (!this.current) return;

		const handlers = this.getHandlers(this.current.id);

		if (handlers && handlers.onKeyPress) {
			handlers.onKeyPress();
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerEnterColshape: this.playerEnterColshape.bind(this),
			playerExitColshape: this.playerExitColshape.bind(this)
		});

		mp.keys.bind(69, false, this.playerKeyPress.bind(this));
	}
}

export default new Colshapes();
