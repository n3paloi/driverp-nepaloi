import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Faction from '../faction';
import prison from '../../basic/prison';
import notifications from '../../helpers/notifications';
import clothes from '../../character/clothes';
import building from './building';
import './pc';
import './garage';
import './leaderboard';

class Sheriff extends Faction {
	constructor() {
		const info = {
			id: 'lssd',
			name: 'Шериф',
			mainMenu: { x: -451.567, y: 6009.616, z: 31.844 },
			inventoryCoords: { x: -425.552, y: 5998.533, z: 31.716 },
			government: true,
			ranks: [
				'Помощник Шерифа',
				'Помощник Шерифа Сержант',
				'Помощник Шерифа Лейтенант',
				'Инспектор',
				'Старший Инспектор',
				'Руководитель Штаба',
				'Заместитель Начальника Штаба',
				'Начальник Штаба',
				'Помощник Шерифа Капитан',
				'Ассистент Заместителя Шерифа',
				'Заместитель Шерифа',
				'Первый Заместитель Шерифа',
				'Шериф'
			],
			salary: [
				4000,
				8000,
				12000,
				16000,
				20000,
				24000,
				28000,
				32000,
				36000,
				40000,
				44000,
				48000,
				52000
			],
			chatColor: [230, 208, 150]
		};
		super(info);
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

	changeClothesMan(player: PlayerMp) {
		player.setProp(0, 13, 1); // hat
		player.setProp(6, 10, 0);
		player.setClothes(6, 25, 0, 0); // shoes
		player.setClothes(7, 38, 0, 0);
		player.setClothes(4, 22, 1, 0); // legs

		clothes.set(player, 'underwears', { style: 13, color: 1, gender: 'male' });

		player.setClothes(8, 58, 0, 0);
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(6, 20, 1);
		player.setClothes(6, 27, 0, 0); // shoes
		player.setClothes(4, 23, 5, 0); // legs

		clothes.set(player, 'underwears', { style: 9, color: 1, gender: 'female' });

		player.setClothes(8, 35, 0, 0); // under
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'Sheriff-ShowMenu', id);
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || !isNumber(id)) return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		if (!player2) return;

		rpc.callClient(player2, 'Sheriff-ShowDocs', [player.getVariable('realName'), rank]);
	}
}

const sheriff = new Sheriff();

mp.events.subscribe({
	'Sheriff-PutToJail': (player, id) => {
		sheriff.putToJail(player, id);
	}
});

export default sheriff;
