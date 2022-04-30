import hud from './hud';

const localPlayer = mp.players.local;

const UseAutoVolume = false;
const MaxRange = 10.0;
let speaker = false;

const enableMicrophone = () => {
	if (!localPlayer.getVariable('dbId') || localPlayer.getVariable('isDying')) return;

	if (mp.voiceChat.muted) {
		mp.voiceChat.muted = false;

		hud.setMicStatus(true, speaker);

		localPlayer.playFacialAnim('mic_chatter', 'mp_facial');
	}
};

const disableMicrophone = () => {
	if (!localPlayer.getVariable('dbId')) return;

	if (!mp.voiceChat.muted) {
		mp.voiceChat.muted = true;

		hud.setMicStatus(false, speaker);

		localPlayer.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
	}
};

const toggleSpeaker = async () => {
	if (!localPlayer.getVariable('dbId') || !mp.voiceChat.muted) return;

	speaker = !localPlayer.getVariable('speaker');

	mp.events.callRemote('set_voice_speaker', speaker);

	hud.setMicStatus(false, speaker);
};

mp.keys.bind(90, true, enableMicrophone);
mp.keys.bind(90, false, disableMicrophone);

mp.events.subscribe({
	'Voice-GetSpeakerStatus': () => speaker
});

const gVoiceMgr = {
	listeners: [],

	add(player, notify) {
		if (this.listeners.indexOf(player) !== -1) return;

		if (notify) mp.events.callRemote('add_voice_listener', player);
		this.listeners.push(player);

		player.voice3d = true;
		player.voiceVolume = 0.0;
		player.isListening = true;
	},

	remove(player, notify) {
		const idx = this.listeners.indexOf(player);

		if (idx !== -1) {
			if (notify) {
				mp.events.callRemote('remove_voice_listener', player);
			}

			this.listeners.splice(idx, 1);
			player.isListening = false;
		}
	}
};

mp.events.add('playerQuit', (player) => {
	if (player.isListening) {
		gVoiceMgr.remove(player, false);
	}
});

const PHONE = {
	target: null,
	status: false
};

mp.events.add('voice.mute', () => {
	disableMicrophone();
});

mp.events.subscribe({
	'voice.reload': () => {
		try {
			mp.voiceChat.cleanupAndReload(true, true, true);
		} catch {}
	},
	'voice.phoneCall': (target) => {
		if (PHONE.target) return;

		PHONE.target = target;
		PHONE.status = true;

		mp.events.callRemote('add_voice_listener', target);

		target.voiceVolume = 1.0;
		target.voice3d = false;

		gVoiceMgr.remove(target, false);
	},
	'voice.phoneStop': () => {
		if (!PHONE.target) return;

		if (mp.players.exists(PHONE.target)) {
			const localPos = localPlayer.position;
			const playerPos = PHONE.target.position;
			const dist = mp.game.system.vdist(
				playerPos.x,
				playerPos.y,
				playerPos.z,
				localPos.x,
				localPos.y,
				localPos.z
			);

			if (dist > MaxRange) mp.events.callRemote('remove_voice_listener', PHONE.target);
			else gVoiceMgr.add(PHONE.target, false);
		} else mp.events.callRemote('remove_voice_listener', PHONE.target);

		PHONE.target = null;
		PHONE.status = false;
	}
});

mp.events.add('playerStartTalking', (player) => {
	if (PHONE.target !== player) player.voice3d = true;

	player.playFacialAnim('mic_chatter', 'mp_facial');
});

mp.events.add('playerStopTalking', (player) => {
	player.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
});

setInterval(() => {
	const localPos = localPlayer.position;

	mp.players.forEachInStreamRange((player) => {
		if (player !== localPlayer) {
			if (!player.isListening && (!PHONE.target || PHONE.target !== player)) {
				const playerPos = player.position;
				const dist = mp.game.system.vdist(
					playerPos.x,
					playerPos.y,
					playerPos.z,
					localPos.x,
					localPos.y,
					localPos.z
				);

				const range = player.getVariable('speaker') ? 20.0 : MaxRange;

				if (dist <= range) {
					gVoiceMgr.add(player, true);
				}
			}
		}
	});

	gVoiceMgr.listeners.forEach((player) => {
		if (player.handle !== 0) {
			const playerPos = player.position;
			const dist = mp.game.system.vdist(
				playerPos.x,
				playerPos.y,
				playerPos.z,
				localPos.x,
				localPos.y,
				localPos.z
			);

			const range = player.getVariable('speaker') ? 20.0 : MaxRange;

			if (dist > range) {
				gVoiceMgr.remove(player, true);
			} else if (!UseAutoVolume) {
				player.voiceVolume = 1 - dist / range;
			}
		} else {
			gVoiceMgr.remove(player, true);
		}
	});
}, 350);

const scalable = (dist, maxDist) => Math.max(0.1, 1 - dist / maxDist);

const drawSprite = (dist, name, scale, heading, colour, x, y, layer) => {
	const { graphics } = mp.game;
	const resolution = graphics.getScreenActiveResolution(0, 0);
	const textureResolution = graphics.getTextureResolution(dist, name);
	const SCALE = [
		(scale[0] * textureResolution.x) / resolution.x,
		(scale[1] * textureResolution.y) / resolution.y
	];

	if (graphics.hasStreamedTextureDictLoaded(dist) === 1) {
		if (typeof layer === 'number') {
			graphics.set2dLayer(layer);
		}

		graphics.drawSprite(
			dist,
			name,
			x,
			y,
			SCALE[0],
			SCALE[1],
			heading,
			colour[0],
			colour[1],
			colour[2],
			colour[3]
		);
	} else {
		graphics.requestStreamedTextureDict(dist, true);
	}
};

mp.events.add('render', () => {
	mp.players.forEachInStreamRange((player) => {
		if (player !== localPlayer) {
			const __playerPosition__ = player.position;
			const __localPlayerPosition__ = localPlayer.position;

			const distance = mp.game.system.vdist(
				__localPlayerPosition__.x,
				__localPlayerPosition__.y,
				__localPlayerPosition__.z,
				__playerPosition__.x,
				__playerPosition__.y,
				__playerPosition__.z
			);
			if (
				distance <= 25 &&
				!player.isOccluded() &&
				!player.isDead() &&
				player.getVariable('INVISIBLE') !== true
			) {
				const headPosition = player.getBoneCoords(12844, 0, 0, 0);
				const headPosition2d = mp.game.graphics.world3dToScreen2d(
					headPosition.x,
					headPosition.y,
					headPosition.z + 0.4
				);

				if (!headPosition2d) return false;

				const scale = scalable(distance, 25);
				const scaleSprite = 0.7 * scale;

				const isMuted = false;
				const sprite = !isMuted ? 'leaderboard_audio_3' : 'leaderboard_audio_mute';

				const spriteColor = [255, 255, 255, 255];

				if (player.isVoiceActive)
					drawSprite(
						'mpleaderboard',
						sprite,
						[scaleSprite, scaleSprite],
						0,
						spriteColor,
						headPosition2d.x,
						headPosition2d.y + 0.038 * scale
					);
			}
		}
	});
});
