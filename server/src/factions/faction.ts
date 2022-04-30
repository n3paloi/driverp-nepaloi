import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../models/User';
import FactionModel from '../models/Faction';
import clothes from '../character/clothes';
import { updateGarageMarker } from './garage';
import FactionInventory, { updateInventoryMarker } from './factionInventory';
import notifications from '../helpers/notifications';
import animations from '../utils/animations';

export const factions: { [name: string]: Faction } = {};

abstract class Faction {
	public id: string;

	public name: string;

	public government: boolean;

	public inventoryCoords: { x: number; y: number; z: number };

	public members: any;

	protected dbId: ObjectId;

	protected money: number;

	protected ranks: string[];

	protected salary: number[];

	protected chatColor: RGB;

	protected mainMenu: { x: number; y: number; z: number };

	protected mainMarker: MarkerMp;

	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.mainMenu = data.mainMenu;
		this.ranks = data.ranks;
		this.salary = data.salary;
		this.chatColor = data.chatColor;
		this.inventoryCoords = data.inventoryCoords;
		this.government = data.government;

		this.dbId = null;
		this.members = {};
		this.money = 0;

		this.createMainEntities();

		factions[data.name] = this;
	}

	abstract openInteractionMenu(player: PlayerMp, target: number): any;

	openLeaderMenu(leader: PlayerMp) {
		if (leader.cuff || !this.isLeaderThisFaction(leader)) return;

		const players = [];

		mp.players.forEachInRange(leader.position, 50, (player: any) => {
			if (
				!player.loggedIn ||
				player.getVariable('invisible') ||
				this.members[player.dbId]
			)
				return;

			players.push({
				name: player.name,
				id: player.id
			});
		});

		rpc.callClient(leader, 'Faction-LeaderMenu', [
			this.getMembers(),
			players,
			this.ranks,
			this.salary
		]);
	}

	createMainEntities() {
		const { x, y, z } = this.mainMenu;

		const shape: any = mp.colshapes.newSphere(x, y, z, 1);
		shape.faction = this.name;

		this.mainMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [255, 255, 0, 85],
			visible: false
		});
	}

	updateMarkers(player: PlayerMp) {
		this.updateClothingMarker(player);
		updateGarageMarker(player, this.id);
		updateInventoryMarker(player, this.name);
	}

	updateClothingMarker(player: PlayerMp) {
		if (this.isInThisFaction(player)) this.mainMarker.showFor(player);
		else this.mainMarker.hideFor(player);
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!this.isInThisFaction(player)) return;

		if (this.isWorking(player)) this.finishWork(player);
		else this.startWork(player);
	}

	startWork(player: PlayerMp) {
		if (player.job) return;

		player.chatColor = this.chatColor;
		player.faction.working = true;
		player.setVariable('faction', { ...player.getVariable('faction'), working: true });

		clothes.clear(player);

		if (player.model === mp.joaat('mp_m_freemode_01')) this.changeClothesMan(player);
		else this.changeClothesWoman(player);
	}

	changeClothesMan(player: PlayerMp) {}

	changeClothesWoman(player: PlayerMp) {}

	finishWork(player: PlayerMp) {
		player.armour = 0;
		player.chatColor = [255, 255, 255];
		player.faction.working = false;
		player.setVariable('faction', { ...player.getVariable('faction'), working: false });

		clothes.load(player);
	}

	isMainLeader(player: any) {
		return (
			this.isInThisFaction(player) && this.members[player.dbId].rank >= this.ranks.length
		);
	}

	isLeaderThisFaction(player: any) {
		return (
			this.isInThisFaction(player) &&
			this.members[player.dbId].rank >= this.ranks.length - 1
		);
	}

	isInThisFaction(player: any) {
		return !!this.members[player.dbId];
	}

	isWorking(player: PlayerMp) {
		return player.faction.working;
	}

	getFactionMoney() {
		return this.money;
	}

	getFactionMember(dbId: string) {
		return this.members[dbId];
	}

	getSalaryOfRank(rank: number) {
		return this.salary[rank];
	}

	getMembers(working = false) {
		const members = [];

		Object.keys(this.members).forEach((dbId) => {
			const member = this.getFactionMember(dbId);

			if (working && (!isNumber(member.id) || !this.isWorking(mp.players.at(member.id))))
				return;

			members.push({ ...member, dbId, rank: this.ranks[member.rank - 1] });
		});

		return members;
	}

	async changeFactionMoney(value: number) {
		if (this.money + value < 0) return;

		await FactionModel.findByIdAndUpdate(this.dbId, { $inc: { money: value } });

		this.money += value;

		return this.money;
	}

	addToStatistic(memberGuid: string, name: string) {
		const member = this.getFactionMember(memberGuid);

		if (!member) return;

		if (member.statistics[name]) member.statistics[name]++;
		else member.statistics[name] = 1;

		FactionModel.findOneAndUpdate(
			{ _id: this.dbId, members: { $elemMatch: { userId: memberGuid } } },
			{ $set: { 'members.$.statistics': member.statistics } }
		).exec();
	}

	async setAsLeader(admin: PlayerMp, player: any) {
		if (this.isInThisFaction(player)) {
			await FactionModel.findOneAndUpdate(
				{ _id: this.dbId, members: { $elemMatch: { userId: player.dbId } } },
				{ $set: { 'members.$.rank': this.ranks.length } }
			);
		} else {
			await FactionModel.findByIdAndUpdate(this.dbId, {
				$push: { members: { userId: player.dbId, rank: this.ranks.length } }
			});
		}

		this.members[player.dbId] = {
			name: `${player.getVariable('realName')} #${player.uid}`,
			id: player.id,
			rank: this.ranks.length,
			statistics: {}
		};

		this.setFactionData(player, this.ranks.length);

		notifications.info(player, `Теперь вы лидер фракции "${this.name}"`);
		notifications.success(admin, `${player.name} назначен лидером фракции ${this.name}`);

		this.updateMarkers(player);
	}

	async setRank(leader: PlayerMp, dbId: string, rank: number) {
		if (!this.isLeaderThisFaction(leader)) return;

		const member = this.members[dbId];

		if (!member || (!this.isMainLeader(leader) && rank === this.ranks.length)) return;

		await FactionModel.findOneAndUpdate(
			{ _id: this.dbId, members: { $elemMatch: { userId: dbId } } },
			{ $set: { 'members.$.rank': rank } }
		);

		member.rank = rank;

		if (isNumber(member.id) && mp.players.at(member.id)) {
			const player = mp.players.at(member.id);

			this.setFactionData(player, rank);

			notifications.info(
				player,
				`${leader.name} изменил(а) ваш ранг на ${this.ranks[rank - 1]}`
			);
		}

		notifications.success(
			leader,
			`Теперь ранг игрока ${member.name}: ${this.ranks[rank - 1]}`
		);

		return this.getMembers();
	}

	async invite(leader: PlayerMp, id: number) {
		if (!this.isLeaderThisFaction(leader) && leader.adminLvl < 3) return;

		const player: any = mp.players.at(id);

		if (!player || player.faction.name) return;

		await FactionModel.findByIdAndUpdate(this.dbId, {
			$push: { members: { userId: player.dbId, rank: 1 } }
		});

		this.setFactionData(player, 1);
		this.members[player.dbId] = {
			id,
			rank: 1,
			name: `${player.getVariable('realName')} #${player.uid}`,
			statistics: {}
		};

		notifications.info(player, `${leader.name} устроил(а) вас во фракцию "${this.name}"`);
		notifications.success(leader, `${player.name} устроен во фракцию "${this.name}"`);

		this.updateMarkers(player);

		return this.getMembers();
	}

	async uninvite(leader: PlayerMp, dbId: string) {
		if (!this.isLeaderThisFaction(leader) && leader.adminLvl < 3) return;

		const member = this.members[dbId];

		if (!member || leader.faction.rank < member.rank) return;

		await FactionModel.findByIdAndUpdate(this.dbId, {
			$pull: { members: { userId: dbId } }
		});

		delete this.members[dbId];

		if (isNumber(member.id) && mp.players.at(member.id)) {
			const player = mp.players.at(member.id);

			this.finishWork(player);

			player.faction = {};
			player.setVariable('faction', {});

			notifications.info(
				player,
				`${leader.name} уволил(а) вас из фракции "${this.name}"`
			);

			this.updateMarkers(player);

			clothes.load(player);
		}

		notifications.success(leader, `Вы уволили ${member.name} из фракции "${this.name}"`);

		return this.getMembers();
	}

	setFactionData(player: PlayerMp, rank: number) {
		player.faction = { rank, name: this.name, id: this.id };

		player.setVariable('faction', {
			id: this.id,
			name: this.name,
			rank: this.ranks[rank - 1],
			government: this.government
		});
	}

	implementForMembers(callback: (player: PlayerMp) => void) {
		let count = 0;

		Object.values(this.members).forEach((member: any) => {
			if (!isNumber(member.id)) return;

			const player = mp.players.at(member.id);

			if (player && this.isInThisFaction(player) && this.isWorking(player)) {
				callback(player);

				count++;
			}
		});

		return count;
	}

	showFactionDocs(player: PlayerMp, id: number) {}
}

export function loadPlayerFaction(player) {
	player.setVariable('faction', {});

	Object.keys(factions).forEach((name) => {
		const faction = factions[name];
		const member = faction.members[player.dbId];

		if (!member) return;

		faction.setFactionData(player, member.rank);
		faction.updateMarkers(player);

		member.id = player.id;
	});
}

mp.events.subscribe({
	'Faction-SetRank': (player, dbId, rank) => {
		if (!player.faction.name) return;

		const faction = factions[player.faction.name];

		return faction.setRank(player, dbId, rank);
	},
	'Faction-Invite': (player, id) => {
		if (!player.faction.name) return;

		const faction = factions[player.faction.name];

		return faction.invite(player, id);
	},
	'Faction-Kick': (player, dbId) => {
		if (!player.faction.name) return;

		const faction = factions[player.faction.name];

		return faction.uninvite(player, dbId);
	},
	'Faction-ShowDocs': (player, id) => {
		if (!player.faction.name) {
			return mp.events.call('Gang-ShowDocs', player, id);
		}

		const faction = factions[player.faction.name];
		faction.showFactionDocs(player, id);

		animations.playOnServer(player, 'docs', 2500);
	},
	'Faction-Menu': (player, target) => {
		if (player.sack || player.cuff || !player.faction.name || !player.faction.working)
			return;

		const faction = factions[player.faction.name];

		faction.openInteractionMenu(player, target);
	}
});
mp.events.subscribeToDefault({
	databaseConnected: async () => {
		const cursor = await FactionModel.find().cursor();

		cursor.on('data', async (doc) => {
			const members = {};
			const faction = factions[doc.name];

			doc.members.forEach(({ userId, rank, statistics = {} }) => {
				members[userId] = { rank, statistics };
			});

			const users = await User.find({ _id: { $in: Object.keys(members) } }).select({
				uid: 1,
				firstName: 1,
				lastName: 1
			});

			users.forEach(({ _id, uid, firstName, lastName }) => {
				Object.assign(members[_id], { name: `${firstName} ${lastName} #${uid}` });
			});

			faction.members = members;
			faction.dbId = doc._id;
			faction.money = doc.money;

			// tslint:disable-next-line: no-unused-expression
			new FactionInventory({
				dbId: doc._id,
				name: doc.name,
				inventory: doc.inventory,
				inventoryCoords: faction.inventoryCoords
			});
		});
	},
	'Keys-E': (player) => {
		if (!player.canOpen.faction) return;

		const faction = factions[player.canOpen.faction];
		faction.pressedKeyOnMainShape(player);
	},
	'Keys-F5': (player) => {
		if (!player.faction.name) return;

		const faction = factions[player.faction.name];
		faction.openLeaderMenu(player);
	},
	playerEnterColshape: (player, shape) => {
		if (!player.loggedIn || !shape.faction) return;

		const faction = factions[shape.faction];

		if (faction.isInThisFaction(player)) {
			player.canOpen.faction = shape.faction;

			notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы переодеться');
		}
	},
	playerExitColshape: (player, shape) => {
		if (!player.loggedIn || !shape.faction) return;

		const faction = factions[shape.faction];

		if (faction.isInThisFaction(player)) {
			player.canOpen.faction = false;
		}
	}
});

mp.events.add('playerQuit', (player) => {
	if (!mp.players.exists(player)) return;

	const faction = factions[player.faction?.name];
	if (!faction) return;

	faction.finishWork(player);
	delete faction.members[player.dbId].id;
});

export default Faction;
