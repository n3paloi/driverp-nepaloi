import { random } from 'lodash';
import * as rpc from 'rage-rpc';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import blips from '../helpers/blips';
import checkpoints from '../helpers/checkpoints';
import notifications from '../helpers/notifications';
import JobVehicle from './vehicle';

class Trucker extends Job {
	private levels: JobLevels;

	private vehicle: JobVehicle;

	private trailers: JobVehicle;

	constructor() {
		const info = {
			name: 'Дальнобойщик',
			position: { x: 836.1334, y: -1211.5408, z: 28.0148 },
			blip: { model: 477, color: 1 }
		};
		super(info, 24);

		this.cooldown.setTimeLimit(5 * 60 * 1000);

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 5000
				},
				{
					points: 500,
					salary: 10000
				},
				{
					points: 1000,
					salary: 15000
				},
				{
					points: 2000,
					salary: 20000
				},
				{
					points: 6000,
					salary: 26000
				}
			],
			50
		);

		this.vehicle = new JobVehicle(
			['hauler'],
			[
				{ x: 904.6157, y: -1221.966, z: 26.447 },
				{ x: 911.1196, y: -1221.101, z: 26.468 },
				{ x: 920.639, y: -1221.268, z: 26.5035 }
			]
		);
		this.trailers = new JobVehicle(
			['tr4', 'tvtrailer', 'trailers', 'trailers2', 'docktrailer'],
			[
				{ x: 1013.5301513671875, y: -3208.603759765625, z: 5.886550426483154 },
				{ x: 1049.9942626953125, y: -3210.67919921875, z: 5.865447998046875 },
				{ x: 997.4450073242188, y: -3210.643310546875, z: 5.901791095733643 },
				{ x: 953.78564453125, y: -3211.7919921875, z: 5.900662422180176 },
				{ x: 912.9066772460938, y: -3187.865478515625, z: 5.900801658630371 },
				{ x: 904.8016967773438, y: -3157.775634765625, z: 5.900800704956055 },
				{ x: 920.2920532226562, y: -3131.984375, z: 5.90079927444458 },
				{ x: 829.6629028320312, y: -3128.057373046875, z: 5.900819301605225 },
				{ x: 1273.2265625, y: -3197.66796875, z: 5.90410184 },
				{ x: 1275.7923583984375, y: -3228.995361328125, z: 5.90159512 }
			],
			[0, 0, 0]
		);

		this.subscribeToEvents();
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [194, 42, 42, 85],
					radius: 4
				},
				this.successOrder.bind(this)
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

		if (!player.isHasLicense('truck')) {
			return notifications.help(player, 'У вас нет прав категории С!');
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
		if (!this.isWorksHere(player) || !this.checkTrailerInCheckPoint(player)) return;

		await super.successOrder(player);

		await this.levels.giveAward(player);

		this.generateNewOrder(player);
	}

	protected generateNewOrder(player: PlayerMp) {
		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);

		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		setTimeout(
			() =>
				this.trailers.spawn(player).then((trailer) => {
					this.workers.update(player, { cargo: trailer, currentOrder });
					blips.createWorkBlip(player, trailer.position, 1);
				}),
			100
		);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		if (worker.cargo) worker.cargo.destroy();

		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null, cargo: null });
	}

	private attachedTrailer(vehicle: VehicleMp, trailer: VehicleMp) {
		if (!this.isWorkVehicle(trailer)) return;

		const player = vehicle.getOccupant(-1);
		const worker = this.workers.get(player);

		if (!worker || worker.cargo.id !== trailer.id) return;

		blips.deleteWorkBlip(player);

		this.showCheckpoint(player, worker.currentOrder);
	}

	private checkTrailerInCheckPoint(player: PlayerMp) {
		const { cargo, currentOrder } = this.workers.get(player);

		return this.checkpoints[currentOrder].dist(cargo.position) <= 12;
	}

	private subscribeToEvents() {
		mp.events.add('trailerAttached', this.attachedTrailer.bind(this));
	}
}

const job = new Trucker();
