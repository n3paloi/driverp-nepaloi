import * as rpc from 'rage-rpc';
import House from '../../models/House';
import Inventory from '../../basic/inventory';
import PlayerInventory from '../../basic/player/playerInventory';
import colshapes from '../../helpers/colshapes';
import houseProperty from './index';
import notifications from '../../helpers/notifications';
import gangs from '../../gangs';

class HouseInventory extends Inventory {
	constructor() {
		super('house');

		mp.events.subscribe({
			'House-MoveInventoryItem': this.moveInventoryItem.bind(this),
			'House-SwapInventoryItems': this.swapInventoryItems.bind(this)
		});
	}

	async updateInventoryInDb(dbId: string, updInventory: any) {
		await House.findByIdAndUpdate(dbId, { $set: { inventory: updInventory } });
	}

	getMaxSlots(player: PlayerMp) {
		return houseProperty.getInventorySlots(player);
	}

	private showMenu(player: PlayerMp, data: any) {
		if (
			!houseProperty.hasOwner(player) ||
			(houseProperty.isGangProperty(player) && !gangs.hasPremission(player, 'inventory'))
		)
			return notifications.error(player, 'Нет доступа');

		player.canOpen.houseInventory = data;

		rpc.callClient(player, 'Inventory-ShowDoubleMenu', [
			player.inventory,
			data.inventory,
			this.getCurrentSlots(player.inventory),
			PlayerInventory.getMaxSlots(player),
			this.getCurrentSlots(data.inventory),
			this.getMaxSlots(player),
			this.name
		]);
	}

	private enteredMainShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ для открытия меню');
	}

	create(position: PositionEx, data: any) {
		const { x, y, z, dimension } = position;

		colshapes.create(
			position,
			0.75,
			{
				onEnter: this.enteredMainShape.bind(this),
				onKeyPress: this.showMenu.bind(this),
				keyName: 'E'
			},
			data
		);

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			dimension,
			color: [255, 219, 0, 100],
			visible: true
		});
	}

	private moveInventoryItem(player: PlayerMp, from: string, name: string, count: number) {
		const { dbId, inventory } = player.canOpen.houseInventory;

		return this.moveItem(player, { dbId, items: inventory }, from, name, count);
	}

	private swapInventoryItems(player: PlayerMp, picked: number, target: number) {
		const { inventory } = player.canOpen.houseInventory;

		return this.swapItems(inventory, picked, target);
	}
}

export default new HouseInventory();
