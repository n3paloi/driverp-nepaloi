import blips from '../../helpers/blips';
import User from '../../models/User';
import spawn from '../../data/spawn';

class PlayerEvents {
	constructor() {
		mp.events.add('playerJoin', this.onJoin);
		mp.events.add('playerQuit', this.onLeave);

		mp.events.subscribe({
			playerCreateWaypoint: this.onSetWaypoint
		});
	}

	private onSetWaypoint(player: PlayerMp, position: PositionEx) {
		if (!position) return;

		const { vehicle } = player;
		player.waypoint = position;

		const driver = vehicle && vehicle.getOccupant(-1);
		if (driver && driver?.id !== player.id) blips.createWaypoint(driver, position);
	}

	private onJoin(player: PlayerMp) {
		player.loggedIn = false;
		player.dimension = 1000 + player.id;
		player.spawn(new mp.Vector3(34.58, 856.84, 197.76));
	}

	private async onLeave(player: PlayerMp) {
		clearTimeout(player.deathTimeout);

		await User.findByIdAndUpdate(player.dbId, {
			$set: {
				playedTime: player.playedTime,
				paydayTime: player.paydayTime,
				position:
					player.dimension > 0
						? spawn
						: { ...player.position, dimension: player.dimension },
				health: player.getVariable('isDying') ? 0 : player.health,
				hunger: player.hunger,
				inventory: player.inventory,
				exitAt: Date.now()
			}
		});
	}
}

const events = new PlayerEvents();
