import rpc from 'rage-rpc';
import browser from '../utils/browser';

class Inventory {
	private menu = false;

	constructor() {
		mp.events.subscribe({
			'Inventory-ShowMenu': this.showSingleMenu.bind(this),
			'Inventory-ShowDoubleMenu': this.showDoubleMenu.bind(this),
			'Inventory-CloseMenu': this.closeMenu.bind(this)
		});

		this.bindKeys();
	}

	private showSingleMenu(items, occupiedSlots, maxSlots, weapon) {
		browser.showPage('inventory', {
			gender: mp.players.local.isMale() ? 'male' : 'female',
			currentWeapon: weapon,
			items,
			occupiedSlots,
			maxSlots
		});

		this.menu = true;
	}

	private showDoubleMenu(
		items,
		storageItems,
		occupiedSlots,
		maxSlots,
		occupiedStorageSlots,
		maxStorageSlots,
		storageName
	) {
		browser.showPage('inventory/double', {
			slots: {
				occupied: occupiedSlots,
				max: maxSlots
			},
			storageSlots: {
				occupied: occupiedStorageSlots,
				max: maxStorageSlots
			},
			items,
			storageItems,
			storageName
		});

		this.menu = true;
	}

	private closeMenu() {
		if (this.menu) {
			browser.hidePage();

			this.menu = false;
		}
	}

	private useFastItem(index: number) {
		if (mp.gui.cursor.visible) return;

		rpc.callServer('Inventory-UseItemByIndex', index);
	}

	private bindKeys() {
		for (let index = 0; index < 4; index++) {
			mp.keys.bind(49 + index, false, this.useFastItem.bind(this, index));
		}

		mp.keys.bind(73, false, this.closeMenu.bind(this));
	}
}

const inventory = new Inventory();
