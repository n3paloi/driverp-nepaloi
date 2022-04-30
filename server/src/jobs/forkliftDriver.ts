import { random } from 'lodash';
import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import colshapes from '../helpers/colshapes';
import blips from '../helpers/blips';
import objects from '../helpers/objects';
import notifications from '../helpers/notifications';
import checkpoints from '../helpers/checkpoints';
import JobVehicle from './vehicle';

class ForkliftDriver extends Job {
	private getOrderCoords: PositionEx;

	private getOrderMarker: MarkerMp;

	private levels: JobLevels;

	private vehicle: JobVehicle;

	constructor() {
		const data = {
			name: 'Погрузчик',
			position: { x: 1211.743, y: -3331.747, z: 6.028 },
			blip: { model: 532, color: 29 },
		};
		super(data, 12, {
			male: {
				shoes: [12, 0],
				legs: [36, 0],
				underwears: [0, 0],
				torso: [52, 0],
				undershirt: [59, 0],
			},
			female: {
				shoes: [26, 0],
				legs: [35, 0],
				underwears: [0, 0],
				torso: [59, 0],
				undershirt: [36, 0],
			},
		});

		this.getOrderCoords = { x: 1218.166, y: -3006.39, z: 5.865 };
		this.vehicle = new JobVehicle(
			['forklift'],
			[
				{
					x: 1213.493,
					y: -3345.657,
					z: 5.822,
				},
				{
					x: 1226.383,
					y: -3346.773,
					z: 5.862,
				},
				{
					x: 1243.226,
					y: -3347.161,
					z: 5.875,
				},
				{
					x: 1190.808,
					y: -3347.168,
					z: 5.81,
				},
				{
					x: 1179.723,
					y: -3345.084,
					z: 5.897,
				},
			],
			[255, 255, 255]
		);

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 380,
				},
				{
					points: 2500,
					salary: 750,
				},
				{
					points: 6000,
					salary: 1150,
				},
				{
					points: 24000,
					salary: 1500,
				},
				{
					points: 60000,
					salary: 1900,
				},
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
					color: [0, 72, 186, 85],
					radius: 2,
				},
				this.successOrder.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);

		const vehicle = await this.vehicle.spawn(player);

		this.getOrderMarker.showFor(player);
		blips.createWorkBlip(player, this.getOrderCoords, 5);

		this.workers.update(player, { vehicle });
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

		if (!player.isHasLicense('car')) {
			return notifications.error(player, 'У вас нет прав категории B!');
		}

		const currentLevel = this.levels.getCurrentLevel(player);

		rpc.callClient(player, 'Job-ShowMenu', [
			this.name,
			this.isWorksHere(player),
			this.levels.getCurrentPoints(player),
			this.levels.getLevelNumber(currentLevel),
			this.levels.needPoints(currentLevel),
		]);
	}

	protected async successOrder(player: PlayerMp) {
		if (
			!this.isWorksHere(player) ||
			!this.checkCurrentOrder(player) ||
			!this.isWorkVehicle(player.vehicle)
		)
			return;

		await super.successOrder(player);

		await this.levels.giveAward(player);
	}

	protected generateNewOrder(player: PlayerMp) {
		if (this.checkCurrentOrder(player) || !this.isWorkVehicle(player.vehicle)) return;

		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);

		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		blips.deleteWorkBlip(player);
		objects.attach(player.vehicle, 'vehicleBox');

		this.showCheckpoint(player, currentOrder);

		this.workers.update(player, { currentOrder });
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		const { vehicle, currentOrder } = worker;

		this.hideCheckpoint(player, currentOrder);

		objects.detach(vehicle);
		blips.createWorkBlip(player, this.getOrderCoords, 5);

		this.workers.update(player, { currentOrder: null });
	}

	private enteredGetOrderShape(player: PlayerMp) {
		if (!this.isWorksHere(player) || !player.vehicle) return;

		if (this.checkCurrentOrder(player)) {
			return notifications.error(player, 'Вы не можете взять ещё ящик!');
		}

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять груз');
	}

	private createOrderPoint() {
		const { x, y, z } = this.getOrderCoords;

		colshapes.create(this.getOrderCoords, 1, {
			onEnter: this.enteredGetOrderShape.bind(this),
			onKeyPress: this.generateNewOrder.bind(this),
			keyName: 'E',
		});

		this.getOrderMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 2, {
			color: [255, 165, 0, 85],
			visible: false,
		});
	}
}

const job = new ForkliftDriver();
