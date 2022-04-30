import * as rpc from 'rage-rpc';

class SoundManager {
	constructor() {
		mp.events.subscribe({
			soundState: this.updateState,
			syncSound: this.syncSound,
			changeSoundVolume: this.changeVolume,
			addSoundListener: this.addListener,
			removeSoundListener: this.removeListener,
			soundPosition: this.setPosition,
			soundRange: this.setRange
		});
	}

	private updateState(player: PlayerMp, state: any, sound: number) {
		mp.players.forEach((item) => rpc.callClient(item, state, sound));
	}

	private syncSound(player: PlayerMp, sound: number) {
		mp.players.forEach(
			(item) => player.id !== item.id && rpc.callClient(item, 'createSound', sound)
		);
	}

	private changeVolume(
		player: PlayerMp,
		listenerId: number,
		sound: number,
		volume: number
	) {
		const listener = mp.players.at(listenerId);

		rpc.callClient(listener, 'createSound', [sound, volume]);
	}

	private addListener(player: PlayerMp, listenerId: number, soundData: any) {
		const listener = mp.players.at(listenerId);

		rpc.callClient(listener, 'createSound', soundData);
	}

	private removeListener(player: PlayerMp, listenerId: number, sound: number) {
		const listener = mp.players.at(listenerId);

		rpc.callClient(listener, 'destroySound', sound);
	}

	private setPosition(player: PlayerMp, sound: number, position: Vector3Mp) {
		mp.players.forEach((item) =>
			rpc.callClient(item, 'soundPosition', [sound, position])
		);
	}

	private setRange(player: PlayerMp, sound: number, range: number) {
		mp.players.forEach((item) => rpc.callClient(item, 'soundRange', [sound, range]));
	}
}

const soundManager = new SoundManager();
