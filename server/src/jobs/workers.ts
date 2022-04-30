export type WorkerData = {
	currentOrder?: number;
	prevOrder?: number;
	canDeliver?: boolean;
	vehicle?: VehicleMp;
	interval?: NodeJS.Timeout;
	lastOrderTime?: Date;
	cargo?: EntityMp;
};

export default class Workers {
	private workers: Map<number, WorkerData>;

	constructor() {
		this.workers = new Map();
	}

	get count() {
		return this.workers.size;
	}

	add(player: PlayerMp) {
		this.workers.set(player.id, {});
	}

	get(player: PlayerMp) {
		return this.workers.get(player.id);
	}

	update(player: PlayerMp, data: WorkerData) {
		const worker = this.get(player);

		if (!worker) return;

		this.workers.set(player.id, { ...worker, ...data });
	}

	remove(player: PlayerMp) {
		this.workers.delete(player.id);
	}
}
