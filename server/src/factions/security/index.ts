import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Faction from '../faction';
import prison from '../../basic/prison';
import './securityBuilding';
import './pc';
import './vehiclePc';
import './garage';
import './securityLeaderBoard';
import notifications from '../../helpers/notifications';
import clothes from '../../character/clothes';

class Security extends Faction {
	constructor() {
		const info = {
			id: 'secure',
			name: 'ЧОП',
			mainMenu: { x: 1404.2537841796875, y: 1165.0020751953125, z: 114.34660339355469 }, //Передевалка
			government: false,
			ranks: [
				'Соучастник',
				'Залётный',
				'Босота',
				'Бывалый',
				'Фраер',
				'Приблатнённый',
				'Блатной',
				'Решала',
				'Уважаемый',
				'Вор в законе',
				'Пахан',
				'Авторитет'
			],
			salary: [
				5000, 7000, 9000, 11000, 14000, 17000, 20000, 23000, 26000, 29000, 32000, 35000
			],
			chatColor: [255, 132, 0],
			inventoryCoords: {
				x: 1399.920654296875,
				y: 1139.7105712890625,
				z: 114.3336410522461
			}
		};
		super(info);
	}

	startWork(player: PlayerMp) {
		super.startWork(player);
		if (this.isWorking(player)) this.setWeapons(player);
	}

	setWeapons(player: PlayerMp) {
		player.armour = 100;
	}

	async toRob(player: PlayerMp, id: number) {
		const victim = mp.players.at(id);

		if (!victim || !victim.cuff) {
			return notifications.error(player, 'Для ограбления свяжите жертву');
		}

		await player.moneyHelper.change(victim.money.cash, 'cash', 'secure rob');
		await victim.moneyHelper.resetCash();

		prison.addViolation(player, 1.7);
	}

	changeClothesMan(player: PlayerMp) {
		player.setProp(6, 1, 0);
		player.setClothes(4, 10, 0, 0);
		player.setClothes(6, 10, 0, 0);
		player.setClothes(7, 38, 0, 0);

		clothes.set(player, 'underwears', { style: 13, color: 0, gender: 'male' });
		clothes.set(player, 'tops', { style: 28, color: 0, gender: 'male' });
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(6, 2, 0);
		player.setClothes(3, 5, 0, 0);
		player.setClothes(4, 6, 0, 0);
		player.setClothes(6, 6, 0, 0);

		clothes.set(player, 'underwears', { style: 74, color: 0, gender: 'female' });
		clothes.set(player, 'tops', { style: 58, color: 0, gender: 'female' });
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'Security-ShowMenu', id);
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || typeof id !== 'number') return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		rpc.callClient(player2, 'Security-ShowDocs', [player.getVariable('realName'), rank]);
	}
}

const security = new Security();

mp.events.subscribe({
	'Security-ToRob': (player, id) => {
		if (player.vehicle) return;

		security.toRob(player, id);
	}
});

export default security;
