import moment from 'moment';
import * as rpc from 'rage-rpc';
import { getNearestVehicleInRange, xyInFrontOfPos } from '../../utils/vehicles';
import User from '../../models/User';
import Faction from '../../models/Faction';
import notifications from '../../helpers/notifications';
import police from '../../factions/police';
import security from '../../factions/security';
import fbi from '../../factions/fbi';
import sheriff from '../../factions/sheriff';
import mafia from '../../factions/italianMafia';
import ems from '../../factions/ems';
import house from '../../property/house';
import business from '../../property/business';
import vehicleManager from '../vehicle';
import vehicleDespawn from '../vehicle/despawn';
import chat from '../chat';
import referal from '../referal';
import permissions from './permissions';
import '../../utils/savepos';
import './demorgan';
import './reports';

class Admin {
	constructor() {
		this.subscribeToEvents();
	}

	notifyAll(message: string) {
		mp.players.forEach(
			(player) =>
				permissions.hasPermission(player, 'helper') && notifications.info(player, message)
		);
	}

	kick(admin: PlayerMp, id: number) {
		if (!permissions.hasPermission(admin, 'helper')) return;

		const player = mp.players.getById(id);
		if (!player) return;

		notifications.info(player, 'Вас кикнул администратор!');
		player.kick('ADMIN KICK');

		notifications.success(admin, 'Игрок кикнут!');
	}

	async ban(admin: PlayerMp, id: number, term: string, reason: string) {
		const player = mp.players.getById(id);
		if (!player || !permissions.hasPermission(admin, 'admin')) return;

		if (
			moment(term).diff(moment(), 'month') > 12 &&
			!permissions.hasPermission(player, 'gm')
		) {
			return notifications.error(admin, 'Максимальный срок бана - 12 месяцев');
		}

		await User.findByIdAndUpdate(player.dbId, {
			$set: { ban: { adminId: admin.dbId, perm: false, reason, term } }
		});
		player.kick(reason);

		notifications.success(admin, 'Игрок успешно забанен!');
	}

	async unban(admin: PlayerMp, email: string, firstName: string, lastName: string) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		let player = await User.findOne({ email });

		if (!player) {
			const user = await User.findOne({ firstName, lastName });
			if (!user) return notifications.error(admin, 'Игрок не найден!');
			player = user;
		}

		player.ban = {};
		await player.save();

		notifications.success(admin, 'Игрок успешно разбанен!');
	}

	async changeMoney(admin: PlayerMp, id: number, amount: number) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		const player = mp.players.getById(id);

		if (player) {
			await player.moneyHelper.change(amount, 'bank', 'admin');
			notifications.success(admin, 'Операция успешна');
		}
	}

	async setFactionLeader(admin: PlayerMp, id: number, faction: string) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const player = mp.players.getById(id);
		if (!player) return;

		switch (faction) {
			case 'Полиция':
				await police.setAsLeader(admin, player);
				break;
			case 'ЧОП':
				await security.setAsLeader(admin, player);
				break;
			case 'FBI':
				await fbi.setAsLeader(admin, player);
				break;
			case 'Итальянская мафия':
				await mafia.setAsLeader(admin, player);
				break;
			case 'Шериф':
				await sheriff.setAsLeader(admin, player);
				break;
			case 'EMS':
				await ems.setAsLeader(admin, player);
				break;
			default:
				break;
		}
	}

	setPlayerSkin(admin: PlayerMp, id: number, name: string) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const player = mp.players.getById(id);

		if (player) {
			player.model = mp.joaat(name);
			notifications.success(admin, 'Операция успешна!');
		}
	}

	teleport(admin: PlayerMp, id: number, type: string, coords: PositionEx) {
		if (!permissions.hasPermission(admin, 'helper')) return;

		const player = mp.players.getById(id);

		switch (type) {
			case 'player':
				if (!player) return;
				admin.tp({ ...player.position, dimension: player.dimension });
				break;
			case 'yourself':
				if (!player) return;
				player.tp({ ...admin.position, dimension: admin.dimension });
				break;
			case 'waypoint':
				admin.tp(admin.waypoint);
				break;
			case 'coords':
				admin.tp(coords);
				break;
			default:
				break;
		}
	}

	createVehicle(admin: PlayerMp, id: number, model: string, temporary: boolean) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		const player = mp.players.getById(id);
		if (!player) return;

		vehicleManager.create(
			model,
			xyInFrontOfPos(player.position, player.heading, 3.0),
			{
				type: 'user',
				id: player.dbId
			},
			temporary,
			false,
			player
		);
	}

	despawnVehicle(admin: PlayerMp) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const vehicle = getNearestVehicleInRange(admin.position, 3);
		if (vehicle) vehicleDespawn.despawnVehicle(vehicle);
	}

	createPromocode(admin: PlayerMp, income: number, award: number, code: string) {
		if (!permissions.hasPermission(admin, 'gm')) return;
		referal.createCustomCode(admin, income, award, code);
	}

	createProperty(admin: PlayerMp, type: string, data: any) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		switch (type) {
			case 'house':
				house.create(admin, data.propertyClass);
				break;
			case 'business':
				business.create(admin, data.name, data.cost, data.income);
				break;
			default:
				break;
		}
	}

	sendChatMessage(admin: PlayerMp, text: string, target?: number) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const player = mp.players.getById(target);
		chat.sendSystem(`[ADMIN]${admin.getName()}: ${text}`, player);

		notifications.success(admin, 'Сообщение отправлено!');
	}

	openMenu(player: PlayerMp) {
		if (!permissions.hasPermission(player, 'helper')) return;

		const players = [];

		mp.players.toArray().forEach(
			(item) =>
				item.dbId &&
				players.push({
					id: item.id,
					name: `${item.getVariable('realName')} #${item.uid}`
				})
		);

		rpc.callClient(player, 'Admin-ShowMenu', [player.adminLvl, players]);
	}

	async getFactions() {
		const factions = await Faction.find().lean();
		return factions.map((faction) => faction.name);
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			'Keys-F4': this.openMenu.bind(this)
		});
		mp.events.subscribe({
			'Admin-Ban': this.ban.bind(this),
			'Admin-Unban': this.unban.bind(this),
			'Admin-Kick': this.kick.bind(this),
			'Admin-SetFactionLeader': this.setFactionLeader.bind(this),
			'Admin-ChangeMoney': this.changeMoney.bind(this),
			'Admin-SetPlayerSkin': this.setPlayerSkin.bind(this),
			'Admin-CreatePromocode': this.createPromocode.bind(this),
			'Admin-Teleport': this.teleport.bind(this),
			'Admin-CreateVehicle': this.createVehicle.bind(this),
			'Admin-DespawnVehicle': this.despawnVehicle.bind(this),
			'Admin-GetFactions': this.getFactions,
			'Admin-CreateProperty': this.createProperty.bind(this),
			'Admin-SendChatMessage': this.sendChatMessage.bind(this),
			'Admin-NotifyAll': (player, message: string) => this.notifyAll(message)
		});

		mp.events.addCommand({
			gm: (player) => {
				if (!permissions.hasPermission(player, 'helper')) return;

				player.setVariable('AGM', !player.getVariable('AGM'));
				player.call('AGM');
			},
			sp: (player, value) => {
				if (!permissions.hasPermission(player, 'helper')) return;

				const target = mp.players.getById(parseInt(value, 10));
				rpc.callClient(player, 'Admin-Spectate', target);
			},
			esp: (player) => {
				if (!permissions.hasPermission(player, 'helper')) return;

				rpc.callClient(player, 'Admin-ToggleESP');
			},
			inv: (player) => {
				if (!permissions.hasPermission(player, 'helper')) return;

				if (!player.alpha) player.alpha = 255;
				else player.alpha = 0;

				player.setVariable('invisible', !player.alpha);
			},
			clothes: (player) => {
				if (!permissions.hasPermission(player, 'gm')) return;

				rpc.callClient(player, 'ClothesViewer-ShowMenu');
			},
			nick: (player) => {
				if (!permissions.hasPermission(player, 'helper')) return;

				const status: boolean = player.getVariable('adminNickname');
				player.setVariable('adminNickname', !status);

				notifications.info(
					player,
					status ? 'Статус админа выключен' : 'Статус админа включен'
				);
			}
		});
	}
}

export default new Admin();
