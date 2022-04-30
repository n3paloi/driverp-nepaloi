import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Service from './service';
import coords from '../data/services/weaponShops';
import notifications from '../helpers/notifications';

class WeaponShop extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'Магазин оружия',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 110, color: 75 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			melee: 5000,
			handguns: 40000,
			smgs: 60000,
			shotguns: 70000,
			rifles: 90000,
			ammo: {
				handguns: 10,
				rifles: 15,
				shotguns: 25
			}
		};
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle) return;

		rpc.callClient(player, 'WeaponShop-ShowBuyerMenu', this.prices);
	}

	getFinalPrice({ weapons, ammo }) {
		let finalPrice = 0;

		Object.keys(weapons).forEach((weapon) => {
			finalPrice += this.prices[weapons[weapon]];
		});

		const ammoCount = parseInt(ammo.count, 10);

		if (ammo.type && ammoCount > 0 && ammoCount < 100000) {
			finalPrice += this.prices.ammo[ammo.type] * ammoCount;
		}

		return finalPrice;
	}

	async buy(player: PlayerMp, basket: any) {
		try {
			if (!player.isHasLicense('gun')) {
				return notifications.error(player, 'У вас нет лицензии на ношение оружия!');
			}

			const cost = parseInt(this.getFinalPrice(basket), 10);

			if (!isNumber(cost) || cost < 0) return;

			await player.moneyHelper.different(cost, 'weapons');

			Object.keys(basket.weapons).forEach((weapon) => {
				player.addToInventory({
					type: 'weapons',
					name: weapon,
					count: 1,
					category: basket.weapons[weapon]
				});
			});

			const ammoCount = parseInt(basket.ammo.count, 10);

			if (basket.ammo.type && ammoCount > 0 && ammoCount < 100000) {
				player.addToInventory({
					name: basket.ammo.type,
					type: 'ammo',
					count: basket.ammo.count
				});
			}

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const weaponShop = new WeaponShop();

mp.events.subscribe({
	'WeaponShop-Buy': (player, data) => weaponShop.buy(player, data)
});
