import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Service from '../service';
import playerInventory from '../../basic/player/playerInventory';
import notifications from '../../helpers/notifications';

type Product = {
	type: string;
	need: {
		name: string;
		count: number;
	};
};

class Processing extends Service {
	private legal: boolean;

	private products: { [name: string]: Product };

	constructor(legal: boolean, serviceData: any, products: { [name: string]: Product }) {
		super(
			serviceData.name,
			serviceData.entities,
			serviceData.markerData,
			serviceData.blipData
		);

		this.legal = legal;
		this.products = products;

		mp.events.subscribe({
			[`Processing-GetProduct${legal ? 'Legal' : 'Illegal'}`]: this.getProduct.bind(this)
		});
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (this.legal && !player.isHasLicense('processing')) {
			return notifications.error(player, 'У вас нет лицензии на переработку!');
		}

		rpc.callClient(player, 'Processing-ShowMenu', [this.legal, this.products]);
	}

	private async getProduct(player: PlayerMp, name: string, count: any) {
		const product = this.products[name];

		if (!product) return;

		const item = playerInventory.getItem(player.inventory, product.need.name);
		const requiredAmount = parseInt(count, 10) * product.need.count;

		if (
			!isNumber(requiredAmount) ||
			requiredAmount <= 0 ||
			!item ||
			item.count < requiredAmount
		) {
			return notifications.error(player, 'Недостаточно ресурсов!');
		}

		await playerInventory.decItemCount(player, player.inventory, item, requiredAmount);
		await playerInventory.updateInventoryInDb(player.dbId, player.inventory);

		await player.addToInventory({ name, count, type: product.type });

		notifications.success(player, 'Операция успешна!');
	}
}

export default Processing;
