import * as rpc from 'rage-rpc';
import notifications from '../../helpers/notifications';

class PhoneCalls {
	constructor() {
		this.subscribeToEvents();
	}

	private call(player: PlayerMp, phoneNumber: string) {
		if (!player.phone.number || player.phone.number === phoneNumber) {
			return Promise.reject();
		}

		const recipient = mp.players
			.toArray()
			.find((item) => item.loggedIn && item.phone.number === phoneNumber);

		if (
			!mp.players.exists(recipient) ||
			recipient.phone.blackList.indexOf(player.phone.number) >= 0
		) {
			notifications.error(player, 'Абонент временно недоступен!');

			return Promise.reject();
		}

		rpc.callBrowsers(recipient, 'Phone-IncomingCall', player.phone.number);
		notifications.info(recipient, 'Входящий звонок, проверьте телефон!');
	}

	private acceptCall(player: PlayerMp, phoneNumber: string) {
		const caller = mp.players
			.toArray()
			.find((item) => item.loggedIn && item.phone.number === phoneNumber);

		if (!mp.players.exists(caller)) return Promise.reject();

		rpc.callClient(caller, 'Phone-AcceptCall', player);

		return caller;
	}

	private declineCall(player: PlayerMp, phoneNumber: string) {
		const caller = mp.players
			.toArray()
			.find((item) => item.loggedIn && item.phone.number === phoneNumber);

		if (mp.players.exists(caller)) rpc.callClient(caller, 'Phone-DeclineCall');
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Phone-Call': this.call.bind(this),
			'Phone-AcceptCall': this.acceptCall.bind(this),
			'Phone-DeclineCall': this.declineCall.bind(this)
		});
	}
}

export default new PhoneCalls();
