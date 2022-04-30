import * as rpc from 'rage-rpc';
import { random } from 'lodash';
import { WorkerData } from './workers';
import Job, { JobClothes } from './job';
import blips from '../helpers/blips';
import checkpoints from '../helpers/checkpoints';
import notifications from '../helpers/notifications';
import animations from '../utils/animations';
import playerClothes from '../character/clothes';

type Prize = {
	name: string;
	type: string;
	count: number;
	category?: string;
};

class Diver extends Job {
	private readonly prizes: Prize[];

	constructor() {
		const info = {
			name: 'Дайвер',
			position: { x: -1612.618, y: 5260.329, z: 3.974 },
			blip: { model: 729, color: 26 }
		};

		super(info, 12, {
			male: {
				glasses: [26, 0],
				shoes: [67, 0],
				legs: [94, 0]
			},
			female: {
				glasses: [28, 0],
				shoes: [70, 0],
				legs: [97, 0]
			}
		});

		this.cooldown.setTimeLimit(2 * 60 * 1000);

		this.prizes = [
			{
				type: 'resources',
				name: 'gold',
				count: random(1, 3)
			},
			{
				type: 'resources',
				name: 'coral',
				count: random(1, 3)
			},
			{
				type: 'resources',
				name: 'joint',
				count: random(1, 4)
			},
			{
				name: 'whisky',
				type: 'alcohol',
				count: 1
			},
			{
				name: 'pill',
				type: 'medication',
				count: random(1, 2)
			},
			{
				name: 'handguns',
				type: 'ammo',
				count: random(1, 10)
			},
			{
				name: 'lockPick',
				type: 'others',
				count: 1
			}
		];
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [0, 110, 0, 0],
					radius: 2
				},
				this.successOrder.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);
		await rpc.callClient(player, 'Diver-StartWork');

		this.generateNewOrder(player);
	}

	finishWork(player: PlayerMp) {
		rpc.callClient(player, 'Diver-FinishWork');
		super.finishWork(player);
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.isHasLicense('diver')) {
			return notifications.error(player, 'У вас нет лицензии на дайвинг!');
		}

		super.pressedKeyOnMainShape(player);
	}

	protected async successOrder(player: PlayerMp) {
		try {
			if (!this.isWorksHere(player) || player.vehicle) return;

			const worker = this.workers.get(player);
			await super.successOrder(player);

			animations.playOnServer(player, 'pickup', 2400);
			await player.addToInventory(worker.cargo.prize);

			this.generateNewOrder(player);
		} catch (err) {
			this.finishWork(player);
		}
	}

	protected generateNewOrder(player: PlayerMp) {
		if (this.checkCurrentOrder(player) || player.vehicle) return;

		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);
		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		const container = this.createContainer(this.checkpoints[currentOrder].position);

		blips.deleteWorkBlip(player);
		this.showCheckpoint(player, currentOrder);
		this.workers.update(player, { currentOrder, cargo: container });
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		if (worker.cargo) worker.cargo.destroy();

		this.hideCheckpoint(player, worker.currentOrder);
		this.workers.update(player, { currentOrder: null, cargo: null });
	}

	protected setClothes(player: PlayerMp) {
		const color = random(0, 25);
		const clothes: JobClothes = {
			male: {
				...this.clothes.male,
				legs: [94, color],
				underwears: [243, color],
				undershirt: [151, 0],
				torso: [96, 0]
			},
			female: {
				...this.clothes.female,
				legs: [97, color],
				underwears: [251, color],
				undershirt: [187, 0],
				torso: [111, 0]
			}
		};

		playerClothes.clear(player);
		Object.entries(clothes[player.gender]).forEach(([name, item]) => {
			playerClothes.set(player, name, { style: item[0], color: item[1] });
		});
	}

	private createContainer(position: Vector3Mp) {
		const object: any = mp.objects.new('prop_box_wood05a', position, {
			rotation: new mp.Vector3(0, 0, 0)
		});
		object.prize = { ...this.prizes[random(0, this.prizes.length - 1)] };

		return object;
	}
}

const job = new Diver();
