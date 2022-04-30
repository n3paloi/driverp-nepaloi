import { isNumber } from 'lodash';
import * as rpc from 'rage-rpc';
import coords from '../data/services/pharmacies';
import notifications from '../helpers/notifications';
import Service from './service';

class Pharmacy extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'Госпиталь',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 153, color: 1 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			aidKit: 5000,
			adrenalin: 2000,
			pill: 300
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'Pharmacy-ShowBuyerMenu', this.prices);
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

			await player.moneyHelper.different(cost, 'medication');

			for (const name in products) {
				if (products[name]) {
					player.addToInventory({ name, type: 'medication', count: products[name] });
				}
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}
}

const pharmacy = new Pharmacy();

mp.events.subscribe({
	'Pharmacy-Buy': (player, data) => pharmacy.buy(player, data)
});

export function useMedicine(player: PlayerMp, name: string) {
	const healthRecovery = {
		aidKit: 100,
		adrenalin: 50,
		pill: 10
	};

	if (player.health + healthRecovery[name] <= 100) {
		player.health += healthRecovery[name];
	} else player.health = 100;
}
