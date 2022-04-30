import browser from '../utils/browser';

const player = mp.players.local;
const interiorId = mp.game.interior.getInteriorAtCoords(311.2546, -592.4204, 42.32737);

mp.peds.new(
	0x5719786d,
	new mp.Vector3(315.58160400390625, -540.5592651367188, 28.743432998657227),
	226.25
);

const ipls = [
	'rc12b_fixed',
	'rc12b_destroyed',
	'rc12b_default',
	'rc12b_hospitalinterior_lod',
	'rc12b_hospitalinterior'
];

mp.game.streaming.requestIpl('gabz_pillbox_milo_');

ipls.forEach(
	(ipl) => mp.game.streaming.isIplActive(ipl) && mp.game.streaming.removeIpl(ipl)
);

mp.game.interior.enableInteriorProp(interiorId, 'gabz_pillbox_milo_');
mp.game.interior.refreshInterior(interiorId);

mp.events.subscribe({
	'EMS-ShowMenu': (playerId: number) => {
		browser.showPage('factions/ems', { playerId }, false);
	},
	'EMS-ShowDocs': (name: string, rank: string) => {
		browser.showPage('factions/ems/docs', { name, rank });
	},
	'EMS-ShowLeaderBoard': (...members) => {
		browser.showPage('factions/ems/leaderboard', { members });
	},
	'EMS-ShowPC': (...calls) => {
		browser.showPage('factions/ems/pc', {
			calls,
			userName: player.getVariable('realName'),
			rank: player.getVariable('faction').rank
		});
	}
});
