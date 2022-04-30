import { WorkerData } from './workers';
import Job from './job';
import checkpoints from '../helpers/checkpoints';
import notifications from '../helpers/notifications';
import animations from '../utils/animations';
import police from '../factions/police';
import fbi from '../factions/fbi';
import sheriff from '../factions/sheriff';
import prison from '../basic/prison';

class WeedCollector extends Job {
	constructor() {
		const info = {
			name: 'Сборщик травки',
			position: { x: 263.381, y: 3624.281, z: 33.597 },
			blip: { model: 496, color: 25 }
		};
		super(info, 0);

		this.cooldown.setTimeLimit(60 * 1000);
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

			mp.objects.new('prop_weed_01', new mp.Vector3(x, y, z - 1), {
				rotation: new mp.Vector3(0, 0, 0),
				alpha: 255,
				dimension: 0
			});

			this.checkpoints.push(checkpoint);
		});
	}

	notifyAboutCrime(member: PlayerMp, violator: PlayerMp) {
		member.call('createRadiusBlip', [`Травка ${violator.id}`, 3, this.position]);

		notifications.info(
			member,
			'В городе новое преступление! Территория отмечена на карте'
		);
	}

	async startWork(player: PlayerMp) {
		await super.startWork(player);

		this.generateNewOrder(player);

		police.implementForMembers((member) => this.notifyAboutCrime(member, player));
		fbi.implementForMembers((member) => this.notifyAboutCrime(member, player));
		sheriff.implementForMembers((member) => this.notifyAboutCrime(member, player));

		if (!player.getVariable('inMask')) prison.addViolation(player, 1.4);
	}

	finishWork(player: PlayerMp) {
		police.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`Травка ${player.id}`]);
		});
		fbi.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`Травка ${player.id}`]);
		});
		sheriff.implementForMembers((member) => {
			member.call('removeRadiusBlip', [`Травка ${player.id}`]);
		});

		super.finishWork(player);
	}

	protected pressedKeyOnMainShape(player: PlayerMp) {
		if (player.isGovMember()) {
			return notifications.error(player, 'Иди отсюда, легавый!');
		}

		super.pressedKeyOnMainShape(player);
	}

	protected async successOrder(player: PlayerMp) {
		if (!this.isWorksHere(player) || player.vehicle) return;

		await super.successOrder(player);

		animations.playOnServer(player, 'pickup', 2600);
		await player.addToInventory({ type: 'resources', name: 'weed', count: 1 });

		this.generateNewOrder(player);
	}

	protected cancelCurrentOrder(player: PlayerMp, worker: WorkerData) {
		this.hideCheckpoint(player, worker.currentOrder);

		this.workers.update(player, { currentOrder: null });
	}
}

const job = new WeedCollector();
