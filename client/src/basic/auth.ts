import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import storage from '../utils/storage';
import hud from './hud';

const player = mp.players.local;

let cam = mp.cameras.new(
	'default',
	new mp.Vector3(-95, 19, 1182),
	new mp.Vector3(0, 0, 0),
	70
);
cam.pointAtCoord(-95, 19, 0);
cam.setActive(true);

mp.game.cam.renderScriptCams(true, false, 0, true, false);
mp.game.gameplay.disableAutomaticRespawn(true);
mp.game.gameplay.ignoreNextRestart(true);
mp.game.gameplay.setFadeInAfterDeathArrest(false);
mp.game.gameplay.setFadeOutAfterDeath(false);
mp.game.gameplay.setFadeInAfterLoad(false);

mp.events.subscribe({
	'Auth-ShowLoginWindow': () => {
		const email = storage.state.login;

		browser.showPage('auth', { email }, false);
	},
	'Auth-SuccessLogin': (login) => {
		storage.saveLogin(login);

		if (!cam) return;

		cam.destroy();
		cam = null;

		setInterval(() => mp.discord.update('leecity.ru', player.name), 10000);

		hud.updateOnline();
		hud.updateDonationMultiplier();
		hud.setPlayerId(player.getVariable('uid'));

		if (player.getVariable('firstLogin')) return;

		mp.game.cam.renderScriptCams(false, true, 3000, true, true);

		rpc.call('Spawn-ShowMenu');
	},
	'Auth-SuccessCreatedAccount': (login: string) => {
		storage.saveLogin(login);

		rpc.call('Auth-ShowLoginWindow');
	}
});