import * as moment from 'moment';
import * as rpc from 'rage-rpc';
import factions from '../../data/factions';
import User from '../../models/User';
import charCreator from '../../character/characterCreator';
import clothes from '../../character/clothes';

import { loadPlayerFaction } from '../../factions/faction';

import vehicleManager from '../vehicle';
import house from '../../property/house';
import business from '../../property/business';
import gangs from '../../gangs';

import time from '../time';
import prison from '../prison';
import hunger from './hunger';
import animations from '../../utils/animations';
import notifications from '../../helpers/notifications';
import './events';
import './death';
import './forefinger';

class PlayerManager {
	constructor() {
		this.subscribeToEvents();
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Player-ShowPassport': this.showPassport,
			'Player-ShowLicenses': this.showLicenses,
			'Player-ShowInfo': this.showInfoMenu,
			'Player-GetInfo': this.getInfo,
			'Player-SendMoney': this.sendMoney,
			'Player-FriendRequest': this.friendRequest,
			'Player-Spawn': this.selectSpawn,
			'Player-Kick': (player: PlayerMp) => {
				player.tp({
					x: 1726.80712890625,
					y: 2640.588134765625,
					z: 45.56507110595703
				});
			}
		});

		mp.events.subscribeToDefault({
			'Keys-U': animations.stop,
			'Keys-Y': this.addFriend
		});
	}

	async loadAccount(player: PlayerMp, user: any) {
		player.setVariable('uid', user.uid);
		player.setVariable('dbId', user._id);
		player.setVariable('adminLvl', user.adminLvl);
		player.setVariable('firstLogin', !user.loginAt);

		player.dbId = user._id.toString();
		player.uid = user.uid;

		player.email = user.email;
		player.firstName = user.firstName;
		player.lastName = user.lastName;
		player.tempName = user.tempName;
		player.adminLvl = user.adminLvl;
		player.licenses = user.licenses;
		player.health = user.health;
		player.inventory = user.inventory;
		player.cardNumber = user.cardNumber;
		player.appearance = user.character;
		player.chatColor = [255, 255, 255];
		player.jobs = user.jobs;
		player.registerDate = moment(user.registrationAt).format('DD.MM.YYYY');
		player.money = user.money;
		player.phone = user.phone;
		player.playedTime = user.playedTime;
		player.paydayTime = user.paydayTime;
		player.exitDate = user.exitAt;
		player.vehicleSlots = user.vehicleSlots;
		player.canOpen = {};
		player.canEnter = {};
		player.canAction = {};
		player.gender = 'male';
		player.job = null;
		player.vehicles = {};
		player.garages = 0;
		player.faction = {};
		player.gang = {};
		player.housesCount = 0;
		player.businesses = 0;
		player.attachments = [];

		player.moneyHelper.updateMoney();
		hunger.updatePlayerHunger(player, user.hunger);
		time.setTimeForPlayer(player);

		house.loadPlayerItems(player);
		business.loadPlayerItems(player);
		loadPlayerFaction(player);

		await gangs.loadPlayer(player);
		await prison.loadViolator(player);
		await vehicleManager.loadPlayerVehicles(player);

		player.updateName();
		player.tp(user.position);

		charCreator.loadPlayerCharacter(player, user.character, user.loginAt);
		clothes.load(player);
	}

	savePlayers(players: PlayerMp[]) {
		const operations = [];

		players.forEach((player) => {
			if (!mp.players.exists(player) || !player.dbId) return;

			operations.push({
				updateOne: {
					filter: { _id: player.dbId },
					update: {
						playedTime: player.playedTime,
						paydayTime: player.paydayTime,
						position: { ...player.position, dimension: 0 }
					}
				}
			});
		});

		if (operations.length) User.bulkWrite(operations);
	}

	private showPassport(player: PlayerMp, id: number) {
		const player2 = mp.players.at(id);

		if (!player2) return;

		const data = {
			name: player.getVariable('realName'),
			registerDate: player.registerDate,
			gender: player.appearance.gender,
			faction: player.faction.name
		};

		animations.playOnServer(player, 'docs', 2500);

		rpc.callClient(player2, 'Player-ShowPassport', data);
	}

	private showLicenses(player: PlayerMp, id: number) {
		const player2 = mp.players.at(id);

		if (!player2) return;

		animations.playOnServer(player, 'docs', 2500);

		rpc.callClient(player2, 'Player-ShowLicenses', player.licenses);
	}

	private async sendMoney(player: PlayerMp, id: number, value: any) {
		const player2: any = mp.players.at(id);

		if (!player2) return;

		const amount = parseInt(value, 10);

		await player.moneyHelper.transfer(amount, 'cash', player2.dbId);
	}

	private friendRequest(player: PlayerMp, id: number) {
		const player2: any = mp.players.at(id);

		if (!player2) return;

		player2.friendReq = player.id;

		notifications.info(
			player2,
			`Нажмите Y, чтобы принять запрос на рукопожатие от ${player.name}`
		);

		setTimeout(() => {
			try {
				player2.friendReq = null;
			} catch (err) {
				console.log(err);
			}
		}, 4000);
	}

	private addFriend(player: PlayerMp) {
		if (typeof player.friendReq !== 'number') return;

		const player2 = mp.players.at(player.friendReq);

		if (!player2) return;

		animations.playOnServer(player, 'handshake', 5000);
		animations.playOnServer(player2, 'handshake', 5000);

		rpc.callClient(player, 'Player-AddFriend', player2);
		rpc.callClient(player2, 'Player-AddFriend', player);
	}

	private selectSpawn(player: PlayerMp, type: string) {
		if (type !== 'exit' && !player.getVariable('insideJail')) {
			const position =
				type === 'faction'
					? factions[player.faction.name]
					: player.getVariable('spawnHouse');

			player.tp(position);
		} else player.dimension = 0;

		rpc.callClient(player, 'Player-Spawn');
	}

	private getInfo(player: PlayerMp) {
		return {
			name: player.getVariable('realName'),
			cardNumber: `${player.cardNumber}`
		};
	}

	private showInfoMenu(player: PlayerMp) {
		const equipment = {
			houses: player.housesCount,
			businesses: player.businesses,
			garages: player.garages
		};

		const { licenses, vehicleSlots, registerDate, cardNumber, playedTime, phone } =
			player;

		rpc.callClient(player, 'Player-ShowPlayerInfo', [
			equipment,
			vehicleSlots,
			registerDate,
			`${cardNumber}`,
			phone.number,
			playedTime,
			licenses
		]);
	}
}

export default new PlayerManager();
