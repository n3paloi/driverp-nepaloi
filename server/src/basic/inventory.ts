import User from '../models/User';
import notifications from '../helpers/notifications';

export type InventoryData = {
	items: InventoryItem[];
	dbId: string;
};

export default class Inventory {
	public name: string;

	protected thingSlots: { [name: string]: number };

	constructor(name: string) {
		this.name = name;

		this.thingSlots = {
			food: 2,
			fish: 1,
			rod: 1,
			fish_bait: 1,
			weapons: 6,
			jerrycan: 2,
			repairKit: 2,
			medication: 1,
			lockPick: 1,
			ammo: 1,
			resources: 1,
			pineapple: 2,
			gold: 10,
			pickaxe: 4
		};
	}

	getItem(inventory: InventoryItem[], name: string) {
		const item = inventory.find((thing) => thing.name === name);

		return item;
	}

	getItemByIndex(inventory: InventoryItem[], index: number) {
		return inventory[index];
	}

	removeItem(inventory: InventoryItem[], item: InventoryItem) {
		const index = inventory.findIndex((thing) => thing === item);

		inventory.splice(index, 1);
	}

	getCurrentSlots(inventory: InventoryItem[]) {
		let slots = 0;

		inventory.forEach((thing) => {
			if (this.thingSlots[thing.name]) {
				slots += this.thingSlots[thing.name] * thing.count;
			} else if (this.thingSlots[thing.type]) {
				slots += this.thingSlots[thing.type] * thing.count;
			}
		});

		return slots;
	}

	getMaxSlots(player?: PlayerMp) {}

	isEnoughSlots(
		player: PlayerMp,
		inventory: InventoryItem[],
		thing: InventoryItem,
		count: number
	) {
		const currentSlots = this.getCurrentSlots(inventory);
		const maxSlots: any = this.getMaxSlots(player);
		const freeSlots = maxSlots - currentSlots;

		let slots: number;

		if (this.thingSlots[thing.name]) {
			slots = this.thingSlots[thing.name] * count;
		} else if (this.thingSlots[thing.type]) {
			slots = this.thingSlots[thing.type] * count;
		}

		if (freeSlots < slots) {
			notifications.error(player, 'Недостаточно места в инвентаре!');
			return false;
		}

		return true;
	}

	isEnoughSlotsForItems(
		player: PlayerMp,
		inventory: InventoryItem[],
		items: InventoryItem[]
	) {
		const currentSlots = this.getCurrentSlots(inventory);
		const maxSlots: any = this.getMaxSlots(player);
		const freeSlots = maxSlots - currentSlots;

		return freeSlots >= this.getCurrentSlots(items);
	}

	async updateInventoryInDb(dbId: string, inventory: InventoryItem[]) {}

	decItemCount(
		player: PlayerMp,
		inventory: InventoryItem[],
		item: InventoryItem,
		count = 1
	) {
		return new Promise((resolve, reject) => {
			if (item.type === 'ammo' && player.currentWeapon) {
				notifications.error(player, 'Уберите из рук оружие');

				return reject();
			}

			if (item.count < count || count <= 0) return reject();

			if (item.hasOwnProperty('count') && item.count > count) item.count -= count;
			else this.removeItem(inventory, item);

			resolve();
		});
	}

	addItem(player: PlayerMp, inventory: InventoryData, item: InventoryItem) {
		return new Promise(async (resolve, reject) => {
			const thing = this.getItem(inventory.items, item.name);

			if (thing && thing.hasOwnProperty('count')) thing.count += item.count;
			else if (thing) {
				notifications.error(player, 'Вы можете хранить только один предмет данного типа');

				return reject();
			} else inventory.items.push(item);

			if (!item.temp) {
				await this.updateInventoryInDb(inventory.dbId, inventory.items);
			}

			resolve();
		});
	}

	async swapItems(inventory: InventoryItem[], picked: number, target: number) {
		const pickedItem = this.getItemByIndex(inventory, picked);
		const targetItem = this.getItemByIndex(inventory, target);

		if (!pickedItem || !targetItem) throw new Error('item for swap does not exists');

		[inventory[picked], inventory[target]] = [inventory[target], inventory[picked]];
	}

	async moveItem(
		player: PlayerMp,
		inventory: InventoryData,
		from: string,
		name: string,
		count: number
	) {
		try {
			if (count < 0) return Promise.reject();

			if (from !== 'default') {
				let item = this.getItem(inventory.items, name);

				if (item.used || !player.isEnoughSlots({ ...item, ...(item.count && { count }) }))
					return Promise.reject();

				await this.decItemCount(player, inventory.items, item, count);
				await this.updateInventoryInDb(inventory.dbId, inventory.items);

				item = { ...item, ...(item.count && { count }) };

				await player.addToInventory(item);
			} else {
				let item = this.getItem(player.inventory, name);

				if (item.used || !this.isEnoughSlots(player, inventory.items, item, count))
					return Promise.reject();

				await this.decItemCount(player, player.inventory, item, count);
				await User.findByIdAndUpdate(player.dbId, {
					$set: { inventory: player.inventory }
				});

				item = { ...item, ...(item.count && { count }) };

				await this.addItem(player, inventory, item);
			}

			return {
				items: player.inventory,
				storageItems: inventory.items,
				occupiedSlots: this.getCurrentSlots(player.inventory),
				occupiedStorageSlots: this.getCurrentSlots(inventory.items)
			};
		} catch (err) {
			return Promise.reject();
		}
	}
}
