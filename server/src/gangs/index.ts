import GangModel from '../models/Gang';
import members, { Member } from './members';
import ranks, { Rank, Permission } from './ranks';
import './actions';
import './leader';

export type Gang = {
	_id: string;
	name: string;
	money: number;
	owner: string;
	members: Member[];
	ranks: Rank[];
};

class Gangs {
	private items: Map<string, Gang>;

	constructor() {
		this.items = new Map();

		this.subscribeToEvents();
	}

	get(name: string) {
		return this.items.get(name);
	}

	isOwner(player: PlayerMp, gang: Gang) {
		return gang && gang.owner.toString() === player.dbId.toString();
	}

	isAlreadyExists(name: string) {
		return !!this.get(name);
	}

	async create(player: PlayerMp, name: string) {
		const doc = await new GangModel({
			name,
			owner: player.dbId
		}).save();

		const data = doc.toObject();

		this.items.set(data.name, data);

		this.setPlayerData(player, name, 'Глава');
	}

	async delete(gang: Gang) {
		await GangModel.findByIdAndDelete(gang._id);

		this.items.delete(gang.name);
	}

	setPlayerData(player: PlayerMp, gang?: string, rank?: string) {
		if (!player) return;

		player.gang = {
			rank,
			name: gang
		};

		player.setVariable('gang', player.gang);
	}

	hasPremission(player: PlayerMp, premission: Permission) {
		const gang = this.get(player.gang.name);

		if (this.isOwner(player, gang)) return true;

		const rank = gang.ranks.find((item) => item.name === player.gang.rank);

		return rank && rank.permissions[premission];
	}

	async loadPlayer(player: PlayerMp) {
		const [data] = await GangModel.aggregate([
			{ $match: { $or: [{ owner: player.dbId }, { 'members.userId': player.dbId }] } },
			{
				$project: {
					name: 1,
					members: {
						$filter: {
							input: '$members',
							as: 'member',
							cond: { $eq: ['$$member.userId', player.dbId] }
						}
					},
					_id: 0
				}
			}
		]);

		if (!data) return;

		const gang = this.get(data.name);
		const rank = data.members.length && ranks.getById(gang, data.members[0].rank);

		this.setPlayerData(
			player,
			data.name,
			this.isOwner(player, gang) ? 'Глава' : rank && rank.name
		);

		members.toggleOnline(player, gang, true);
	}

	private getNearbyPlayers(player: PlayerMp) {
		const players: { id: number; name: string }[] = [];

		mp.players.forEachInRange(player.position, 20, (item) => {
			if (
				!item.loggedIn ||
				item.faction.name ||
				item.gang.name ||
				item.getVariable('invisible')
			)
				return;

			players.push({
				name: item.name,
				id: item.id
			});
		});

		return players;
	}

	private async loadItems() {
		const cursor = await GangModel.find()
			.lean()
			.cursor();

		cursor.on('data', (data) => this.items.set(data.name, data));
		cursor.on('close', () => console.log(`Gangs loaded. Count: ${this.items.size}`));
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			databaseConnected: this.loadItems.bind(this)
		});

		mp.events.subscribe({
			'Gang-GetRanksData': (player: PlayerMp) => {
				const gang = this.get(player.gang.name);

				if (gang)
					return {
						ranks: ranks.getAll(gang),
						price: ranks.price,
						limit: ranks.maxCount
					};
			},
			'Gang-GetMembersData': async (player: PlayerMp) => {
				const gang = this.get(player.gang.name);

				if (gang) {
					const data = await members.getAll(gang);

					return {
						members: data,
						price: members.price,
						limit: members.maxCount
					};
				}
			},
			'Gang-GetMoney': (player: PlayerMp) => {
				const gang = this.get(player.gang.name);

				if (gang) return gang.money;
			},
			'Gang-GetNearbyPlayers': this.getNearbyPlayers,
			'Gang-Leave': (player: PlayerMp) => {
				const gang = this.get(player.gang.name);

				if (gang) members.kick(gang, player.dbId);
			}
		});

		mp.events.add('playerQuit', (player: PlayerMp) => {
			const name = player?.gang?.name;

			if (name) members.toggleOnline(player, this.get(name), false);
		});
	}
}

export default new Gangs();