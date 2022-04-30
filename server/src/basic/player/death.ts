import * as rpc from 'rage-rpc';
import { random } from 'lodash';
import { getNearestPosition } from '../../utils/players';
import cells from '../../data/prisonCells';
import hospitals from '../../data/hospitals';
import animations from '../../utils/animations';
import ems from '../../factions/ems';
import emsCalls from '../../factions/ems/pc';
import prison from '../prison';
import hunger from './hunger';
import playerInventory from './playerInventory';
import actions from './actions';

class PlayerDeath {
	private deathTimeout: number;

	constructor() {
		this.deathTimeout = 10 * 60 * 1000;

		mp.events.subscribeToDefault({
			playerDeath: this.onDeath.bind(this)
		});

		mp.events.subscribe({
			'Player-Die': this.death.bind(this)
		});
	}

	private spawn(player: PlayerMp) {
		const { x, y, z } = player.getVariable('insideJail')
			? cells[random(0, cells.length - 1)]
			: getNearestPosition(player, hospitals);

		player.spawn(new mp.Vector3(x, y, z));
	}

	private async onDeath(player: PlayerMp, reason: string, killer?: PlayerMp) {
		if (player.getVariable('isDying') || player.getVariable('insideJail')) {
			return this.death(player);
		}

		player.spawn(player.position);

		player.health = 100;

		await actions.disableHeadSack(player, player.id);
		actions.disableHandcuffs(player, player.id);
		actions.setActionObject(player, null);

		animations.set(player, 'dead');

		rpc.callClient(player, 'Player-ShowDeathMenu', [
			new Date().toString(),
			this.deathTimeout,
			ems.getMembers(true).length,
			killer ? `Вас убил #${killer?.uid}` : 'Потрачено'
		]);

		if (player.deathTimeout) clearTimeout(player.deathTimeout);

		player.deathTimeout = setTimeout(() => this.death(player), this.deathTimeout);

		if (killer) prison.onPlayerKnock(player, killer);

		player.setVariable('isDying', true);
	}

	private async death(player: PlayerMp) {
		try {
			clearTimeout(player.deathTimeout);

			emsCalls.deleteCall(player.id);
			hunger.reset(player);

			await playerInventory.clearInventory(player);

			player.setVariable('isDying', false);

			animations.stop(player);

			rpc.callClient(player, 'Player-CloseDeathMenu');

			this.spawn(player);
		} catch (err) {
			console.error(err, 'death error');
		}
	}
}

const death = new PlayerDeath();
