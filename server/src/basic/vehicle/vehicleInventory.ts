import * as rpc from 'rage-rpc';
import VehicleModel from '../../models/Vehicle';
import Inventory from '../inventory';
import PlayerInventory from '../player/playerInventory';
import { getNearestVehicleInRange } from '../../utils/vehicles';
import notifications from '../../helpers/notifications';
import vehicleManager from './index';
import vehicleState from './state';

class VehicleInventory extends Inventory {
	async updateInventoryInDb(dbId: string, updInventory: any) {
		await VehicleModel.findByIdAndUpdate(dbId, { $set: { inventory: updInventory } });
	}

	getMaxSlots(player: PlayerMp) {
		return player.nearestVehicle.slots;
	}

	showInventoryMenu(player: PlayerMp) {
		const vehicle = getNearestVehicleInRange(player.position, 3);

		if (player.vehicle || !vehicle) return;

		if (
			!vehicleManager.isOwner(vehicle, player) &&
			!vehicleManager.isOwner(vehicle, player, true) &&
			!vehicleState.get(vehicle).trunk
		) {
			return notifications.error(player, 'Багажник закрыт!');
		}

		player.nearestVehicle = vehicle;

		rpc.callClient(player, 'Inventory-ShowDoubleMenu', [
			player.inventory,
			vehicle.inventory,
			this.getCurrentSlots(player.inventory),
			PlayerInventory.getMaxSlots(player),
			this.getCurrentSlots(vehicle.inventory),
			this.getMaxSlots(player),
			this.name
		]);
	}
}

const vehicleInventory = new VehicleInventory('vehicle');

mp.events.subscribe({
	'Vehicle-MoveInventoryItem': (player, from, name, count) => {
		if (
			!player.nearestVehicle ||
			!mp.players.exists(player.nearestVehicle) ||
			player.nearestVehicle.dist(player.position) > 3
		)
			return;

		const { nearestVehicle: vehicle } = player;

		return vehicleInventory.moveItem(
			player,
			{ dbId: vehicle.dbId, items: vehicle.inventory },
			from,
			name,
			count
		);
	},
	'Vehicle-SwapInventoryItems': (player: PlayerMp, picked: number, target: number) => {
		if (
			!player.nearestVehicle ||
			!mp.players.exists(player.nearestVehicle) ||
			player.nearestVehicle.dist(player.position) > 3
		)
			return;

		const { nearestVehicle: vehicle } = player;

		vehicleInventory.swapItems(vehicle.inventory, picked, target);
	},
	'Inventory-CloseMenu': (player) => {
		player.nearestVehicle = null;
		player.nearestPlayer = null;
	}
});
mp.events.subscribeToDefault({
	'Keys-Y': (player) => vehicleInventory.showInventoryMenu(player)
});

export default vehicleInventory;
