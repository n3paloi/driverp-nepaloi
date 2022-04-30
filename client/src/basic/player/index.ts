import * as rpc from 'rage-rpc';
import browser from '../../utils/browser';
import storage from '../../utils/storage';
import './sync';
import './nametags';

const localPlayer = mp.players.local;

mp.events.subscribe({
	'Player-ShowDeathMenu': (time, timeout, medics, reason) => {
		browser.showPage('player/death', { reason, medics, timeout, currentTime: time });
	},
	'Player-CloseDeathMenu': () => browser.hidePage(),
	'Player-ShowPlayerInfo': (
		property,
		vehicleSlots,
		registerDate,
		cardNumber,
		phoneNumber,
		playedTime,
		licenses
	) => {
		browser.hidePage();

		const faction = localPlayer.getVariable('faction');

		browser.showPage('player/info', {
			property,
			vehicleSlots,
			registerDate,
			cardNumber,
			phoneNumber,
			playedTime,
			licenses,
			gender: localPlayer.isMale() ? 0 : 1,
			faction: faction ? faction.name : '',
			name: localPlayer.getVariable('realName')
		});
	},
	'Player-ShowPassport': (data) => {
		browser.showPage('player/passport', data);
	},
	'Player-ShowStartScreen': () => {
		browser.showPage('player/start');
	},
	'Player-ShowLicenses': (...licenses) => {
		browser.showPage('player/licenses', { licenses });
	},
	'Player-AddFriend': (player: PlayerMp) => {
		if (player && mp.players.exists(player)) {
			storage.addFriend(player.getVariable('realName'));
		}
	},
	'Player-Spawn': () => {
		browser.hidePage();
	},
	chatMessage: (type: string, text: string) => {
		if (type === 'faction') {
			mp.game.audio.playSoundFrontend(-1, 'Off_High', 'MP_RADIO_SFX', true);
		}

		rpc.callBrowsers('App-ChatMessage', { type, text });
	},
	'Donation-ShowMenu': (prices) => browser.showPage('donation', { prices })
});
mp.events.subscribeToDefault({
	startScreenEffect: (name: string, duration: number) => {
		mp.game.graphics.startScreenEffect(name, 3000, false);

		setTimeout(() => mp.game.graphics.stopScreenEffect(name), duration);
	}
});

mp.events.add('render', () => {
	mp.game.player.setLockonRangeOverride(1);
	mp.game.player.setHealthRechargeMultiplier(0.0);
	mp.game.player.restoreStamina(100);
	mp.game.controls.disableControlAction(2, 243, true); // cheats console
});

mp.game.gameplay.disableAutomaticRespawn(true);
mp.game.gameplay.ignoreNextRestart(true);
