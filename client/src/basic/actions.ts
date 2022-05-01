import * as rpc from 'rage-rpc';
import objects from '../configs/action-objects';

const localPlayer = mp.players.local;

class Actions {
	private active = false;

	constructor() {
		this.createObjects();
		this.subscribeToEvents();
	}

	get isActive() {
		return this.active;
	}

	private start(player: PlayerMp, object: typeof objects[0]) {
		if (this.active && localPlayer === player) return;

		const { position, heading, anim } = object;

		player.freezePosition(true);
		player.setCollision(false, true);
		player.setHeading(heading);
		player.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);

		mp.game.streaming.requestAnimDict(anim[0] as string);

		while (!mp.game.streaming.hasAnimDictLoaded(anim[0] as string)) {
			mp.game.wait(0);
		}

		if (mp.players.exists(player) && player.handle !== 0) {
			player.taskPlayAnim(
				anim[0] as string,
				anim[1] as string,
				1,
				0,
				-1,
				anim[2] as number,
				1,
				!1,
				!1,
				!1
			);
		}

		if (localPlayer === player) {
			mp.game.ui.notifications.help(
				'Нажмите ~INPUT_LOOK_BEHIND~ чтобы остановить действие'
			);
		}
	}

	private stop(player: PlayerMp) {
		player.freezePosition(false);
		player.setCollision(true, false);
		player.clearTasksImmediately();
	}

	private createObjects() {
		objects.forEach((item, index) => {
			mp.colshapes.create(item.use, 0.5, {
				onEnter: () =>
					mp.game.ui.notifications.help('Нажмите ~INPUT_CONTEXT~ для взаимодействия'),
				onKeyPress: () => rpc.callServer('setActionObject', index)
			});
		});
	}

	private onStream(entity: EntityMp) {
		if (entity.type === 'player') {
			const object = objects[entity.getVariable('actionObject')];

			if (object) this.start(entity as PlayerMp, object);
		}
	}

	private onChangeData(player: PlayerMp, data: number) {
		if (player.handle === 0) return;

		const object = objects[data];

		if (!object) return this.stop(player);

		this.start(player, object);

		if (mp.players.local.handle === player.handle) {
			this.active = true;
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			entityStreamIn: this.onStream.bind(this)
		});

		mp.events.subscribeToData({
			actionObject: this.onChangeData.bind(this)
		});

		mp.keys.bind(67, false, () => {
			if (!this.active || mp.gui.cursor.visible) return;

			this.active = false;

			rpc.callServer('setActionObject', null);

			this.stop(player);
		});
	}
}

export default new Actions();