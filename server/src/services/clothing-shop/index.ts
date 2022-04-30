import * as rpc from 'rage-rpc';
import Service from '../service';
import playerClothes from '../../character/clothes';
import coords from '../../data/services/clothingShops';
import inventory from '../../basic/player/playerInventory';
import notifications from '../../helpers/notifications';
import { male, female } from './clothes';
// import './price';

type Product = {
	type: string;
	index: number;
	color: number;
};

class ClothingShop extends Service {
	public standDimension: number;

	constructor() {
		const info = {
			name: 'Магазин одежды',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 73, color: 73 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.standDimension = 1000;
	}

	private getClothesOfGender(player: PlayerMp) {
		return player.isMale() ? male : female;
	}

	private getPrice(clothes: typeof male, type: string, index: number) {
		return clothes[type][index][1] as number;
	}

	private getItemForInventory(player: PlayerMp, clothes: typeof male, data: Product) {
		const { type: name, index, color } = data;
		const style: number = clothes[name][index][0];

		return {
			name,
			type: 'clothes',
			used: true,
			gender: player.gender,
			style,
			color
		};
	}

	async buyThing(player: PlayerMp, product: Product) {
		try {
			const { type: name } = product;

			const clothes = this.getClothesOfGender(player);
			const price = this.getPrice(clothes, name, product.index);

			await player.moneyHelper.different(price, 'clothes');

			const item = inventory.getItem(player.inventory, name);
			if (item) inventory.removeItem(player.inventory, item);

			const thing = this.getItemForInventory(player, clothes, product);
			await player.addToInventory(thing);
			playerClothes.set(player, name, thing);

			notifications.success(player, 'Успешная покупка');
		} catch (err) {
			return Promise.reject();
		}
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle || player.faction.working) return;

		player.dimension = ++this.standDimension;

		rpc.callClient(player, 'ClothingShop-ShowBuyerMenu', this.getClothesOfGender(player));
	}
}

const clothingShop = new ClothingShop();

mp.events.subscribe({
	'ClothingShop-SetItem': playerClothes.set,
	'ClothingShop-GetClothes': (player, type) => {
		const items = player.isMale() ? male : female;

		return items[type];
	},
	'ClothingShop-Buy': (player, data) => clothingShop.buyThing(player, data),
	'ClothingShop-CloseMenu': (player) => {
		player.dimension = 0;

		playerClothes.load(player);
	}
});
