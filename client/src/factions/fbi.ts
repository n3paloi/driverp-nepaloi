import browser from '../utils/browser';

const player = mp.players.local;

mp.peds.new(0x5cdef405, new mp.Vector3(92.946, -727.184, 33.133), 252.294);

mp.events.subscribe({
	'FBI-ShowPC': () => {
		browser.showPage('factions/fbi/pc');
	},
	'FBI-ShowMenu': (playerId: number) => {
		browser.showPage('factions/fbi', { playerId }, false);
	},
	'FBI-ShowDocs': (name: string, rank: string) => {
		browser.showPage('factions/fbi/docs', { name, rank });
	}
});
