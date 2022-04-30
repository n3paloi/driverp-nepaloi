import { WorkerData } from './workers';
import Job from './job';
import checkpoints from '../helpers/checkpoints';
import animations from '../utils/animations';

class OrangeCollector extends Job {
	constructor() {
		const info = {
			name: 'Сборщик апельсинов',
			position: { x: 403.746, y: 6526.144, z: 27.716 },
			blip: { model: 514, color: 17 }
		};
		super(info, 0, {
			male: {
				hats: [14, 0],
				torso: [14, 0],
				undershirt: [15, 0],
				legs: [0, 2],
				tops: [78, 2]
			},
			female: {
				hats: [14, 0],
				torso: [9, 0],
				undershirt: [2, 0],
				legs: [1, 4],
				tops: [78, 4]
			}
		});
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [0, 110, 0, 0],
					radius: 2.5
				},
				this.successOrder.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);

		this.generateNewOrder(player);
	}

	protected async successOrder(player: PlayerMp) {
		if (!this.isWorksHere(player) || player.vehicle) return;

		await super.successOrder(player);

		animations.playOnServer(player, 'pickup', 2600);
		await player.addToInventory({
			type: 'resources',
			name: 'orange',
			count: 1
		});

		this.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null });
	}
}

const job = new OrangeCollector();
