import browser from '../utils/browser';

const player = mp.players.local;

mp.peds.new(0x4161d042, new mp.Vector3(-449.434, 6014.61, 31.716), 327.85);
mp.peds.new(0xb144f9b9, new mp.Vector3(-446.55, 5989.955, 31.34), 48.812);

mp.events.subscribe({
	'Sheriff-ShowPC': () => {
		browser.showPage('factions/sheriff/pc', {
			userName: player.getVariable('realName'),
			rank: player.getVariable('faction').rank
		});
	},
	'Sheriff-ShowMenu': (playerId: number) => {
		browser.showPage('factions/sheriff', { playerId }, false);
	},
	'Sheriff-ShowDocs': (name: string, rank: string) => {
		browser.showPage('factions/sheriff/docs', { name, rank });
	},
	'Sheriff-ShowLeaderBoard': (...members) => {
		browser.showPage('factions/sheriff/leaderboard', { members });
	}
});
