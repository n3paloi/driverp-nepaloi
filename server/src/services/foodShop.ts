import { isNumber } from 'lodash';
import * as rpc from 'rage-rpc';
import coords from '../data/services/foodShops';
import hunger from '../basic/player/hunger';
import notifications from '../helpers/notifications';
import Service from './service';

class FoodShop extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'Магазин еды',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 52, color: 25 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			burger: 150,
			noodles: 140,
			donut: 10,
			potato: 15,
			hotDog: 60,
			kebab: 200,
			pizza: 40,
			taco: 30,
			coffee: 5,
			soda: 5,
			cola: 5
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'FoodShop-ShowBuyerMenu', this.prices);
	}

	getFinalPrice(products: any) {
		let finalPrice = 0;

		for (const name in products) {
			if (products[name] > 0) {
				const price = this.prices[name];

				finalPrice += price * products[name];
			}
		}

		return finalPrice;
	}

	async buy(player: PlayerMp, products: any) {
		try {
			const cost = parseInt(this.getFinalPrice(products), 10);

			if (!isNumber(cost) || cost < 0) return Promise.reject(new Error());

			await player.moneyHelper.different(cost, 'food');

			for (const name in products) {
				if (products[name] || products[name] < 0) {
					player.addToInventory({ name, type: 'food', count: products[name] });
				}
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}
}

const foodShop = new FoodShop();

mp.events.subscribe({
	'FoodShop-Buy': (player, data) => foodShop.buy(player, data)
});

export default function eatFood(player: PlayerMp, name: string) {
	const food = {
		burger: 100,
		noodles: 90,
		donut: 5,
		potato: 10,
		hotDog: 70,
		kebab: 100,
		pizza: 60,
		taco: 25,
		beer: 5,
		coffee: 3,
		soda: 3,
		cola: 3,
		'orange-juice': 3,
		'pineapple-juice': 5
	};

	const satiety = player.hunger + food[name] <= 100 ? player.hunger + food[name] : 100;

	hunger.updatePlayerHunger(player, satiety);
}