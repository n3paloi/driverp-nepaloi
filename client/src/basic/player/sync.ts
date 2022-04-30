type AnimationData = {
	dict: string;
	name: string;
	speed: number;
	flag: number;
};

class PlayerSync {
	constructor() {
		mp.events.subscribeToDefault({
			entityStreamIn: this.onStreamIn.bind(this)
		});

		mp.events.subscribeToData({
			animationSync: this.playAnimation,
			animation: this.playAnimation,
			scenario: this.playScenario,
			mood: this.setMood,
			walkingStyle: this.setWalkingStyle,
			tops: this.setClothes
		});
	}

	private onStreamIn(entity: EntityMp) {
		if (entity.type !== 'player') return;

		this.playAnimation(entity as PlayerMp, entity.getVariable('animation'));
		this.playAnimation(entity as PlayerMp, entity.getVariable('animationSync'));
		this.playScenario(entity as PlayerMp, entity.getVariable('scenario'));
		this.setMood(entity as PlayerMp, entity.getVariable('mood'));
		this.setWalkingStyle(entity as PlayerMp, entity.getVariable('walkingStyle'));
		this.setClothes(entity as PlayerMp, entity.getVariable('tops'));
	}

	private playAnimation(player: PlayerMp, animation?: AnimationData) {
		player.clearTasksImmediately();

		if (!animation) return;

		const { dict, name, speed, flag } = animation;

		mp.game.streaming.requestAnimDict(dict);

		while (!mp.game.streaming.hasAnimDictLoaded(dict)) {
			mp.game.wait(0);
		}

		player.taskPlayAnim(dict, name, speed, 0, -1, flag, 0, false, false, false);
	}

	private playScenario(player: PlayerMp, scenario?: string) {
		player.clearTasksImmediately();

		if (scenario) {
			player.taskStartScenarioInPlace(scenario, 0, true);
		}
	}

	private setWalkingStyle(player: PlayerMp, clipSet?: string) {
		if (!clipSet) return player.resetMovementClipset(0.0);

		if (!mp.game.streaming.hasClipSetLoaded(clipSet)) {
			mp.game.streaming.requestClipSet(clipSet);

			while (!mp.game.streaming.hasClipSetLoaded(clipSet)) {
				mp.game.wait(0);
			}
		}

		player.setMovementClipset(clipSet, 0.0);
	}

	private setMood(player: PlayerMp, mood?: string) {
		if (!mood) player.clearFacialIdleAnimOverride();
		else mp.game.invoke('0xFFC24B988B938B38', player.handle, mood, 0);
	}

	private setClothes(player: PlayerMp, data: { drawable: number; texture: number }) {
		if (data) {
			player.setComponentVariation(11, data.drawable, data.texture, 2);
		}
	}
}

const sync = new PlayerSync();
