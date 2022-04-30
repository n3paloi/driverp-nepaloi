import * as rpc from 'rage-rpc';
import Police from '.';
import animations from '../../utils/animations';
import notifications from '../../helpers/notifications';

class WeaponsOrder {
	public name: string;

	public weaponsBox: any;

	private prices: any;

	private mainEntityCoord: { x: number; y: number; z: number };

	private deliveryCoord: { x: number; y: number; z: number };

	private orderTimeout: number;

	private mainMarker: MarkerMp;

	constructor() {
		this.name = 'Полиция';

		this.prices = {
			melee: 3000,
			handguns: 14000,
			smgs: 20000,
			shotguns: 27000,
			rifles: 34000,
			ammo: {
				handguns: 10,
				rifles: 15,
				shotguns: 50
			}
		};

		this.mainEntityCoord = {
			x: 483.85321044921875,
			y: -998.1717529296875,
			z: 30.689802169799805
		};
		this.deliveryCoord = { x: -1821.449, y: 3129.922, z: 32.81 };

		this.orderTimeout = 5;

		this.createMainShape();
	}

	updateMainMarker(player: PlayerMp, faction: string) {
		if (player.faction.name === faction) this.mainMarker.showFor(player);
		else this.mainMarker.hideFor(player);
	}

	createMainShape() {
		const { x, y, z } = this.mainEntityCoord;

		const shape: any = mp.colshapes.newSphere(x, y, z, 0.75);
		shape.weaponsOrder = this.name;

		this.mainMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [83, 119, 83, 170],
			visible: true
		});
	}

	openMenu(player: PlayerMp) {
		if (!player.faction.working) {
			return notifications.error(player, 'Переоденьтесь во фракционную одежду');
		}

		if (player.faction.rank < 10) {
			return notifications.error(player, 'У вас недостаточно полномочий');
		}

		rpc.callClient(player, 'Police-ShowWeaponsMenu', this.prices);
	}

	getFinalPrice({ weapons, ammo }) {
		let finalPrice = 0;

		Object.keys(weapons).forEach((weapon) => {
			finalPrice += this.prices[weapons[weapon]];
		});

		Object.keys(ammo).forEach((name) => {
			if (ammo[name] <= 0) return;

			finalPrice += this.prices.ammo[name] * ammo[name];
		});

		return finalPrice;
	}

	spawnWeaponsBox(weapons: any) {
		const { x, y, z } = this.deliveryCoord;

		this.weaponsBox = mp.colshapes.newSphere(x, y, z, 2);
		this.weaponsBox.loot = weapons;

		this.weaponsBox.object = mp.objects.new(
			'prop_box_wood02a_mws',
			new mp.Vector3(x, y, z - 1),
			{
				rotation: new mp.Vector3(0, 0, 0),
				alpha: 255,
				dimension: 0
			}
		);

		Police.implementForMembers((member) => {
			member.call('createBlip', [556, 'Товар', 25, this.deliveryCoord]);

			notifications.info(member, 'Товар прибыл, местоположение отмечено на карте');
		});
	}

	removeWeaponsBox() {
		this.weaponsBox.object.destroy();
		this.weaponsBox.destroy();

		this.weaponsBox = null;

		Police.implementForMembers((member) => member.call('removeBlip', ['Товар']));
	}

	async order(player: PlayerMp, data: any) {
		try {
			if (this.weaponsBox) return Promise.reject();

			const cost = this.getFinalPrice(data);
			await player.moneyHelper.different(cost, 'police weapons');

			setTimeout(() => this.spawnWeaponsBox(data), this.orderTimeout * 60 * 1000);

			notifications.info(
				player,
				`Ожидайте прибытие товара (примерно ${this.orderTimeout} мин)`
			);
		} catch (err) {
			return Promise.reject();
		}
	}

	getLootFromWeaponsBox(player: PlayerMp) {
		if (!this.weaponsBox) return;

		const { loot } = this.weaponsBox;

		animations.playOnServer(player, 'pickup', 2000);

		Object.keys(loot.weapons).forEach((weapon) => {
			player.addToInventory({
				type: 'weapons',
				name: weapon,
				count: 1,
				category: loot.weapons[weapon]
			});
		});

		Object.keys(loot.ammo).forEach((name) => {
			player.addToInventory({ name, type: 'ammo', count: loot.ammo[name] });
		});

		this.removeWeaponsBox();
	}
}

const weaponsOrder = new WeaponsOrder();

mp.events.subscribe({
	'Police-OrderWeapons': (player, data) => weaponsOrder.order(player, data)
});
mp.events.subscribeToDefault({
	playerEnterColshape: (player, shape) => {
		if (!player.loggedIn) return;

		if (shape.weaponsOrder && shape.weaponsOrder === player.faction.name) {
			player.canOpen.weaponsOrder = shape.weaponsOrder;

			notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы откыть меню');
		}

		if (shape === weaponsOrder.weaponsBox && player.faction.name) {
			player.canOpen.weaponsBox = weaponsOrder.name;

			notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы обыскать ящик');
		}
	},
	playerExitColshape: (player, shape) => {
		if (!player.loggedIn) return;

		if (shape.weaponsOrder) player.canOpen.weaponsOrder = false;
		if (shape === weaponsOrder.weaponsBox && player.faction.name) {
			player.canOpen.weaponsBox = false;
		}
	},
	'Keys-E': (player) => {
		if (player.canOpen.weaponsOrder === weaponsOrder.name) weaponsOrder.openMenu(player);
		if (player.canOpen.weaponsBox === weaponsOrder.name)
			weaponsOrder.getLootFromWeaponsBox(player);
	}
});

export default weaponsOrder;
