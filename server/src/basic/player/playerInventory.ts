import * as rpc from 'rage-rpc';
import User from '../../models/User';
import Inventory from '../inventory';
import clothes from '../../character/clothes';
import Weapons from '../weapons';
import VehicleRepair from '../../services/vehicleRepair';
import GasStation from '../../services/gasStation';
import eatFood from '../../services/foodShop';
import IllegalMarket from '../../services/illegalMarket';
import { useMedicine } from '../../services/pharmacy';
import drinkAlcohol from '../../services/nightClub';
import animations from '../../utils/animations';
import notifications from '../../helpers/notifications';

class PlayerInventory extends Inventory {
	protected defaultInventory: any;

	private models: any;

	private slots: number;

	private bagSlots: number;

	constructor() {
		super('player');

		this.models = {
			food: 'ng_proc_food_bag01a',
			weapons: 'ex_prop_adv_case_sm_flash',
			ammo: 'prop_box_ammo07a',
			medication: 'prop_ld_health_pack',
			jerrycan: 'prop_jerrycan_01a',
			repairKit: 'v_ind_cs_toolbox2',
			lockPick: 'bkr_prop_jailer_keys_01a',
			weed: 'hei_prop_heist_weed_block_01b',
			pineapple: 'prop_pineapple',
			gold: 'prop_gold_bar',
			coral: 'prop_coral_02',
			orange: 'ng_proc_food_ornge1a',
			hats: 'prop_ld_hat_01',
			tops: 'prop_cs_tshirt_ball_01',
			underwears: 'prop_cs_tshirt_ball_01',
			legs: 'prop_ld_jeans_01',
			shoes: 'prop_ld_shoe_01',
			masks: 'p_trevor_prologe_bally_s',
			watches: 'p_watch_05',
			glasses: 'p_sunglass_m_s',
			jewerly: 'p_jewel_necklace01_s',
			bag: 'hei_p_f_bag_var20_arm_s',
			pickaxe: 'prop_tool_pickaxe',
			joint: 'p_amb_joint_01',
			alcohol: 'prop_wine_bot_01',
			sack: 'prop_cs_sack_01',
			rope: 'p_cs_para_ropebit_s',
			rod: 'prop_fishing_rod_01',
			fish: 'prop_tool_box_05',
			fish_bait: 'prop_coolbox_01'
		};

		this.slots = 80;
		this.bagSlots = 80;
	}

	async updateInventoryInDb(dbId: string, updInventory: any) {
		await User.findByIdAndUpdate(dbId, { $set: { inventory: updInventory } });
	}

	getMaxSlots(player: PlayerMp) {
		const bag = this.getItem(player.inventory, 'bag');

		return bag && bag.used ? this.slots + this.bagSlots : this.slots;
	}

	async clearInventory(player: PlayerMp) {
		const weapon = player.currentWeapon;
		const items = player.inventory.filter((item) => !(item.used && item.name === weapon));

		await User.findByIdAndUpdate(player.dbId, { $set: { inventory: items } });
		Weapons.hideCurrentWeapon(player);
		player.inventory = items;
	}

	async useItemByIndex(player: PlayerMp, index: number) {
		try {
			const item = this.getItemByIndex(player.inventory, index);

			if (!item) return;

			if (!item.used) {
				await this.useItem(player, item.type, item.name);
			} else await this.takeOffItem(player, item.type, item.name);
		} catch (err) {
			return 0;
		}
	}

	async useItem(player: PlayerMp, type: string, name: string) {
		const item = this.getItem(player.inventory, name);

		if (!item) return Promise.reject();

		switch (type) {
			case 'clothes':
				clothes.set(player, name, item as any);
				item.used = true;
				break;
			case 'weapons':
				if (player.currentWeapon) {
					notifications.error(player, 'Уберите текущее оружие из рук');
					return Promise.reject(new Error());
				}

				Weapons.giveWeapon(player, item.category, name);
				item.used = true;
				break;
			case 'food':
				eatFood(player, name);
				await this.decItemCount(player, player.inventory, item);
				break;
			case 'alcohol':
				drinkAlcohol(player, name);
				await this.decItemCount(player, player.inventory, item);
				break;
			case 'medication':
				useMedicine(player, name);
				await this.decItemCount(player, player.inventory, item);
				break;
			default:
				break;
		}

		if (name === 'repairKit') VehicleRepair.useRepairKit(player, item);
		else if (name === 'jerrycan') GasStation.useJerrycan(player, item);
		else if (name === 'lockPick') IllegalMarket.useLockPick(player, item);
		else if (name === 'joint') {
			this.useJoint(player);
			await this.decItemCount(player, player.inventory, item);
		}

		if ('count' in item && item.count <= 0) this.removeItem(player.inventory, item);

		if (type !== 'weapons') {
			await this.updateInventoryInDb(player.dbId, player.inventory);
		}

		return {
			items: player.inventory,
			currentWeapon: player.currentWeapon,
			maxSlots: this.getMaxSlots(player),
			occupiedSlots: this.getCurrentSlots(player.inventory)
		};
	}

	useJoint(player: PlayerMp) {
		const duration = 30 * 1000;

		animations.playScenario(player, 'WORLD_HUMAN_AA_SMOKE', 9000);

		player.call('startScreenEffect', ['DrugsDrivingIn', duration]);
	}

	async takeOffItem(player: any, type: string, name: string) {
		switch (type) {
			case 'clothes':
				if (name === 'bag' && this.getCurrentSlots(player.inventory) > this.slots) {
					notifications.error(player, 'Выложите предметы из сумки!');

					return Promise.reject();
				}

				clothes.hide(player, name);
				break;
			case 'weapons':
				Weapons.hideCurrentWeapon(player);
				break;
			default:
				break;
		}

		const item = this.getItem(player.inventory, name);

		if (item) item.used = false;

		if (type !== 'weapons' && item) {
			await this.updateInventoryInDb(player.dbId, player.inventory);
		}

		return {
			items: player.inventory,
			currentWeapon: player.currentWeapon,
			maxSlots: this.getMaxSlots(player)
		};
	}

	getModelObject(name: string, type: string) {
		return this.models[name] ? this.models[name] : this.models[type];
	}

	async dropItem(player: any, type: string, name: string, count: number) {
		try {
			if (player.vehicle || count <= 0) return Promise.reject();

			const { position } = player;
			let item = this.getItem(player.inventory, name);

			const model = this.getModelObject(name, type);

			await this.decItemCount(player, player.inventory, item, count);

			if (!item.temp) {
				await this.updateInventoryInDb(player.dbId, player.inventory);
			}

			item = { ...item, ...(item.count && { count }) };
			this.createObject(model, item, position, player.dimension);

			return {
				items: player.inventory,
				currentWeapon: player.currentWeapon,
				occupiedSlots: this.getCurrentSlots(player.inventory)
			};
		} catch (err) {
			return Promise.reject();
		}
	}

	async takeItem(player: PlayerMp, item: any, { shape, object, label }) {
		const itemShape: any = mp.colshapes.at(shape);

		if (!player.isEnoughSlots(item)) return;

		itemShape.thing.taked = true;

		await this.addItem(player, item);

		animations.playOnServer(player, 'pickup', 2000);

		mp.objects.at(object).destroy();
		mp.labels.at(label).destroy();
		mp.colshapes.at(shape).destroy();
	}

	addItem(player: any, item: any) {
		return new Promise(async (resolve, reject) => {
			if (!player.isEnoughSlots(item)) return reject();

			const thing = this.getItem(player.inventory, item.name);

			if (thing && thing.hasOwnProperty('count')) thing.count += item.count;
			else if (thing) {
				notifications.error(player, 'Вы можете хранить только один предмет данного типа');
				reject();
			} else player.inventory.push(item);

			if (!item.temp) {
				await this.updateInventoryInDb(player.dbId, player.inventory);
			}

			resolve();
		});
	}

	createObject(model: any, item: any, { x, y, z }, dimension: number) {
		const object = mp.objects.new(model, new mp.Vector3(x, y, z - 0.9), {
			dimension,
			rotation: new mp.Vector3(0, 0, 0),
			alpha: 255
		});

		const label = mp.labels.new('F2', new mp.Vector3(x, y, z - 0.2), {
			dimension,
			los: true,
			font: 2,
			drawDistance: 2,
			color: [255, 255, 255, 255]
		});

		const shape = mp.colshapes.newSphere(x, y, z, 1);
		shape.dimension = dimension;

		shape.thing = {
			item,
			taked: false,
			obj: {
				shape: shape.id,
				object: object.id,
				label: label.id
			}
		};
	}

	showInventoryMenu(player: PlayerMp) {
		if (player.cuff) return;

		rpc.callClient(player, 'Inventory-ShowMenu', [
			player.inventory,
			this.getCurrentSlots(player.inventory),
			this.getMaxSlots(player),
			player.currentWeapon
		]);
	}

	showDoubleMenu(player: PlayerMp, player2: PlayerMp) {
		player.nearestPlayer = player2;

		rpc.callClient(player, 'Inventory-ShowDoubleMenu', [
			player.inventory,
			player2.inventory,
			this.getCurrentSlots(player.inventory),
			this.getMaxSlots(player),
			this.getCurrentSlots(player2.inventory),
			this.getMaxSlots(player2),
			this.name
		]);
	}
}

const inventory = new PlayerInventory();

mp.events.subscribe({
	'Inventory-Use': (player, type, name) => inventory.useItem(player, type, name),
	'Inventory-TakeOff': (player, type, name) => inventory.takeOffItem(player, type, name),
	'Inventory-Drop': (player, type, name, count) =>
		inventory.dropItem(player, type, name, count),
	'Inventory-UseItemByIndex': (player, index) => inventory.useItemByIndex(player, index),
	'Player-MoveInventoryItem': (player, from, name, count) => {
		if (!player.nearestPlayer || !mp.players.exists(player.nearestPlayer)) return;

		const { nearestPlayer } = player;

		return inventory.moveItem(
			player,
			{ dbId: nearestPlayer.dbId, items: nearestPlayer.inventory },
			from,
			name,
			count
		);
	},
	'Player-SwapInventoryItems': (player: PlayerMp, picked: number, target: number) => {
		inventory.swapItems(player.inventory, picked, target);
	}
});
mp.events.subscribeToDefault({
	'Keys-I': (player) => inventory.showInventoryMenu(player),
	'Keys-F2': (player) => {
		if (!player.canAction.thing) return;

		const { item, obj, taked } = player.canAction.thing;

		if (!taked) {
			player.canAction.thing = false;
			inventory.takeItem(player, item, obj);
		}
	},
	playerEnterColshape: (player, shape) => {
		if (!player.loggedIn) return;

		if (shape.thing && !shape.thing.taked) {
			player.canAction.thing = shape.thing;
		}
	},
	playerExitColshape: (player, shape) => {
		if (!player.loggedIn) return;

		if (shape.thing && !shape.thing.taked) {
			player.canAction.thing = false;
		}
	}
});

export default inventory;
