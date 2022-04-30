import animationList from '../data/animations';
import walkingStyles from '../data/walkingStyles';
import moods from '../data/moods';

class Animations {
	constructor() {
		mp.events.subscribe({
			stopAnimation: this.stop,
			setAnimation: this.set,
			setWalkingStyle: this.setWalkingStyle,
			setMood: this.setMood,
			playServerAnimation: this.playOnServer
		});
	}

	set(player: PlayerMp, shortcut: string) {
		const animation = animationList[shortcut];
		if (!animation || player.vehicle || player.getVariable('isPlayingAnim')) return;

		player.setVariable('animation', animation);
	}

	playScenario(player: PlayerMp, name: string, duration?: number) {
		if (player.vehicle) return;

		player.setVariable('scenario', name);

		if (duration) {
			player.timeout(() => this.stopScenario(player), duration);
		}
	}

	setWalkingStyle(player: PlayerMp, name: string) {
		const style = walkingStyles[name];

		player.setVariable('walkingStyle', style);
	}

	setMood(player: PlayerMp, name: string) {
		const anim = moods[name];

		player.data.mood = anim;
	}

	playOnServer(player: PlayerMp, shortcut: string, duration?: number) {
		if (!animationList[shortcut] || player.vehicle) return;

		player.setVariable('animationSync', animationList[shortcut]);
		player.setVariable('isPlayingAnim', true);

		if (duration) {
			player.timeout(() => this.stopOnServer(player), duration);
		}
	}

	stop(player: PlayerMp) {
		if (
			player.cuff ||
			!player.getVariable('animation') ||
			player.getVariable('isPlayingAnim')
		)
			return;

		player.setVariable('animation', null);

		player.stopAnimation();
	}

	stopScenario(player: PlayerMp) {
		if (player.getVariable('scenario')) player.setVariable('scenario', undefined);
	}

	stopOnServer(player: PlayerMp) {
		if (!player.getVariable('isPlayingAnim')) return;

		player.setVariable('animationSync', null);
		player.setVariable('isPlayingAnim', false);
	}
}

export default new Animations();