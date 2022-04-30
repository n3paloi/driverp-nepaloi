import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import notifications from '../helpers/notifications';
import checkpoints from '../helpers/checkpoints';
import JobVehicle from './vehicle';

class Taxi extends Job {
	private levels: JobLevels;

	private vehicle: JobVehicle;

	constructor() {
		const data = {
			name: 'Таксист',
			position: { x: 895.81, y: -179.3139, z: 74.7 },
			blip: { model: 198, color: 5 }
		};
		super(data, 12);

		this.cooldown.setTimeLimit(5 * 60 * 1000);

		this.vehicle = new JobVehicle(
			['priustaxi'],
			[
				{
					x: 920.323,
					y: -163.689,
					z: 74.413
				},
				{
					x: 918.441,
					y: -167.246,
					z: 74.23
				},
				{
					x: 916.175,
					y: -170.821,
					z: 74.0311
				},
				{
					x: 903.301,
					y: -191.829,
					z: 73.407
				},
				{
					x: 904.986,
					y: -189.141,
					z: 73.441
				},
				{
					x: 906.857,
					y: -186.498,
					z: 73.619
				}
			],
			[0, 0, 0]
		);

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 350
				},
				{
					points: 5000,
					salary: 600
				},
				{
					points: 12000,
					salary: 950
				},
				{
					points: 32000,
					salary: 1300
				},
				{
					points: 65000,
					salary: 1700
				}
			],
			50
		);

		this.subscribeToEvents();
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [255, 165, 0, 85],
					radius: 7
				},
				this.showConfirmDialog.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);

		const vehicle = await this.vehicle.spawn(player);
		this.workers.update(player, { vehicle });

		this.generateNewOrder(player);
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
			this.levels.needPoints(currentLevel)
		]);
	}

	protected showConfirmDialog(player: PlayerMp) {
		if (
			!this.isWorksHere(player) ||
			!player.vehicle ||
			!this.checkCarInCheckPoint(player)
		)
			return;

		rpc.callClient(player, 'Taxi-ShowConfirm');
	}

	protected async succesOrder(player: PlayerMp) {
		if (
			!this.isWorksHere(player) ||
			!this.checkCurrentOrder(player) ||
			!player.vehicle ||
			!this.checkCarInCheckPoint(player)
		)
			return;

		await super.successOrder(player);

		await this.levels.giveAward(player);

		this.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null });
	}

	private checkCarInCheckPoint(player: PlayerMp) {
		const { vehicle, currentOrder } = this.workers.get(player);

		return (
			this.isWorkVehicle(vehicle) &&
			this.checkpoints[currentOrder].dist(vehicle.position) <= 10
		);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Taxi-SubmitOrder': this.succesOrder.bind(this)
		});
	}
}

const job = new Taxi();
