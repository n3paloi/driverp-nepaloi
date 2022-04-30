import { WorkerData } from './workers';
import Job from './job';
import checkpoints from '../helpers/checkpoints';
import animations from '../utils/animations';

class PineappleCollector extends Job {
	constructor() {
		const info = {
			name: 'Сборщик ананасов',
			position: { x: 2865.686, y: 4729.744, z: 48.711 },
			blip: { model: 76, color: 46 }
		};
		super(info, 0, {
			male: {
				hats: [14, 0],
				torso: [14, 0],
				undershirt: [15, 0],
				legs: [0, 4],
				tops: [78, 4]
			},
			female: {
				hats: [14, 0],
				torso: [9, 0],
				undershirt: [2, 0],
				legs: [1, 2],
				tops: [78, 2]
			}
		});
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const { x, y, z } = position;

			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [0, 110, 0, 0],
					radius: 2
				},
				this.successOrder.bind(this)
			);

			mp.objects.new('prop_pineapple', new mp.Vector3(x, y, z - 1), {
				rotation: new mp.Vector3(0, 0, 0),
				alpha: 255,
				dimension: 0
			});

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
			name: 'pineapple',
			count: 1
		});

		this.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null });
	}
}

const job = new PineappleCollector();
