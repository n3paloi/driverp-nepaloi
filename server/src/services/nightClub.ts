import { isNumber } from 'lodash';
import * as rpc from 'rage-rpc';
import coords from '../data/services/nightClubs';
import notifications from '../helpers/notifications';
import animations from '../utils/animations';
import Service from './service';

class NightClub extends Service {
	private prices: any;

	private moneyForDrop: number;

	constructor() {
		const info = {
			name: 'Ночной клуб',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 121, color: 48 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			beer: 50,
			wine: 300,
			vodka: 250,
			whisky: 400
		};

		this.moneyForDrop = 100;
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'NightClub-ShowBuyerMenu', this.prices);
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

	async dropMoney(player: PlayerMp) {
		const canBuy = await player.moneyHelper.change(
			-this.moneyForDrop,
			'cash',
			'night-club'
		);

		if (!canBuy) {
			notifications.error(player, 'Недостаточно наличных!');

			return Promise.reject();
		}

		animations.playScenario(player, 'WORLD_HUMAN_STRIP_WATCH_STAND', 5000);
	}

	async buy(player: PlayerMp, products: any) {
		try {
			const cost = parseInt(this.getFinalPrice(products), 10);

			if (!isNumber(cost) || cost < 0) return Promise.reject(new Error());

			await player.moneyHelper.different(cost, 'night-club');

			for (const name in products) {
				if (products[name] || products[name] < 0) {
					player.addToInventory({ name, type: 'alcohol', count: products[name] });
				}
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}
}

const nightClub = new NightClub();

mp.events.subscribe({
	'NightClub-Buy': (player, data) => nightClub.buy(player, data),
	'NightClub-DropMoney': (player) => nightClub.dropMoney(player)
});

export default function drinkAlcohol(player: PlayerMp, name: string) {
	const drunkDurations = {
		beer: 30,
		wine: 50,
		vodka: 80,
		whisky: 100
	};

	animations.playScenario(player, 'WORLD_HUMAN_DRINKING', 6000);

	player.call('startScreenEffect', [
		'DrugsMichaelAliensFightIn',
		drunkDurations[name] * 1000
	]);
}
