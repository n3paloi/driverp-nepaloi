mp.events.add({
	add_voice_listener: (player: PlayerMp, target: PlayerMp) => {
		if (target) player.enableVoiceTo(target);
	},
	remove_voice_listener: (player: PlayerMp, target: PlayerMp) => {
		if (target) player.disableVoiceTo(target);
	},
	set_voice_speaker: (player: PlayerMp, status: boolean) => {
		player.setVariable('speaker', status);
	}
});
