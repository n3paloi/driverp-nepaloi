import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../../models/User';
import Faction from '../faction';
import Weapons from '../../basic/weapons';
import prison from '../../basic/prison';
import WeaponsOrder from './weaponsOrder';
import PlayerInventory from '../../basic/player/playerInventory';
import notifications from '../../helpers/notifications';
import clothes from '../../character/clothes';
import building from './policeBuilding';
import './pc';
import './garage';
import './policeLeaderBoard';

class Police extends Faction {
	constructor() {
		const info = {
			id: 'lspd',
			name: 'Полиция',
			mainMenu: { x: 461.4183349609375, y: -999.1173095703125, z: 30.689584732055664 },
			inventoryCoords: {
				x: 485.6922607421875,
				y: -995.9817504882812,
				z: 30.689802169799805
			},
			government: true,
			ranks: [
				'Кадет',
				'Рекрут',
				'Капрал',
				'Сержант',
				'Офицер',
				'Лейтенант',
				'Капитан',
				'Майор',
				'Коммандер',
				'Ассистент шефа',
				'Заместитель шефа',
				'Шеф'
			],
			salary: [
				4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 45000, 50000
			],
			chatColor: [0, 102, 255]
		};
		super(info);
	}

	updateMarkers(player: PlayerMp) {
		WeaponsOrder.updateMainMarker(player, this.name);

		super.updateMarkers(player);
	}

	async putToJail(player: PlayerMp, id: number) {
		if (!isNumber(id) || player.dist(building.getEntranceCoords()) > 50) {
			return notifications.info(player, 'Преступник должен находиться в департаменте.');
		}

		try {
			const intruder = mp.players.at(id);

			if (!mp.players.exists(intruder)) return;

			await prison.startJail(intruder, player);

			if (this.isInThisFaction(player)) {
				this.addToStatistic(player.dbId, 'arrest');
			}
		} catch (err) {
			notifications.info(player, 'У гражданина нет нарушений!');
		}
	}

	startWork(player: PlayerMp) {
		super.startWork(player);
		if (this.isWorking(player)) this.setWeapons(player);
	}

	setWeapons(player: PlayerMp) {
		player.armour = 100;
	}

	pickUpWeapons(player: PlayerMp, id: number) {
		if (!isNumber(id)) return;

		const intruder = mp.players.at(id);

		if (!mp.players.exists(intruder)) return;

		if (!intruder.cuff) {
			return notifications.error(
				player,
				'Для изъятия наденьте наручники на подозреваемого'
			);
		}

		const weapons = Weapons.removeWeapons(intruder);

		weapons.forEach((weapon) => player.addToInventory(weapon));
	}

	searchInventory(player: PlayerMp, id: number) {
		if (!isNumber(id)) return;

		const intruder = mp.players.at(id);

		if (!mp.players.exists(intruder)) return;

		if (!intruder.cuff) {
			return notifications.error(
				player,
				'Для обыска наденьте наручники на подозреваемого'
			);
		}

		PlayerInventory.showDoubleMenu(player, intruder);
	}

	changeClothesMan(player: PlayerMp) {
		player.setProp(0, 46, 0);
		player.setClothes(6, 25, 0, 0);
		player.setClothes(4, 35, 0, 0);

		clothes.set(player, 'underwears', { style: 55, color: 0, gender: 'male' });

		player.setClothes(8, 58, 0, 0);
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(0, 45, 0);
		player.setClothes(6, 25, 0, 0);
		player.setClothes(4, 34, 0, 0);

		clothes.set(player, 'underwears', { style: 48, color: 0, gender: 'female' });

		player.setClothes(8, 35, 0, 0);
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'Police-ShowMenu', id);
	}

	async withdrawLicenses(player: PlayerMp, id: number) {
		const intruder = mp.players.at(id);

		if (!mp.players.exists(intruder)) return;

		const hasIllegal = intruder.licenses.find((license) => !license.legal);

		if (!hasIllegal) return;

		intruder.licenses = intruder.licenses.filter((license) => license.legal);

		await User.findByIdAndUpdate(intruder.dbId, {
			$set: { licenses: intruder.licenses }
		});

		await player.moneyHelper.change(10000, 'bank', 'withdraw licenses');

		notifications.success(player, 'Операция успешна!');
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || !isNumber(id)) return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		if (!player2) return;

		rpc.callClient(player2, 'Police-ShowDocs', [player.getVariable('realName'), rank]);
	}
}

const police = new Police();

mp.events.subscribe({
	'Police-PutToJail': (player, id) => {
		police.putToJail(player, id);
	},
	'Police-PickUpWeapons': (player, id) => {
		if (player.vehicle) return;

		police.pickUpWeapons(player, id);
	},
	'Police-ToSearch': (player, id) => {
		if (player.vehicle) return;

		police.searchInventory(player, id);
	},
	'Police-WithdrawLicenses': (player, id) => {
		police.withdrawLicenses(player, id);
	}
});

mp.events.subscribeToDefault({
	playerEnterColshape: (player, shape) => {
		if (
			!player.loggedIn ||
			!shape.doorId ||
			!police.isInThisFaction(player) ||
			!police.isWorking(player)
		)
			return;

		player.canEnter.door = { id: shape.doorId, pos: shape.pos };

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть/закрыть камеру');
	},
	playerExitColshape: (player, shape) => {
		if (
			!player.loggedIn ||
			!police.isInThisFaction(player) ||
			!police.isWorking(player) ||
			!shape.doorId
		)
			return;

		player.canEnter.door = false;
	},
	'Keys-E': (player) => {
		if (!police.isInThisFaction(player) || !player.canEnter.door) return;

		const { id, pos } = player.canEnter.door;

		mp.players.forEach((item) => rpc.callClient(item, 'Police-ToggleDoor', [id, pos]));
	}
});

export default police;
