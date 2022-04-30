import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import notifications from '../helpers/notifications';
import house from '../property/house';
import members, { Member } from './members';
import ranks, { Rank } from './ranks';
import gangs from './index';
import money from './money';

class GangLeader {
	constructor() {
		this.subscribeToEvents();
	}

	private async dissolve(player: PlayerMp) {
		const gang = gangs.get(player.gang.name);

		if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

		const gangHouse = house.getPlayerItems(player).find((item) => item.active);

		if (gangHouse) this.setHouse(player, gangHouse.index, false);

		gangs.setPlayerData(player);
		gang.members.forEach((item) => {
			if (!isNumber(item.id)) return;

			const member = mp.players.at(item.id);

			gangs.setPlayerData(member);
			notifications.info(member, 'Вас исключили из банды!');
		});

		await gangs.delete(gang);
	}

	private async changeMoney(player: PlayerMp, operation: 'add' | 'withdraw', value: any) {
		const sum = parseInt(value, 10);
		const gang = gangs.get(player.gang.name);

		if (!isNumber(sum) || sum <= 0 || !gangs.isOwner(player, gang))
			return Promise.reject(new Error());

		try {
			if (operation === 'add') await money.add(player, gang, sum);
			else await money.withdraw(player, gang, sum);

			return gang.money;
		} catch (err) {
			notifications.error(player, 'Недостаточно средств!');

			return Promise.reject(new Error());
		}
	}

	private async setHouse(player: PlayerMp, index: number, status = true) {
		const gang = gangs.get(player.gang.name);

		if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

		house.setGang(player, index, status ? gang._id : null);
	}

	private async addMember(player: PlayerMp, id: number) {
		try {
			const gang = gangs.get(player.gang.name);
			const invited = mp.players.at(id);

			if (!invited || !gangs.isOwner(player, gang)) return Promise.reject(new Error());

			await members.add(player, gang, invited);

			return {
				id: invited.id,
				userId: invited.dbId,
				name: invited.getVariable('realName')
			};
		} catch (err) {
			notifications.error(player, err);

			return Promise.reject(new Error());
		}
	}

	private async updateMember(player: PlayerMp, data: Member) {
		const gang = gangs.get(player.gang.name);

		if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

		const rank = await members.update(gang, data);

		return rank.name;
	}

	private async kickMember(player: PlayerMp, id: string) {
		const gang = gangs.get(player.gang.name);

		if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

		await members.kick(gang, id);
	}

	private async createRank(player: PlayerMp, data: Rank) {
		try {
			const gang = gangs.get(player.gang.name);

			if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

			const rank = await ranks.create(player, gang, data);

			return rank;
		} catch (err) {
			notifications.error(player, err);

			return Promise.reject(new Error());
		}
	}

	private async updateRank(player: PlayerMp, name: string, data: Rank) {
		try {
			const gang = gangs.get(player.gang.name);

			if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

			await ranks.update(gang, name, data);

			if (data.name === name) return;

			gang.members.forEach((member) => {
				if (member.rank?.toString() === data._id) {
					gangs.setPlayerData(mp.players.at(member.id), gang.name, data.name);
				}
			});
		} catch (err) {
			notifications.error(player, err);

			return Promise.reject(new Error());
		}
	}

	private async deleteRank(player: PlayerMp, id: string) {
		const gang = gangs.get(player.gang.name);

		if (!gangs.isOwner(player, gang)) return Promise.reject(new Error());

		await ranks.delete(gang, id);

		gang.members.forEach((member) => {
			if (member.rank?.toString() === id) {
				member.rank = null;

				gangs.setPlayerData(mp.players.at(member.id), gang.name);
			}
		});
	}

	private openMenu(player: PlayerMp) {
		if (gangs.isOwner(player, gangs.get(player.gang.name))) {
			rpc.callClient(player, 'Gang-ShowLeaderMenu');
		} else if (player.gang.name) {
			rpc.callClient(player, 'Gang-ShowLeaveMenu');
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			'Keys-F5': this.openMenu
		});

		mp.events.subscribe({
			'Gang-SetHouse': this.setHouse,
			'Gang-ChangeMoney': this.changeMoney,
			'Gang-AddMember': this.addMember,
			'Gang-UpdateMember': this.updateMember,
			'Gang-KickMember': this.kickMember,
			'Gang-CreateRank': this.createRank,
			'Gang-UpdateRank': this.updateRank,
			'Gang-DeleteRank': this.deleteRank,
			'Gang-Dissolve': this.dissolve.bind(this)
		});
	}
}

const leader = new GangLeader();