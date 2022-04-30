import * as rpc from 'rage-rpc';
import browser from '../utils/browser';

const player = mp.players.local;
let showPhone = false;

mp.game.controls.disableControlAction(0, 156, true);

mp.events.subscribe({
	'Phone-ShowMenu': () => {
		browser.showPage('phone', {}, false);

		mp.gui.chat.show(true);
		mp.game.ui.displayRadar(true);

		showPhone = true;
	},
	'Phone-AcceptCall': (interlocutor: PlayerMp) => {
		rpc.call('voice.phoneCall', interlocutor);
		rpc.callBrowsers('Phone-AcceptCall');
	},
	'Phone-DeclineCall': () => {
		rpc.call('voice.phoneStop');
		rpc.callBrowsers('Phone-DeclineCall');
	},
	'Phone-CanOpen': () =>
		!player.isFalling() &&
		!player.isSwimming() &&
		!player.isBeingStunned(0) &&
		!player.isUpsidedown() &&
		!player.isGettingUp(),
	'Phone-Close': () => {
		if (!showPhone || player.getVariable('isDying')) return;

		rpc.callBrowsers('Phone-CanClose').then((canClose) => {
			if (canClose) {
				browser.hidePage();
				showPhone = false;

				rpc.callServer('Phone-CloseMenu');
			}
		});
	}
});

mp.keys.bind(77, false, () => rpc.call('Phone-Close'));
