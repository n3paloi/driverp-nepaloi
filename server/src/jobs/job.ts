import { isNumber, random } from 'lodash';
import * as moment from 'moment';
import Workers, { WorkerData } from './workers';
import JobModel from '../models/Job';
import colshapes from '../helpers/colshapes';
import notifications from '../helpers/notifications';
import blips from '../helpers/blips';
import playerClothes, { ClothesName } from '../character/clothes';
import CoolDown from './job-cooldown';

type JobData = {
	name: string;
	position: PositionEx;
	blip: {
		model: number;
		color: number;
	};
};

export type JobClothes = {
	male: { [name in ClothesName]?: [number, number] };
	female: { [name in ClothesName]?: [number, number] };
};

const jobs = {};

abstract class Job {
	public name: string;

	protected position: PositionEx;

	protected playedHours: number;

	protected workers: Workers;

	protected cooldown: CoolDown;

	protected checkpoints: CheckpointMp[];

	protected clothes?: JobClothes;

	private readonly blip: { model: number; color: number };

	constructor(data: JobData, playedHours: number, clothes?: JobClothes) {
		this.name = data.name;
		this.position = data.position;
		this.blip = data.blip;
		this.playedHours = playedHours;

		this.checkpoints = [];
		this.clothes = clothes;

		this.workers = new Workers();
		this.cooldown = new CoolDown(5000);

		this.createMainEntities();

		jobs[this.name] = this;
	}

	abstract createCheckpoints(coords: PositionEx[]): void;

	protected abstract cancelCurrentOrder(player: PlayerMp, worker: WorkerData): void;

	async startWork(player: PlayerMp): Promise<void> {
		if (this.isWorksHere(player)) return Promise.reject();
		if (Math.floor(player.playedTime / 60) < this.playedHours) {
			notifications.error(player, `Для этой работы нужно наиграть ${this.playedHours}ч.`);
			return Promise.reject();
		}
		if (!this.cooldown.isEnded(player)) {
			notifications.error(player, 'Слишком часто, попробуйте позже');
			return Promise.reject();
		}

		player.job = this.name;
		this.setClothes(player);
		this.workers.add(player);
		this.cooldown.apply(player);

		notifications.success(player, `Вы устроились работать как "${this.name}"`);
	}

	finishWork(player: PlayerMp) {
		if (!this.isWorksHere(player)) return;

		const worker = this.workers.get(player);

		if (this.checkCurrentOrder(player)) this.cancelCurrentOrder(player, worker);
		if (worker.vehicle) worker.vehicle.destroy();

		clearInterval(worker.interval);

		if (this.clothes) playerClothes.load(player);

		this.workers.remove(player);
		player.job = null;

		notifications.info(player, `Вы уволились с работы "${this.name}"`);
	}

	protected setClothes(player: PlayerMp) {
		if (!this.clothes) return;

		playerClothes.clear(player);
		Object.entries(this.clothes[player.gender]).forEach(([name, item]) => {
			playerClothes.set(player, name, { style: item[0], color: item[1] });
		});
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		if (this.isWorksHere(player)) return this.finishWork(player);

		if (this.isWorksOnOtherJob(player) || player.faction.working) {
			notifications.error(player, 'Вы уже работаете на другой работе');
		} else this.startWork(player);
	}

	protected async successOrder(player: PlayerMp): Promise<void> {
		if (!this.checkCurrentOrder(player)) return Promise.reject();

		const worker = this.workers.get(player);
		this.cancelCurrentOrder(player, worker);

		if (worker.lastOrderTime && moment().diff(worker.lastOrderTime, 'seconds') <= 3) {
			this.finishWork(player);
			return Promise.reject();
		}

		this.workers.update(player, {
			lastOrderTime: new Date(),
			prevOrder: worker.currentOrder
		});
	}

	protected generateNewOrder(player: PlayerMp) {
		const worker = this.workers.get(player);
		const currentOrder = random(0, this.checkpoints.length - 1);

		if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);

		this.workers.update(player, { currentOrder });
		this.showCheckpoint(player, currentOrder);
	}

	protected showCheckpoint(player: PlayerMp, order: number) {
		if (!isNumber(order)) return;

		const { position } = this.checkpoints[order];

		this.checkpoints[order].showFor(player);

		blips.createWorkBlip(player, position, this.blip.color);
	}

	protected hideCheckpoint(player: PlayerMp, order: number) {
		if (!isNumber(order)) return;

		this.checkpoints[order].hideFor(player);

		blips.deleteWorkBlip(player);
	}

	protected isWorksHere(player: PlayerMp) {
		return !!this.workers.get(player);
	}

	protected isWorkVehicle(vehicle: VehicleMp) {
		return vehicle && vehicle.job === this.name;
	}

	protected isWorksOnOtherJob(player: PlayerMp) {
		return player.job && !this.isWorksHere(player);
	}

	protected checkCurrentOrder(player: PlayerMp) {
		const worker = this.workers.get(player);
		return worker && isNumber(worker.currentOrder);
	}

	private createMainEntities() {
		const { x, y, z } = this.position;

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [0, 255, 0, 100],
			visible: true
		});

		colshapes.create(this.position, 0.75, {
			onEnter: this.enteredMainShape.bind(this),
			onKeyPress: this.pressedKeyOnMainShape.bind(this),
			keyName: 'E'
		});

		blips.create({
			...this.blip,
			name: this.name,
			position: this.position
		});
	}

	private enteredMainShape(player: PlayerMp) {
		const message = this.isWorksHere(player)
			? 'Нажмите ~INPUT_CONTEXT~ чтобы уволиться с работы'
			: 'Нажмите ~INPUT_CONTEXT~ чтобы устроиться на работу';

		notifications.help(player, message);
	}
}

export function finishWork(player: PlayerMp) {
	const job: Job = jobs[player.job];

	if (job) job.finishWork(player);
}

mp.events.subscribe({
	'Job-StartWork': async (player, name) => {
		const job: Job = jobs[name];

		if (job) job.startWork(player);
	},
	'Job-FinishWork': finishWork
});

mp.events.subscribeToDefault({
	databaseConnected: async () => {
		const cursor = await JobModel.find().lean().cursor();

		let count = 0;

		cursor.on('data', (data) => {
			const job: Job = jobs[data.name];

			if (!job) return;

			job.createCheckpoints(data.checkpoints);

			count++;
		});

		cursor.on('close', () => console.log(`Jobs loaded. Count: ${count}`));
	}
});

mp.events.add('playerQuit', finishWork);

export default Job;
