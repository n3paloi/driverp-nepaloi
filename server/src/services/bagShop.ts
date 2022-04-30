import * as rpc from 'rage-rpc';
import Service from './service';
import coords from '../data/services/bagShops';
import notifications from '../helpers/notifications';

class BagShop extends Service {
	private products: any;

	constructor() {
		const info = {
			name: 'Магазин сумок',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 408, color: 2 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.products = {
			bag: {
				price: 5000,
				slots: 60
			}
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'BagShop-ShowBuyerMenu', this.products);
	}

	async buy(player: PlayerMp, name: any) {
		try {
			if (!name) return;

			await player.moneyHelper.different(this.products[name].price, 'bag');

			player.addToInventory({ name, type: 'clothes', count: 1 });

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const bagShop = new BagShop();

mp.events.subscribe({
	'BagShop-Buy': (player, name) => bagShop.buy(player, name)
});

export default bagShop;
