import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import colshapes from '../helpers/colshapes';
import checkpoints from '../helpers/checkpoints';
import notifications from '../helpers/notifications';
import objects from '../helpers/objects';
import animations from '../utils/animations';
import playerInventory from '../basic/player/playerInventory';

class GoldMiner extends Job {
	private pickaxePrice: number;

	private postToExit: { x: number; y: number; z: number };

	private exitMarker: MarkerMp;

	constructor() {
		const info = {
			name: 'Добытчик золота',
			position: { x: -599.762, y: 2094.386, z: 131.091 },
			blip: { model: 618, color: 5 }
		};
		super(info, 24);

		this.pickaxePrice = 500;

		this.postToExit = { x: -595.284, y: 2086.155, z: 131.411 };

		this.createExit();
		this.subscribeToEvents();
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

		this.exitMarker.showFor(player);
		this.generateNewOrder(player);

		player.tp(this.postToExit);
	}

	finishWork(player: PlayerMp) {
		this.exitMarker.hideFor(player);
		player.tp(this.position);

		super.finishWork(player);
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.isHasLicense('gold')) {
			return notifications.error(player, 'У вас нет лицензии на добычу золота!');
		}

		rpc.callClient(player, 'GoldMiner-ShowMenu', [
			this.isWorksHere(player),
			this.pickaxePrice
		]);
	}

	protected async successOrder(player: PlayerMp) {
		if (!this.isWorksHere(player) || player.vehicle) return;

		if (!this.getPickaxeCount(player)) {
			return notifications.error(player, 'У вас нет кирки!');
		}

		await super.successOrder(player);

		objects.attach(player, 'pickaxe');
		animations.playOnServer(player, 'hammering', 5400);

		await player.addToInventory({
			type: 'resources',
			name: 'gold',
			count: 1
		});
		player.timeout(() => objects.detach(player), 5400);

		this.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null });
	}

	private createExit() {
		const { x, y, z } = this.postToExit;

		colshapes.create(this.postToExit, 0.75, {
			onEnter: (player) =>
				notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы уволиться с работы'),
			onKeyPress: this.pressedKeyOnMainShape.bind(this),
			keyName: 'E'
		});

		this.exitMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 0.75, {
			color: [0, 255, 0, 100],
			visible: false
		});
	}

	private async buyPickaxe(player: PlayerMp) {
		try {
			await player.moneyHelper.different(this.pickaxePrice);

			player.addToInventory({ name: 'pickaxe', type: 'tool', count: 1 });

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	private getPickaxeCount(player: PlayerMp) {
		const pickaxe = playerInventory.getItem(player.inventory, 'pickaxe');

		return pickaxe ? pickaxe.count : 0;
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'GoldMiner-Buy': this.buyPickaxe.bind(this),
			'GoldMiner-StartWork': this.startWork.bind(this),
			'GoldMiner-FinishWork': this.finishWork.bind(this)
		});
	}
}

const job = new GoldMiner();
