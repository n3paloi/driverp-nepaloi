import browser from '../utils/browser';

mp.peds.new(
	0x9b557274,
	new mp.Vector3(-2600.357, 1929.635, 167.312),
	347.273,
	(streamPed) => {
		streamPed.setAlpha(50);
	},
	0
);

mp.events.subscribe({
	'ItalianMafia-ShowMenu': (playerId: number) => {
		browser.showPage('factions/mafia', { playerId }, false);
	},
	'ItalianMafia-ShowBuyerMenu': (product: string, price: number, sellerId: string) => {
		browser.showPage('factions/mafia/offer', { price, sellerId, serviceName: product });
	},
	'ItalianMafia-ShowDocs': (name: string, rank: number) => {
		browser.showPage('factions/mafia/docs', { name, rank });
	},
	'ItalianMafia-ShowLeaderBoard': (...members) => {
		browser.showPage('factions/mafia/leaderboard', { members });
	},
	'ItalianMafia-ShowPС': (money: number, members) => {
		browser.showPage('factions/mafia/pc', { money, members });
	}
});
