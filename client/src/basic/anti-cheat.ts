import * as rpc from 'rage-rpc';
import weapons from './weapons';

const player = mp.players.local;
const prisonPosition = new mp.Vector3(1726.036, 2647.47, 45.565);

function getDistanceBetweenCoords(pos1: Vector3Mp, pos2: Vector3Mp) {
	return mp.game.system.vdist(pos1.x, pos1.y, pos1.z, pos2.x, pos2.y, pos2.z);
}

class AntiCheat {
	private interval?: NodeJS.Timeout;

	constructor() {
		this.init();
	}

	private isEscapeFromPrison() {
		return (
			player.getVariable('insideJail') &&
			getDistanceBetweenCoords(player.position, prisonPosition) > 120
		);
	}

	private isInvisible() {
		return player.alpha < 200;
	}

	private hasWrongWeapon() {
		const hash = player.weapon;

		return hash !== 2725352035 && hash !== 966099553 && player.weapon !== weapons.weapon;
	}

	// private isTeleported() {
	// 	const position = waypoint.previousPosition;
	// 	const { x, y, z } = this.lastPosition;
	// 	mp.console(
	// 		`${JSON.stringify(position)}, ${JSON.stringify(
	// 			this.lastPosition
	// 		)}, ${mp.game.system.vdist(position.x, position.y, position.z, x, y, z)}, teleport`
	// 	);
	// 	return mp.game.system.vdist(position.x, position.y, position.z, x, y, z) < 5;
	// }

	private check() {
		if (player.getVariable('adminLvl')) return clearInterval(this.interval);

		if (this.isEscapeFromPrison()) return rpc.callServer('Player-Kick');

		if (this.isInvisible() || this.hasWrongWeapon()) {
			rpc.callServer('Admin-NotifyAll', `Читер: ${player.getVariable('realName')}`);
		}
	}

	private init() {
		this.interval = setInterval(() => this.check(), 1000);
	}
}

const anticheat = new AntiCheat();
