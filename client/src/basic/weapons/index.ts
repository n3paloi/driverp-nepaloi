import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import greenZone from '../green-zone';
import hud from '../hud';
import './sync';

const player = mp.players.local;

class Weapons {
	private weaponType: string;

	private weapon: number;

	private ammo: number;

	private requestAmmo: boolean;

	private ammoInterval: NodeJS.Timeout;

	constructor() {
		this.weaponType = null;
		this.weapon = 0;
		this.ammo = 0;

		this.requestAmmo = false;

		this.subscribeToEvents();
	}

	get currentWeapon() {
		return this.weapon;
	}

	get currentAmmo() {
		return this.ammo;
	}

	private setWeapon(hash: string, ammo: number, type: string) {
		this.weapon = parseInt(hash, 10);
		this.ammo = ammo;
		this.weaponType = type;

		this.requestAmmo = true;

		player.giveWeapon(this.weapon, this.ammo, true);
		player.setAmmoInClip(this.weapon, this.ammo);

		hud.showAmmo(ammo);

		this.runInterval();
	}

	private removeWeapon() {
		this.weaponType = null;
		this.weapon = 0;
		this.ammo = 0;

		mp.game.invoke('0xADF692B254977C0C', player.handle, -1569615261, true);
		hud.showAmmo(this.ammo);

		this.stopInterval();
	}

	private onShot() {
		if (this.weaponType === 'melee') return;

		if (this.ammo > 0) this.ammo--;

		hud.showAmmo(this.ammo);

		this.requestAmmo = false;
	}

	private runInterval() {
		if (!this.weapon || this.weaponType === 'melee') return;

		this.ammoInterval = setInterval(() => {
			if (this.requestAmmo || !isNumber(this.ammo)) return;

			rpc.callServer('Weapons-SaveAmmo', [this.ammo, this.weaponType]);

			this.requestAmmo = true;
		}, 1000);
	}

	private stopInterval() {
		if (!this.ammoInterval) return;

		clearInterval(this.ammoInterval);

		this.ammoInterval = null;
	}

	private disableControls() {
		mp.game.controls.disableControlAction(2, 12, true);
		mp.game.controls.disableControlAction(2, 13, true);
		mp.game.controls.disableControlAction(2, 14, true);
		mp.game.controls.disableControlAction(2, 15, true);
		mp.game.controls.disableControlAction(2, 16, true);
		mp.game.controls.disableControlAction(2, 17, true);
		mp.game.controls.disableControlAction(2, 37, true);
		mp.game.controls.disableControlAction(2, 69, true);
		mp.game.controls.disableControlAction(2, 99, true);
		mp.game.controls.disableControlAction(2, 100, true);
		mp.game.controls.disableControlAction(2, 157, true);
		mp.game.controls.disableControlAction(2, 158, true);
		mp.game.controls.disableControlAction(2, 159, true);
		mp.game.controls.disableControlAction(2, 160, true);
		mp.game.controls.disableControlAction(2, 161, true);
		mp.game.controls.disableControlAction(2, 162, true);
		mp.game.controls.disableControlAction(2, 163, true);
		mp.game.controls.disableControlAction(2, 164, true);
		mp.game.controls.disableControlAction(2, 165, true);
		mp.game.controls.disableControlAction(2, 261, true);
		mp.game.controls.disableControlAction(2, 262, true);

		if (this.weaponType === 'melee') {
			mp.game.controls.disableControlAction(2, 140, true);
			mp.game.controls.disableControlAction(2, 141, true);
			mp.game.controls.disableControlAction(2, 143, true);
			mp.game.controls.disableControlAction(2, 263, true);
		}

		if (greenZone.playerWithin) {
			const faction = player.getVariable('faction');
			if (faction?.government && faction.working) return;

			mp.game.controls.disableControlAction(2, 24, true);
			mp.game.controls.disableControlAction(2, 69, true);
			mp.game.controls.disableControlAction(2, 92, true);
			mp.game.controls.disableControlAction(2, 114, true);
			mp.game.controls.disableControlAction(2, 140, true);
			mp.game.controls.disableControlAction(2, 141, true);
			mp.game.controls.disableControlAction(2, 142, true);
			mp.game.controls.disableControlAction(2, 257, true);
			mp.game.controls.disableControlAction(2, 263, true);
			mp.game.controls.disableControlAction(2, 264, true);
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			render: this.disableControls.bind(this),
			playerWeaponShot: this.onShot.bind(this)
		});

		mp.events.subscribe({
			giveWeapon: this.setWeapon.bind(this),
			takeOffWeapon: this.removeWeapon.bind(this),
			getCurrentAmmo: () => this.currentAmmo
		});
	}
}

export default new Weapons();
