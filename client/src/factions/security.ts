import browser from '../utils/browser';

const interiors = ['apa_v_mp_h_01_a', 'apa_v_mp_h_01_c', 'apa_v_mp_h_01_b'];

interiors.forEach((interior) => {
	mp.game.streaming.requestIpl(interior);
});

mp.peds.new(
	0x681bd012,
	new mp.Vector3(1418.858642578125, 1114.86767578125, 114.79459381103516),
	63.55
);

mp.events.subscribe({
	'Security-ShowMenu': (playerId: number) => {
		browser.showPage('factions/security', { playerId }, false);
	},
	'Security-ShowDocs': (name: string, rank: number) => {
		browser.showPage('factions/security/docs', { name, rank });
	},
	'Security-ShowBuyerMenu': (product: string, price: number, sellerId: string) => {
		browser.showPage('factions/security/offer', {
			price,
			sellerId,
			serviceName: product
		});
	},
	'Security-ShowVehiclePC': (prices) => {
		browser.showPage('factions/security/laptop', { prices });
	},
	'Security-ShowLeaderBoard': (...members) => {
		browser.showPage('factions/security/leaderboard', { members });
	},
	'Security-ShowPС': (prices, money, members) => {
		browser.showPage('factions/security/pc', { money, members, prices });
	}
});
