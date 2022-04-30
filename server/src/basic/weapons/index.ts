import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import PlayerInventory from '../player/playerInventory';
import notifications from '../../helpers/notifications';
import './sync';

type WeaponTypes = 'handguns' | 'smgs' | 'rifles';

class Weapons {
	constructor() {
		mp.events.subscribe({
			'Weapons-SaveAmmo': this.saveAmmo.bind(this)
		});
	}

	giveWeapon(player: PlayerMp, type: WeaponTypes, name: string) {
		if (!player.isHasLicense('gun')) {
			return notifications.error(player, 'У вас нет лицензии на ношение оружия!');
		}

		this.hideCurrentWeapon(player);

		const hash = mp.joaat(`weapon_${name}`);
		const weaponType = type === 'smgs' ? 'handguns' : type;

		player.currentWeapon = name;

		rpc.callClient(player, 'giveWeapon', [
			hash.toString(),
			this.getAmmoCount(player, weaponType),
			type
		]);
	}

	hideCurrentWeapon(player: PlayerMp) {
		player.setWeaponAmmo(player.weapon, 0);
		player.removeAllWeapons();

		player.currentWeapon = null;

		rpc.callClient(player, 'takeOffWeapon');
	}

	removeWeapons(player: PlayerMp) {
		const weapons = player.inventory.filter((item) => item.type === 'weapons');
		const items = player.inventory.filter((item) => item.type !== 'weapons');

		this.hideCurrentWeapon(player);

		player.inventory = items;

		return weapons;
	}

	private getAmmoCount(player: PlayerMp, name: WeaponTypes) {
		const item = PlayerInventory.getItem(player.inventory, name);

		return item ? item.count : 0;
	}

	private async saveAmmo(player: PlayerMp, count: number, type: WeaponTypes) {
		const item = PlayerInventory.getItem(
			player.inventory,
			type === 'smgs' ? 'handguns' : type
		);

		if (item && isNumber(count)) item.count = count;
		if (item && !item.count) {
			PlayerInventory.removeItem(player.inventory, item);

			await PlayerInventory.updateInventoryInDb(player.dbId, player.inventory);
		}
	}
}

mp.events.addCommand({
	rpg: (player: PlayerMp) => {
		if (player.adminLvl < 3) return;

		player.giveWeapon(0xb1ca77b1, 100);
	},
	firework: (player: PlayerMp) => {
		if (player.adminLvl < 3) return;

		player.giveWeapon(0x7f7497e5, 100);
	}
});

export default new Weapons();
