import { random } from 'lodash';
import * as rpc from 'rage-rpc';
import notifications from '../helpers/notifications';
import checkpoints from '../helpers/checkpoints';
import blips from '../helpers/blips';
import PlayerInventory from '../basic/player/playerInventory';
import police from '../factions/police';
import fbi from '../factions/fbi';
import sheriff from '../factions/sheriff';
import { WorkerData } from './workers';
import Job from './job';
import JobLevels from './levels';
import JobVehicle from './vehicle';

class CarThief extends Job {
	private levels: JobLevels;

	private vehicles: JobVehicle;

	constructor() {
		const data = {
			name: 'Автоугонщик',
			position: { x: -106.79, y: 2795.676, z: 53.308 },
			blip: { model: 229, color: 83 }
		};
		super(data, 24);

		this.cooldown.setTimeLimit(20 * 60 * 1000);

		this.levels = new JobLevels(
			this.name,
			[
				{
					points: 0,
					salary: 10000
				},
				{
					points: 500,
					salary: 15000
				},
				{
					points: 1500,
					salary: 22000
				},
				{
					points: 4000,
					salary: 30000
				},
				{
					points: 10000,
					salary: 35000
				}
			],
			50
		);
		this.vehicles = new JobVehicle(
			[
				'm2f22',
				'69charger',
				'bentayga17',
				'S63AMG',
				'm3e46',
				'panamera17turbo',
				'mustangbkit',
				'm5f90',
				'gtr',
				'c63w204'
			],
			[
				{
					x: 1970.389404296875,
					y: 5180.01220703125,
					z: 47.87272262573242
				},
				{
					x: 841.9498901367188,
					y: 4387.953125,
					z: 52.37052917480469
				},
				{
					x: 856.8762817382812,
					y: 3605.33642578125,
					z: 34.08975601196289
				},
				{
					x: 1224.9683837890625,
					y: 3609.32861328125,
					z: 33.63547134399414
				},
				{
					x: 1776.0828857421875,
					y: 3304.3125,
					z: 41.25278091430664
				},
				{
					x: 160.21490478515625,
					y: -1458.0869140625,
					z: 29.141599655151367
				},
				{
					x: 463.21337890625,
					y: -1700.411376953125,
					z: 29.294849395751953
				},
				{
					x: 40.34590530395508,
					y: -1719.943115234375,
					z: 29.30301284790039
				}
			]
		);

		this.subscribeToEvents();
	}

	createCheckpoints(coords: PositionEx[]) {
		coords.forEach((position) => {
			const checkpoint = checkpoints.create(
				{
					position,
					type: 29,
					color: [94, 255, 85, 85],
					radius: 3
				},
				this.successOrder.bind(this)
			);

			this.checkpoints.push(checkpoint);
		});
	}

	async startWork(player: PlayerMp) {
		if (this.workers.count === 3) {
			return notifications.info(player, 'Сейчас заказов нет, приходи позже');
		}

		await super.startWork(player);

		this.generateNewOrder(player);
	}

	finishWork(player: PlayerMp) {
		police.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
		});
		fbi.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
		});
		sheriff.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
		});

		super.finishWork(player);
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		let error;

		if (player.isGovMember()) error = 'Иди отсюда, легавый!';
		if (!player.isHasLicense('car')) error = 'Рулить научись для начала!';

		const lockPick = PlayerInventory.getItem(player.inventory, 'lockPick');

		if (!lockPick) error = 'Для начала купи отмычки, сынок.';

		if (error) return notifications.error(player, error);

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
		if (
			!this.isWorksHere(player) ||
			!this.checkCurrentOrder(player) ||
			!this.checkCarInDeliveryPoint(player)
		)
			return;

		await super.successOrder(player);

		await this.levels.giveAward(player);

		this.finishWork(player);
	}

	protected generateNewOrder(player: PlayerMp) {
		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);

		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		this.vehicles.spawn(player, false).then((car) => {
			this.workers.update(player, { cargo: car, currentOrder });
			blips.createWorkBlip(player, car.position, 83);
		});
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		if (worker.cargo) worker.cargo.destroy();

		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null, cargo: null });
	}

	private onLockPicked(player: PlayerMp, vehicle: VehicleMp) {
		if (!this.isWorksHere(player) || !this.isWorkVehicle(vehicle)) return;

		const { currentOrder } = this.workers.get(player);
		const { position } = this.checkpoints[currentOrder];

		blips.deleteWorkBlip(player);
		this.showCheckpoint(player, currentOrder);

		police.implementForMembers((member) => {
			member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);

			notifications.info(member, 'Направляйтесь к точке сбыта!');
		});
		fbi.implementForMembers((member) => {
			member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);

			notifications.info(member, 'Направляйтесь к точке сбыта!');
		});
		sheriff.implementForMembers((member) => {
			member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
			member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);

			notifications.info(member, 'Направляйтесь к точке сбыта!');
		});

		notifications.info(player, 'Вали на точку сбыта скорее! Копы получили сигнал!');
	}

	private checkCarInDeliveryPoint(player: PlayerMp) {
		const { cargo, currentOrder } = this.workers.get(player);

		return cargo && this.checkpoints[currentOrder].dist(cargo.position) <= 8;
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerUnlockVehicle: this.onLockPicked.bind(this)
		});
	}
}

const job = new CarThief();
