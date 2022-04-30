import prison from '../prison';

const damageMultiplier = {
	head: 2,
	neck: 1.5,
	torso: 1,
	pelvis: 1,
	leftArm: 1,
	rightArm: 1,
	leftLeg: 1,
	rightLeg: 1
};

const weaponsDamage = {
	pistol: 10,
	combatpistol: 15,
	pistol50: 25,
	snspistol: 15,
	heavypistol: 25,
	vintagepistol: 30,
	revolver: 50,
	doubleaction: 40,
	microsmg: 12,
	smg: 20,
	assaultsmg: 20,
	machinepistol: 12,
	minismg: 12,
	pumpshotgun: 25,
	sawnoffshotgun: 35,
	assaultshotgun: 30,
	musket: 50,
	heavyshotgun: 35,
	dbshotgun: 45,
	assaultrifle: 20,
	carbinerifle: 15,
	advancedrifle: 25,
	specialcarbine: 20,
	bullpuprifle: 25,
	compactrifle: 20
};

class WeaponSync {
	constructor() {
		mp.events.subscribe({
			playerWeaponShot: this.onWeaponShot.bind(this)
		});
	}

	private getDamage(weapon: string, bodyPart: string) {
		return Math.round(weaponsDamage[weapon] * damageMultiplier[bodyPart]);
	}

	private onWeaponShot(player: PlayerMp, target: PlayerMp, bodyPart: string) {
		if (
			!player.currentWeapon ||
			!weaponsDamage[player.currentWeapon] ||
			target.getVariable('AGM')
		)
			return;

		const { armour } = target;
		let damage = this.getDamage(player.currentWeapon, bodyPart);

		if (armour >= damage) {
			target.armour -= damage;
		} else {
			damage -= armour;

			target.armour = 0;
			target.health -= damage;
		}

		if (target.health <= 0) prison.onPlayerKnock(target, player);
	}
}

const sync = new WeaponSync();
