import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';
import blips from '../../helpers/blips';
import faction from './index';

type Call = {
	position: Vector3Mp;
	medic?: number;
};

class EmsPC {
	public name: string;

	private coords: PositionEx[];

	private calls: Map<number, Call>;

	constructor() {
		this.name = 'ems';
		this.coords = [];

		this.calls = new Map();

		this.createMainShape();
		this.subscribeToEvents();
	}

	deleteCall(id: number) {
		const call = this.calls.get(id);

		if (!call) return;

		if (isNumber(call.medic)) {
			const medic = mp.players.at(call.medic);

			medic.faction.call = false;

			blips.deleteWorkBlip(medic);
			notifications.info(medic, 'Ваш вызов отменили');
		}

		this.calls.delete(id);
	}

	private getCalls(player: PlayerMp) {
		const data = [];

		this.calls.forEach(({ medic }, id) => {
			const victim = mp.players.at(id);

			if (!victim) return;

			data.push({
				id,
				medic,
				name: victim.getVariable('realName'),
				distance: player.dist(victim.position)
			});
		});

		return data;
	}

	private createCall(victim: PlayerMp) {
		const { id, position } = victim;

		if (this.calls.has(id)) return;

		this.calls.set(id, { position });

		faction.implementForMembers((player: PlayerMp) =>
			notifications.info(player, 'В штате новый вызов! Езжайте быстрее!')
		);

		notifications.info(victim, 'Ваш вызов зарегистрирован!');
	}

	private acceptCall(player: PlayerMp, id: number) {
		const call = this.calls.get(id);

		if (!call || isNumber(call.medic) || player.faction.call) {
			notifications.error(player, 'Этот вызов уже принят!');

			return Promise.reject(new Error());
		}

		this.calls.set(id, { ...call, medic: player.id });

		player.faction.call = true;

		blips.createWorkBlip(player, call.position, 1);
		notifications.info(player, 'Вы приняли вызов, поторопитесь!');
		rpc.callBrowsers(mp.players.at(id), 'EMS-AcceptNotify');
	}

	private openMenu(player: PlayerMp) {
		if (player.faction.id !== this.name) return;

		const { vehicle } = player;

		if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
			return notifications.error(player, 'Нужно находиться в служебном ТС');
		}

		rpc.callClient(player, 'EMS-ShowPC', this.getCalls(player));
	}

	private createMainShape() {
		this.coords.forEach((position) => {
			const { x, y, z } = position;

			mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
				color: [15, 192, 252, 70],
				visible: true
			});

			colshapeManager.create(position, 0.75, {
				onEnter: this.enteredShape.bind(this),
				onKeyPress: this.openMenu.bind(this),
				keyName: 'E'
			});
		});
	}

	private enteredShape(player: PlayerMp) {
		if (player.faction.id !== this.name) return;

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'EMS-ShowPC': (player: PlayerMp) => {
				if (!player.vehicle) return;

				this.openMenu(player);
			},
			'EMS-AcceptCall': this.acceptCall.bind(this),
			'EMS-CallMedic': this.createCall.bind(this)
		});

		mp.events.add('playerQuit', (player: PlayerMp) => this.deleteCall(player.id));
	}
}

export default new EmsPC();
