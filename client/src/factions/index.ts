import * as rpc from 'rage-rpc';
import { isEmpty } from 'lodash';
import browser from '../utils/browser';
import targetMenu from '../basic/player/target-menu';
import './fbi';
import './italianMafia';
import './police';
import './security';
import './sheriff';
import './ems';

const player = mp.players.local;

const factionsList = {
	ems: 'ems',
	fbi: 'fbi',
	lspd: 'police',
	lssd: 'sheriff',
	italy: 'mafia',
	secure: 'security'
};

mp.events.subscribe({
	'Faction-LeaderMenu': (members, players, ranks, salary) => {
		const faction = player.getVariable('faction');

		browser.showPage('factions/leader', {
			factionName: faction.name,
			members,
			players,
			ranks,
			salary
		});
	},
	'Factions-ShowGarageMenu': (
		factionId: string,
		spawned: boolean,
		vehicles: string[]
	) => {
		const page = `factions/${factionsList[factionId]}/garage`;

		browser.showPage(page, {
			userName: player.getVariable('realName'),
			rank: player.getVariable('faction').rank,
			availableVehicles: vehicles,
			spawned
		});
	}
});

mp.keys.bind(114, false, () => {
	if (
		mp.gui.cursor.visible ||
		player.isCuffed() ||
		!player.getVariable('faction')?.working
	)
		return;

	const target = targetMenu.player;
	rpc.callServer('Faction-Menu', target ? target.remoteId : null);
	targetMenu.visible = true;
});
mp.keys.bind(88, false, () => {
	if (
		mp.gui.cursor.visible ||
		player.isCuffed() ||
		!targetMenu.player ||
		!player.getVariable('faction')?.working
	)
		return;

	rpc.callServer('toggleHandcuffs', targetMenu.player.remoteId);
});
