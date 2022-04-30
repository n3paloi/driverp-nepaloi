import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../../models/User';
import Mafia from '.';
import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';

class MafiaPС {
	private name: string;

	private mainCoords: { x: number; y: number; z: number };

	constructor() {
		this.name = 'Итальянская мафия';
		this.mainCoords = { x: -2586.64404296875, y: 1880.81640625, z: 167.31658935546875 };

		this.createMainShape();
	}

	enteredShape(player: PlayerMp) {
		if (player.faction.name !== this.name) return;

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	createMainShape() {
		const { x, y, z } = this.mainCoords;

		colshapeManager.create(this.mainCoords, 0.75, {
			onEnter: this.enteredShape.bind(this),
			onKeyPress: this.openMenu.bind(this),
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [83, 119, 83, 150],
			visible: true
		});
	}

	openMenu(player: PlayerMp) {
		if (!player.faction.working) {
			return notifications.error(player, 'Переоденьтесь во фракционную одежду');
		}

		if (!Mafia.isMainLeader(player)) {
			return notifications.error(player, 'У тебя недостаточно полномочий');
		}

		rpc.callClient(player, 'ItalianMafia-ShowPС', [
			Mafia.getFactionMoney(),
			Mafia.getMembers()
		]);
	}

	async giveFactionMoney(player: PlayerMp, memberGuid: string, value: any) {
		if (!Mafia.isMainLeader(player)) return Promise.reject();

		const member = Mafia.getFactionMember(memberGuid);
		const sum = parseInt(value, 10);

		if (!member || sum <= 0) return Promise.reject();

		const money = await Mafia.changeFactionMoney(-sum);

		if (!isNumber(money)) return Promise.reject();

		if (isNumber(member.id)) {
			await mp.players.at(member.id).moneyHelper.change(sum, 'bank', 'mafia money');
		} else {
			await User.findByIdAndUpdate(memberGuid, { $inc: { 'money.bank': sum } });
		}

		notifications.success(player, 'Операция успешна!');

		return money;
	}
}

const mafiaPC = new MafiaPС();

mp.events.subscribe({
	'ItalianMafia-GiveMoney': (player, dbId, value) =>
		mafiaPC.giveFactionMoney(player, dbId, value)
});
