import * as rpc from 'rage-rpc';
import notifications from '../../helpers/notifications';
import Service from '../service';

type Product = {
	type: string;
	price: number;
	capacity: number;
};

class FishingShop extends Service {
	private readonly products: { [name: string]: Product };

	constructor() {
		const info = {
			name: 'Рыбацкий магазин',
			entities: [{ x: -2193.079, y: 4286.591, z: 49.175 }],
			markerData: { radius: 0.75 },
			blipData: { model: 356, color: 30 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.products = {
			rod: {
				type: 'rod',
				price: 1000,
				capacity: 10
			},
			rod_mk2: {
				type: 'rod',
				price: 2500,
				capacity: 20
			},
			rod_special: {
				type: 'rod',
				price: 7000,
				capacity: 50
			},
			fish_bait: {
				type: 'tools',
				price: 700,
				capacity: 10
			}
		};

		mp.events.subscribe({
			'FishingShop-Buy': this.buy.bind(this)
		});
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		rpc.callClient(player, 'FishingShop-ShowBuyerMenu', this.products);
	}

	async buy(player: PlayerMp, name: string) {
		const product = this.products[name];
		if (!product) return;

		await player.moneyHelper.different(product.price, 'fishing shop');
		await player.addToInventory({
			name,
			type: product.type,
			count: 1,
			...(product.type === 'rod'
				? { capacity: product.capacity }
				: { count: product.capacity })
		});

		notifications.success(player, 'Успешная покупка!');
	}
}

const shop = new FishingShop();
