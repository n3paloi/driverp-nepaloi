mp.events.add({
	'fpsync.update': (player: PlayerMp, camPitch: number, camHeading: number) => {
		mp.players.call(player.streamedPlayers, 'fpsync.update', [
			player.id,
			camPitch,
			camHeading
		]);
	},
	pointingStop: (player) => player.stopAnimation()
});
