import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import * as moment from 'moment';
import Faction from '../faction';
import User from '../../models/User';
import { validateName } from '../../utils/validation';
import { getNearestPlayerInRange } from '../../utils/players';
import vehicle from '../../basic/vehicle';
import prison from '../../basic/prison';
import building from './mafiaBuilding';
import clothes from '../../character/clothes';
import notifications from '../../helpers/notifications';
import './pc';
import './garage';
import './mafiaLeaderBoard';

class ItalianMafia extends Faction {
	private prices: any;

	constructor() {
		const info = {
			id: 'italy',
			name: 'Итальянская мафия',
			mainMenu: { x: -2586.75927734375, y: 1877.803955078125, z: 163.72415161132812 },
			government: false,
			ranks: [
				'Посвященный',
				'Подручный',
				'Сообщник',
				'Солдато',
				'Громила',
				'Сотто-Капо',
				'Капо',
				'Младший Босс',
				'Босс',
				'Советник',
				'Консильере',
				'Дон'
			],
			salary: [
				5000, 7000, 9000, 11000, 14000, 17000, 20000, 23000, 26000, 29000, 32000, 35000
			],
			chatColor: [190, 85, 211],
			inventoryCoords: {
				x: -2582.910888671875,
				y: 1892.3502197265625,
				z: 163.72413635253906
			}
		};
		super(info);

		this.prices = {
			vehicleNumber: 50000,
			passport: 30000
		};
	}

	startWork(player: PlayerMp) {
		super.startWork(player);
		if (this.isWorking(player)) this.setWeapons(player);
	}

	setWeapons(player: PlayerMp) {
		player.armour = 100;
	}

	changeClothesMan(player: PlayerMp) {
		player.setProp(6, 1, 0);
		player.setClothes(4, 20, 2, 0);
		player.setClothes(6, 21, 0, 0);
		player.setClothes(7, 38, 0, 0);

		clothes.set(player, 'underwears', { style: 13, color: 0, gender: 'male' });
		clothes.set(player, 'tops', { style: 20, color: 2, gender: 'male' });
	}

	changeClothesWoman(player: PlayerMp) {
		player.setProp(6, 3, 0);
		player.setClothes(4, 6, 0, 0);
		player.setClothes(6, 6, 0, 0);

		clothes.set(player, 'underwears', { style: 13, color: 0, gender: 'female' });
		clothes.set(player, 'tops', { style: 6, color: 0, gender: 'female' });
	}

	openInteractionMenu(player: PlayerMp, target: number) {
		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'ItalianMafia-ShowMenu', id);
	}

	showFactionDocs(player: PlayerMp, id: number) {
		if (!this.isInThisFaction(player) || typeof id !== 'number') return;

		const { rank } = player.getVariable('faction');
		const player2 = mp.players.at(id);

		if (!player2) return;

		rpc.callClient(player2, 'ItalianMafia-ShowDocs', [
			player.getVariable('realName'),
			rank
		]);
	}

	showBuyerMenu(player: PlayerMp, product: string) {
		const buyer = getNearestPlayerInRange(player.position, 3);

		if (!mp.players.exists(buyer) || buyer.dist(building.getEntranceCoords()) > 60) {
			return notifications.error(player, 'Нужно находиться на территории фракции!');
		}

		rpc.callClient(buyer, 'ItalianMafia-ShowBuyerMenu', [
			product,
			this.prices[product],
			player.dbId
		]);
	}

	async changeVehicleNumber(player: PlayerMp, sellerId: string) {
		try {
			const { id } = this.getFactionMember(sellerId);
			const price = this.prices.vehicleNumber;

			if (
				!Number.isInteger(id) ||
				!player.vehicle ||
				!vehicle.isOwner(player.vehicle, player)
			) {
				return notifications.error(player, 'Вы не являетесь владельцем данного ТС!');
			}

			const seller = mp.players.at(id);
			await player.moneyHelper.different(price, 'mafia number');

			const earnedMoney = (price / 100) * 20;

			await this.changeFactionMoney(price - earnedMoney);
			await seller.moneyHelper.change(earnedMoney, 'bank', 'mafia income');

			await vehicle.setNumberPlate(player.vehicle);

			await prison.addViolation(seller, 1.8);

			this.addToStatistic(seller.dbId, 'vehicleNumber');

			notifications.success(seller, 'Успешная продажа!');
			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	async changePassport(player: PlayerMp, sellerId: string, data: any) {
		try {
			const { id } = this.getFactionMember(sellerId);
			const price = this.prices.passport;

			const { firstName, lastName } = data;
			const error = await validateName(firstName, lastName);

			if (error || !Number.isInteger(id)) return;

			const seller = mp.players.at(id);
			await player.moneyHelper.different(price, 'mafia docs');

			const earnedMoney = (price / 100) * 20;

			await this.changeFactionMoney(price - earnedMoney);
			await seller.moneyHelper.change(earnedMoney, 'bank', 'mafia income');

			const tempName = {
				firstName,
				lastName,
				expiresDate: moment(new Date()).add(1, 'days')
			};

			await User.findByIdAndUpdate(player.dbId, { $set: { tempName } });

			player.tempName = tempName;
			player.updateName();

			await prison.addViolation(seller, 1.9);

			this.addToStatistic(seller.dbId, 'passport');

			notifications.success(seller, 'Успешная продажа!');
			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const italianMafia = new ItalianMafia();

mp.events.subscribe({
	'ItalianMafia-VehicleNumber': (player, id) => {
		italianMafia.changeVehicleNumber(player, id);
	},
	'ItalianMafia-Passport': (player, id, data) => {
		italianMafia.changePassport(player, id, data);
	},
	'ItalianMafia-ShowBuyerMenu': (player, product) => {
		if (player.sack || player.cuff) return;

		italianMafia.showBuyerMenu(player, product);
	}
});

export default italianMafia;
