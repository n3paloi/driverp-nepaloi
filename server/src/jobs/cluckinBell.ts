import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import blips from '../helpers/blips';
import checkpoints from '../helpers/checkpoints';
import colshapes from '../helpers/colshapes';
import notifications from '../helpers/notifications';

class CluckinBellCourier extends Job {
	private levels: JobLevels;

	private getOrderCoords: { x: number; y: number; z: number };

	private getOrderMarker: MarkerMp;

	constructor() {
		const data = {
			name: 'Курьер в Cluckin Bell',
			position: { x: -180.843, y: -1428.875, z: 31.309 },
			blip: { model: 440, color: 60 }
		};
		super(data, 0);

		this.getOrderCoords = { x: -184.848, y: -1427.292, z: 31.474 };

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 250
				},
				{
					points: 2000,
					salary: 500
				},
				{
					points: 5000,
					salary: 750
				},
				{
					points: 20000,
					salary: 1100
				},
				{
					points: 50000,
					salary: 1300
				}
			],
			50
		);

		this.createOrderPoint();
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [255, 165, 0, 85],
					radius: 2
				},
				this.successOrder.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);

		this.getOrderMarker.showFor(player);
		blips.createWorkBlip(player, this.getOrderCoords, 60);
	}

	finishWork(player: PlayerMp) {
		this.getOrderMarker.hideFor(player);

		super.finishWork(player);

		blips.deleteWorkBlip(player);
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		if (this.isWorksOnOtherJob(player) || player.faction.working) {
			return notifications.error(player, 'Вы уже работаете на другой работе');
		}

		const currentLevel = this.levels.getCurrentLevel(player);

		rpc.callClient(player, 'Job-ShowMenu', [
			this.name,
			this.isWorksHere(player),
			this.levels.getCurrentPoints(player),
			this.levels.getLevelNumber(currentLevel),
			this.levels.needPoints(currentLevel)
		]);
	}

	protected async successOrder(player: PlayerMp) {
		if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || player.vehicle)
			return;

		await super.successOrder(player);

		await this.levels.giveAward(player);
	}

	protected generateNewOrder(player: PlayerMp) {
		if (this.checkCurrentOrder(player) || player.vehicle) return;

		blips.deleteWorkBlip(player);

		super.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		blips.createWorkBlip(player, this.getOrderCoords, 60);

		this.workers.update(player, { currentOrder: null });
	}

	private createOrderPoint() {
		const { x, y, z } = this.getOrderCoords;

		colshapes.create(this.getOrderCoords, 1, {
			onEnter: this.enteredGetOrderShape.bind(this),
			onKeyPress: this.generateNewOrder.bind(this),
			keyName: 'E'
		});

		this.getOrderMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 1, {
			color: [0, 72, 142, 85],
			visible: false
		});
	}

	private enteredGetOrderShape(player: PlayerMp) {
		if (!this.isWorksHere(player) || player.vehicle) return;

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять заказ');
	}
}

const job = new CluckinBellCourier();
