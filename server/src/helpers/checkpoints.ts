type CheckpointProps = {
	type: number;
	position: PositionEx;
	color: RGBA;
	radius: number;
	visible?: boolean;
};

interface Handlers {
	onEnter: (...args: any[]) => void;
	onExit?: (...args: any[]) => void;
}

class Checkpoints {
	private handlers: Map<number, Handlers>;

	constructor() {
		this.handlers = new Map();

		this.subscribeToEvents();
	}

	create(props: CheckpointProps, onEnter: Callback, onExit?: Callback) {
		const { position, type, radius, color, visible = false } = props;
		const { x, y, z, dimension = 0 } = position;

		const checkpoint = mp.checkpoints.new(type, new mp.Vector3(x, y, z - 1), radius, {
			direction: new mp.Vector3(0, 0, 75),
			visible,
			color,
			dimension
		});

		this.handlers.set(checkpoint.id, { onEnter, onExit });

		return checkpoint;
	}

	private getHandlers(id: number) {
		return this.handlers.get(id);
	}

	private playerEnterCheckpoint(player: PlayerMp, checkpoint: CheckpointMp) {
		const handlers = this.getHandlers(checkpoint.id);

		if (handlers && handlers.onEnter) {
			handlers.onEnter(player);
		}
	}

	private playerExitCheckpoint(player: PlayerMp, checkpoint: CheckpointMp) {
		const handlers = this.getHandlers(checkpoint.id);

		if (handlers && handlers.onExit) {
			handlers.onExit(player);
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerEnterCheckpoint: this.playerEnterCheckpoint.bind(this),
			playerExitCheckpoint: this.playerExitCheckpoint.bind(this),
			'Auth-SuccessLogin': (player: PlayerMp) => {
				mp.checkpoints
					.toArray()
					.forEach((checkpoint) => !checkpoint.visible && checkpoint.hideFor(player));
			}
		});
	}
}

export default new Checkpoints();
