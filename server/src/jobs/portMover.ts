import { random } from 'lodash';
import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import blips from '../helpers/blips';
import objects from '../helpers/objects';
import notifications from '../helpers/notifications';
import checkpoints from '../helpers/checkpoints';
import colshapes from '../helpers/colshapes';
import animations from '../utils/animations';

class PortMover extends Job {
	private getOrderCoords: { x: number; y: number; z: number };

	private getOrderMarker: MarkerMp;

	private levels: JobLevels;

	constructor() {
		const data = {
			name: 'Грузчик',
			position: { x: 1012.583, y: -2893.085, z: 15.215 },
			blip: { model: 615, color: 64 }
		};
		super(data, 0, {
			male: {
				shoes: [12, 0],
				legs: [36, 0],
				underwears: [0, 0],
				torso: [52, 0],
				undershirt: [59, 0]
			},
			female: {
				shoes: [26, 0],
				legs: [35, 0],
				underwears: [0, 0],
				torso: [59, 0],
				undershirt: [36, 0]
			}
		});

		this.getOrderCoords = { x: 966.922, y: -2968.455, z: 5.901 };

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 250
				},
				{
					points: 2500,
					salary: 500
				},
				{
					points: 6000,
					salary: 750
				},
				{
					points: 24000,
					salary: 1100
				},
				{
					points: 60000,
					salary: 1300
				}
			],
			50
		);

		this.createOrderPoint();
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const { x, y, z } = position;

			const checkpoint = checkpoints.create(
				{
					position: { x, y, z },
					type: 29,
					color: [205, 80, 0, 85],
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
		blips.createWorkBlip(player, this.getOrderCoords, 5);
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

		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);

		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		blips.deleteWorkBlip(player);

		animations.playOnServer(player, 'holdBox');
		objects.attach(player, 'woodenBox');

		this.showCheckpoint(player, currentOrder);

		this.workers.update(player, { currentOrder });
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		objects.detach(player);
		blips.createWorkBlip(player, this.getOrderCoords, 5);

		player.stopAnimation();
		player.setVariable('isPlayingAnim', false);

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

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять ящик');
	}
}

const job = new PortMover();
