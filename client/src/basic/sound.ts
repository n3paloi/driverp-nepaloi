import * as rpc from 'rage-rpc';

const localPlayer = mp.players.local;

type Sound = {
	id: number;
	url: string;
	position: Vector3Mp;
	range: number;
	dimension: number;
	volume: number;
	paused: boolean;
	listeners: PlayerMp[];
};

class SoundManager {
	private maxRange: number;

	private activeSounds: Map<number, Sound>;

	private soundInterval?: NodeJS.Timeout;

	constructor() {
		this.maxRange = 60.0;
		this.activeSounds = new Map();
	}

	private getSound(id: number) {
		return this.activeSounds.get(id);
	}

	private addListener(player: PlayerMp, id: number) {
		const sound = this.getSound(id);

		if (!mp.players.exists(player) || !sound) return;

		sound.listeners.push(player);
		this.activeSounds.set(id, sound);

		if (localPlayer.handle !== player.handle) {
			return rpc.callServer('addSoundListener', [player.id, sound]);
		}
	}

	private removeListener(player: PlayerMp, id: number) {
		const sound = this.getSound(id);
		const index = sound.listeners.indexOf(player);

		if (index !== -1) {
			sound.listeners.splice(index, 1);
			this.activeSounds.set(id, sound);

			if (localPlayer.handle !== player.handle) {
				return rpc.callServer('removeSoundListener', [player.id, sound]);
			}
		}
	}

	private setVolume(player: PlayerMp, id: number, volume: number) {
		const sound = this.getSound(id);

		if (sound && localPlayer.handle !== player.handle)
			return rpc.callServer('changeSoundVolume', [player.id, id, volume]);
	}

	playSound(
		url: string,
		position: Vector3Mp,
		range = this.maxRange,
		volume = 1,
		dimension = 0
	) {}
}

// mp.game.audio.playSound3D = (url, pos, range = maxRange, volume = 1, dimension = 0) => {
// 	id += 1;
// 	activeSounds[id] = {
// 			id: id,
// 			url: url,
// 			pos: pos,
// 			volume: volume,
// 			range: range,
// 			dimension: dimension,
// 			listeners: [],
// 			paused: false,
// 	};
// 	activeSounds[id].destroy = function () {
// 			return mp.events.callRemote('soundState', 'destroySound', this.id);
// 	};
// 	activeSounds[id].pause = function () {
// 			return mp.events.callRemote('soundState', 'pauseSound', this.id);
// 	};
// 	activeSounds[id].resume = function () {
// 			return mp.events.callRemote('soundState', 'resumeSound', this.id)
// 	};
// 	if (!soundInterval) initSoundInterval();
// 	return activeSounds[id];
// };
