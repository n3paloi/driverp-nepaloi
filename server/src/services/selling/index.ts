import * as rpc from 'rage-rpc';
import { random, isNumber } from 'lodash';
import Service from '../service';
import prison from '../../basic/prison';
import PlayerInventory from '../../basic/player/playerInventory';
import notifications from '../../helpers/notifications';

const sellPoints = {};

class SellPoint extends Service {
	protected prices: any;

	protected currentPrices: any;

	private legal: boolean;

	constructor(legal, serviceData, prices) {
		super(
			serviceData.name,
			serviceData.entities,
			serviceData.markerData,
			serviceData.blipData
		);

		this.legal = legal;
		this.prices = prices;
		this.currentPrices = {};

		this.setRandomPrices();

		sellPoints[serviceData.name] = this;

		mp.events.subscribe({
			'SellPoint-Exchange': this.exchangeItems.bind(this),
			'SellPoint-GetItems': this.getAllExchangePrices
		});
	}

	get exchangePrices() {
		return this.currentPrices;
	}

	private getAllExchangePrices() {
		const data = [];

		Object.values(sellPoints).forEach((point: any) => {
			Object.entries(point.currentPrices).forEach(([name, price]) =>
				data.push({ name, price })
			);
		});

		return data;
	}

	setRandomPrices() {
		Object.keys(this.prices).forEach((name) => {
			const arr = this.prices[name];
			const price = arr[random(0, arr.length - 1)];

			this.currentPrices[name] = price;
		});
	}

	async exchangeItems(player: any, product: string, value: any): Promise<void> {
		const { price } = this.getAllExchangePrices().find((item) => item.name === product);

		if (!price) return Promise.reject();

		const item = PlayerInventory.getItem(player.inventory, product);
		const count = parseInt(value, 10);

		if (!item || item <= 0 || !isNumber(count) || count <= 0 || item.count < count) {
			return Promise.reject('bad count value');
		}

		await PlayerInventory.decItemCount(player, player.inventory, item, count);
		await PlayerInventory.updateInventoryInDb(player.dbId, player.inventory);

		const earnedMoney = count * price;

		await player.moneyHelper.change(earnedMoney, 'bank', 'resources');

		if (item.name === 'weed' || item.name === 'joint') {
			await prison.addViolation(player, 1.5);
		}

		notifications.success(player, 'Операция успешна!');
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle) return;

		const products = {};

		Object.keys(this.prices).forEach((name) => {
			const item = PlayerInventory.getItem(player.inventory, name);
			if (item) products[name] = item.count;
		});

		rpc.callClient(player, 'Selling-ShowMenu', [
			this.currentPrices,
			products,
			this.legal
		]);
	}
}

export function setRandomExchangePrice() {
	Object.values(sellPoints).forEach((point: any) => {
		point.setRandomPrices();
	});
}

mp.events.addCommand({
	course: (player) => {
		if (player.adminLvl < 3) return;

		setRandomExchangePrice();
	}
});

export default SellPoint;
