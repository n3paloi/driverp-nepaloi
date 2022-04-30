const player = mp.players.local;

mp.peds.new(0x843d9d0f, new mp.Vector3(-1613.248, 5261.589, 3.974), 206.169);

mp.events.subscribe({
	'Diver-StartWork': () => {
		player.setDiesInWater(false);
	},
	'Diver-FinishWork': () => {
		player.setDiesInWater(true);
	}
});
