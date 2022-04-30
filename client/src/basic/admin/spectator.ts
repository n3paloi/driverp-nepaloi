const player = mp.players.local;

class AdminSpectator {
	private target: EntityMp;

	constructor() {
		mp.events.subscribe({ 'Admin-Spectate': this.toggle.bind(this) });
	}

	private toggle(target?: PlayerMp) {
		player.freezePosition(!!target);

		if (mp.players.exists(target) && target.handle !== player.handle) {
			this.target = target;

			player.attachTo(
				target.handle,
				-1,
				-1.5,
				-1.5,
				2,
				0,
				0,
				0,
				true,
				false,
				false,
				false,
				0,
				false
			);
		} else {
			this.target = null;

			player.detach(true, true);
		}
	}
}

const spectator = new AdminSpectator();
