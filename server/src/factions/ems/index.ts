import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Faction from '../faction';
import notifications from '../../helpers/notifications';
import animations from '../../utils/animations';
import playerActions from '../../basic/player/actions';
import clothes from '../../character/clothes';
import pc from './pc';
import './building';
import './garage';
import './leaderboard';

class Ems extends Faction {
	constructor() {
		const info = {
			id: 'ems',
			name: 'EMS',
			mainMenu: { x: 301.234, y: -599.238, z: 43.284 },
			inventoryCoords: { x: 309.188, y: -562.418, z: 43.284 },
			government: true,
			ranks: [
				'Интерн',
				'Фельдшер',
				'Реаниматолог',
				'Физиолог',
				'Терапевт',
				'Врач',
				'Психолог',
				'Врач хирург',
				'Зам. Главного врача',
				'Глав. врач'
			],
			salary: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 55000],
			chatColor: [245, 66, 66]
		};
		super(info);
	}

	async revive(player: PlayerMp, id: number) {
		const victim = mp.players.at(id);

		if (
			!isNumber(id) ||
			!victim ||
			!playerActions.targetIsNear(victim, player.position) ||
			!victim.getVariable('isDying') ||
			player.healing
		) {
			return notifications.info(player, 'Гражданин в нормальном состоянии!');
		}

		player.healing = true;

		animations.playOnServer(player, 'resuscitation');

		await player.moneyHelper.change(600, 'bank', 'revive');
		this.addToStatistic(player.dbId, 'revive');

		player.timeout(() => {
			delete player.healing;
			animations.stopOnServer(player);

			pc.deleteCall(victim.id);

			if (
				!mp.players.exists(victim) ||
				!playerActions.targetIsNear(victim, player.position)
			)
				return;

			victim.ressurect();
		}, 15000);
	}

	async heal(player: PlayerMp, id: number) {
		const victim = mp.players.at(id);

		if (
			!isNumber(id) ||
			!victim ||
			!playerActions.targetIsNear(victim, player.position) ||
			victim.getVariable('isDying')
		) {
			return notifications.info(player, 'Гражданин слишком далеко!');
		}

		animations.playOnServer(player, 'resuscitation');

		player.timeout(() => {
			animations.stopOnServer(player);

			if (!mp.players.exists(victim)) return;

			victim.health = 100;
		}, 5000);
	}

	changeClothesMan(player: PlayerMp) {
		player.setProp(6, 1, 0);
		player.setClothes(4, 96, 0, 0);
		player.setClothes(6, 8, 0, 0);
		player.setClothes(7, 127, 0, 0);
		player.setClothes(10, 58, 0, 0);

		clothes.set(player, 'underwears', { style: 250, color: 0, gender: 'male' });

		player.setClothes(3, 85, 1, 0);
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(6, 4, 0);
		player.setClothes(7, 97, 0, 0);
		player.setClothes(6, 1, 3, 0);
		player.setClothes(4, 23, 3, 0);

		clothes.set(player, 'underwears', { style: 73, color: 0, gender: 'female' });

		player.setClothes(3, 109, 0, 0);
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'EMS-ShowMenu', id);
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || !isNumber(id)) return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		if (!player2) return;

		rpc.callClient(player2, 'EMS-ShowDocs', [player.getVariable('realName'), rank]);
	}
}

const ems = new Ems();

mp.events.subscribe({
	'EMS-Revive': (player, id) => ems.revive(player, id),
	'EMS-Heal': (player, id) => ems.heal(player, id)
});

export default ems;
