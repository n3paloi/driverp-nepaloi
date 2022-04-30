import * as rpc from 'rage-rpc';
import { isNumber, random } from 'lodash';
import User from '../../models/User';
import notifications from '../../helpers/notifications';
import clothes from '../../character/clothes';
import Faction from '../faction';
import './fbiBuilding';
import './pc';
import './garage';

class Fbi extends Faction {
	constructor() {
		const info = {
			id: 'fbi',
			name: 'FBI',
			mainMenu: { x: 132.567138671875, y: -769.840087890625, z: 242.15206909179688 },
			inventoryCoords: {
				x: 119.65833282470703,
				y: -729.2630615234375,
				z: 242.1519317626953
			},
			government: true,
			ranks: [
				'Стажёр',
				'Младший Агент',
				'Федеральный Агент',
				'Агент ФБР',
				'Старший Агент',
				'Агент Безопасности',
				'Агент Расследований',
				'Специальный Агент',
				'Секретный Агент',
				'Глава Управления',
				'Зам Директора ФБР',
				'Директор ФБР'
			],
			salary: [
				4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 45000, 50000
			],
			chatColor: [0, 47, 107]
		};
		super(info);
	}

	changeClothesMan(player: PlayerMp) {
		player.setProp(1, 8, 0);
		player.setProp(2, 0, 0);
		player.setProp(6, 1, 0);
		player.setClothes(4, 24, 0, 0);
		player.setClothes(6, 21, 0, 0);
		player.setClothes(7, 38, 0, 0);

		clothes.set(player, 'underwears', { style: 13, color: 0, gender: 'male' });
		clothes.set(player, 'tops', { style: 72, color: 2, gender: 'male' });
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(2, 1, 0);
		player.setClothes(4, 6, 0, 0);
		player.setClothes(6, 7, 0, 0);

		clothes.set(player, 'tops', { style: 58, color: 0, gender: 'female' });
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'FBI-ShowMenu', id);
	}

	startWork(player: PlayerMp) {
		super.startWork(player);
		if (this.isWorking(player)) this.setWeapons(player);
	}

	setWeapons(player: PlayerMp) {
		player.armour = 100;
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || !isNumber(id)) return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		if (!player2) return;

		rpc.callClient(player2, 'FBI-ShowDocs', [player.getVariable('realName'), rank]);
	}

	trackPlayer(player: PlayerMp, id: number) {
		const suspect = mp.players.at(id);

		if (!suspect) return;
		if (player.faction.tracked === 2) {
			return notifications.error(player, 'Отслеживать можно максимум 2х людей');
		}

		player.call('createDynamicBlip', ['player', id, 1, random(24, 30)]);

		player.timeout(() => {
			player.call('removeDynamicBlip', ['player', id]);
			player.faction.tracked--;
		}, 600000);

		if (player.faction.tracked) player.faction.tracked++;
		else player.faction.tracked = 1;
	}

	async withdrawPassport(player: PlayerMp, id: number) {
		const intruder = mp.players.at(id);

		if (!mp.players.exists(intruder) || !intruder.getVariable('isActiveTempName')) {
			return notifications.error(player, 'Данный гражданин имеет официальные документы!');
		}

		await User.findByIdAndUpdate(intruder.dbId, {
			$set: { tempName: {} }
		});

		intruder.tempName = {};
		intruder.updateName();

		await player.moneyHelper.change(5000, 'bank', 'withdraw passport');

		notifications.success(player, 'Поддельный документ изъят!');
	}
}

const fbi = new Fbi();

mp.events.subscribe({
	'FBI-TrackPlayer': (player, id) => {
		if (player.sack || player.cuff) return;

		fbi.trackPlayer(player, id);
	},
	'FBI-WithdrawPassport': (player, id) => fbi.withdrawPassport(player, id)
});

export default fbi;
