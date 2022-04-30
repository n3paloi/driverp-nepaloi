import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import targetMenu from '../basic/player/target-menu';

const player = mp.players.local;

let leadeMenu = false;

mp.events.subscribe({
	'Gang-ShowMenu': (playerId: number) => {
		browser.showPage('gang', { playerId }, false);
	},
	'Gang-ShowDocs': (name: string, gang: string, rank: string) => {
		browser.showPage('gang/docs', { name, gang, rank });
	},
	'Gang-ShowLeaderMenu': () => {
		const name = player.getVariable('realName');
		const { rank } = player.getVariable('gang');

		browser.showPage('gang/leader', { name, rank });

		leadeMenu = true;
	},
	'Gang-ShowLeaveMenu': () => {
		browser.showPage('gang/leave');
	}
});

mp.keys.bind(114, false, () => {
	if (mp.gui.cursor.visible || player.isCuffed() || !player.getVariable('gang')) return;

	const target = targetMenu.player;
	rpc.callServer('Gang-Menu', target ? target.remoteId : null);
	targetMenu.visible = true;
});

mp.keys.bind(116, false, () => {
	if (!leadeMenu) return;

	browser.hidePage();

	leadeMenu = false;
});

mp.keys.bind(88, false, () => {
	if (
		mp.gui.cursor.visible ||
		player.isCuffed() ||
		!player.getVariable('gang') ||
		!targetMenu.player
	)
		return;

	rpc.callServer('Gang-UseRope', targetMenu.player.remoteId);
});
