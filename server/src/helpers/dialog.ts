import * as rpc from 'rage-rpc';

class DialogHelper {
	player: PlayerMp;

	constructor(player) {
		this.player = player;
	}

	showDate(data: any) {
		rpc.callBrowsers(this.player, 'App-SetDate', data);
	}

	showMoneyData(data: any) {
		rpc.callBrowsers(this.player, 'Player-SetMoney', data);
	}

	showSatiety(value: number) {
		rpc.callBrowsers(this.player, 'Player-SetSatiety', value);
	}
}

export default DialogHelper;
