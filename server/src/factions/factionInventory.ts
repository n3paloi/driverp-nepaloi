import * as rpc from 'rage-rpc';
import FactionModel from '../models/Faction';
import Inventory from '../basic/inventory';
import PlayerInventory from '../basic/player/playerInventory';
import notifications from '../helpers/notifications';

const inventories = {};

export default class FactionInventory extends Inventory {
	public factionName: string;

	public inventory: any;

	public dbId: ObjectId;

	protected inventoryCoords: { x: number; y: number; z: number };

	protected marker: MarkerMp;

	private slots: number;

	constructor(data) {
		super('faction');

		this.dbId = data.dbId;
		this.factionName = data.name;
		this.inventory = data.inventory;
		this.inventoryCoords = data.inventoryCoords;

		this.slots = 50000;

		this.createInventory();

		inventories[data.name] = this;
	}

	createInventory() {
		const { x, y, z } = this.inventoryCoords;

		const shape: any = mp.colshapes.newSphere(x, y, z, 1);
		shape.factionInventory = this.factionName;

		this.marker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [0, 72, 186, 85],
			visible: false
		});
	}

	updateMarkerVisible(player: PlayerMp) {
		if (player.faction.name) this.marker.showFor(player);
		else this.marker.hideFor(player);
	}

	async updateInventoryInDb(dbId: string, updInventory: any) {
		await FactionModel.findByIdAndUpdate(dbId, { $set: { inventory: updInventory } });
	}

	getMaxSlots() {
		return this.slots;
	}

	showInventoryMenu(player: PlayerMp) {
		if (player.faction.rank < 5) {
			return notifications.error(player, 'У вас недостаточно полномочий');
		}

		rpc.callClient(player, 'Inventory-ShowDoubleMenu', [
			player.inventory,
			this.inventory,
			this.getCurrentSlots(player.inventory),
			PlayerInventory.getMaxSlots(player),
			this.getCurrentSlots(this.inventory),
			this.getMaxSlots(),
			this.name
		]);
	}
}

export function updateInventoryMarker(player: PlayerMp, faction: string) {
	const inventory = inventories[faction];

	if (inventory) inventory.updateMarkerVisible(player);
}

mp.events.subscribeToDefault({
	playerEnterColshape: (player, shape) => {
		if (!player.loggedIn || !shape.factionInventory) return;

		const inventory = inventories[shape.factionInventory];

		if (player.faction.name === inventory.factionName && player.faction.working) {
			player.canOpen.factionInventory = inventory.factionName;

			notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
		}
	},

	playerExitColshape: (player, shape) => {
		if (!player.loggedIn || !shape.factionInventory) return;

		const inventory = inventories[shape.factionInventory];

		if (player.faction.name === inventory.factionName) {
			player.canOpen.factionInventory = false;
		}
	},

	'Keys-E': (player) => {
		if (player.canOpen.factionInventory) {
			const inventory = inventories[player.canOpen.factionInventory];

			inventory.showInventoryMenu(player);
		}
	}
});

mp.events.subscribe({
	'Faction-MoveInventoryItem': (player, from, name, count) => {
		if (!player.canOpen.factionInventory) return;

		const storage = inventories[player.canOpen.factionInventory];

		return storage.moveItem(
			player,
			{ dbId: storage.dbId, items: storage.inventory },
			from,
			name,
			count
		);
	},
	'Faction-SwapInventoryItems': (player: PlayerMp, picked: number, target: number) => {
		if (!player.canOpen.factionInventory) return;

		const storage = inventories[player.canOpen.factionInventory];

		storage.swapItems(storage.inventory, picked, target);
	}
});