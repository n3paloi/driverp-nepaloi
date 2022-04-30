import { isEmpty } from 'lodash';
import browser from '../utils/browser';

const localPlayer = mp.players.local;

mp.events.subscribe({
	'Spawn-ShowMenu': () => {
		const house = !isEmpty(localPlayer.getVariable('spawnHouse'));
		const faction = !isEmpty(localPlayer.getVariable('faction'));
		const jail = localPlayer.getVariable('insideJail');

		browser.showPage('spawn', {
			playerSpawn: {
				faction,
				house,
				exit: true
			},
			jail
		});
	}
});
