import * as rpc from 'rage-rpc';
import User from '../../models/User';
import prison from '../../basic/prison';
import Security from '.';
import notifications from '../../helpers/notifications';

class SecurityVehiclePC {
	private name: string;

	private prices: any;

	constructor() {
		this.name = 'secure';

		this.prices = {
			license: 30000,
			wanted: 160000
		};
	}

	openMenu(player: PlayerMp) {
		if (player.faction.id !== this.name) return;

		const { vehicle } = player;

		if (!vehicle || !vehicle.owner || vehicle.owner.id !== this.name) {
			return notifications.error(player, 'Нужно находиться в служебном ТС');
		}

		rpc.callClient(player, 'Security-ShowVehiclePC', this.prices);
	}

	showBuyerMenu(player: PlayerMp, product: string, data: any) {
		const { firstName, lastName } = data;

		const buyer = mp.players
			.toArray()
			.find((item) => item.firstName === firstName && item.lastName === lastName);

		if (!mp.players.exists(buyer) || buyer.cuff || buyer.getVariable('insideJail')) {
			return notifications.error(player, 'Гражданин не найден!');
		}

		if (product === 'license' && buyer.isHasLicense('gun')) {
			return notifications.error(player, 'У этого гражданина уже есть лицензия!');
		}

		if (product === 'wanted' && !prison.getViolator(buyer.id)) {
			return notifications.error(player, 'У этого гражданина нет розысков!');
		}

		rpc.callClient(buyer, 'Security-ShowBuyerMenu', [
			product,
			this.prices[product],
			player.dbId
		]);
	}

	async buyLicense(player: PlayerMp, sellerId: string) {
		try {
			const { id } = Security.getFactionMember(sellerId);
			const price = this.prices.license;

			if (!Number.isInteger(id)) return;

			await player.moneyHelper.different(price, 'secure license');

			const seller = mp.players.at(id);
			const earnedMoney = (price / 100) * 20;

			await Security.changeFactionMoney(price - earnedMoney);
			await seller.moneyHelper.change(earnedMoney, 'bank', 'secure income');

			player.licenses.push({ name: 'gun', legal: false });

			await User.findByIdAndUpdate(player.dbId, {
				$set: { licenses: player.licenses }
			});

			await prison.addViolation(seller, 2.1);

			Security.addToStatistic(seller.dbId, 'license');

			notifications.success(seller, 'Успешная продажа!');
			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	async clearWanted(player: PlayerMp, sellerId: string) {
		try {
			const { id } = Security.getFactionMember(sellerId);
			const price = this.prices.wanted;

			if (!Number.isInteger(id)) return;

			await player.moneyHelper.different(price, 'secure wanted');

			const seller = mp.players.at(id);
			const earnedMoney = (price / 100) * 20;

			await Security.changeFactionMoney(price - earnedMoney);
			await seller.moneyHelper.change(earnedMoney, 'bank', 'secure income');

			await prison.deleteViolator(player);
			await prison.addViolation(seller, 2.0);

			Security.addToStatistic(seller.dbId, 'wanted');

			notifications.success(seller, 'Успешная продажа!');
			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const vehiclePC = new SecurityVehiclePC();

mp.events.subscribe({
	'Security-ShowVehiclePC': (player) => {
		if (!player.vehicle) return;

		vehiclePC.openMenu(player);
	},
	'Security-ShowBuyerMenu': (player, product, data) => {
		if (player.sack || player.cuff) return;

		vehiclePC.showBuyerMenu(player, product, data);
	},
	'Security-Wanted': (player, sellerId) => {
		vehiclePC.clearWanted(player, sellerId);
	},
	'Security-License': (player, sellerId) => {
		vehiclePC.buyLicense(player, sellerId);
	}
});
