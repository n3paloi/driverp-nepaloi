class Hunger {
	decrease(player: PlayerMp) {
		if (player.getVariable('AGM') || player.getVariable('insideJail')) return;

		if (player.hunger > 0) this.updatePlayerHunger(player, player.hunger - 0.5);
		else player.health -= 5;
	}

	reset(player: PlayerMp) {
		player.health = 100;
		this.updatePlayerHunger(player, 100);
	}

	updatePlayerHunger(player: PlayerMp, hunger: number) {
		player.hunger = hunger;
		player.dialog.showSatiety(hunger);
	}
}

export default new Hunger();
