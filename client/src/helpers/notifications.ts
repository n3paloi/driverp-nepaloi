import * as rpc from 'rage-rpc';

class Notifications implements UiNotifications {
	private maxMessageLength = 99;

	constructor() {
		this.setup();
	}

	info(message: string) {
		rpc.callBrowsers('notify', { type: 'info', message });
	}

	warning(message: string) {
		rpc.callBrowsers('notify', { type: 'warn', message });
	}

	error(message: string) {
		rpc.callBrowsers('notify', { type: 'error', message });
	}

	success(message: string) {
		rpc.callBrowsers('notify', { type: 'success', message });
	}

	help(message: string) {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName(message);
		mp.game.ui.displayHelpTextFromStringLabel(0, true, true, -1);

		setTimeout(() => mp.game.ui.clearHelp(true), 4000);
	}

	show(title: string, sender: string, message: string, picture: string, icon = 0) {
		mp.game.ui.setNotificationTextEntry('CELL_EMAIL_BCON');

		for (let i = 0, msgLen = message.length; i < msgLen; i += this.maxMessageLength) {
			mp.game.ui.addTextComponentSubstringPlayerName(
				message.substr(i, Math.min(this.maxMessageLength, message.length - i))
			);
		}

		mp.game.ui.setNotificationMessage(picture, picture, false, icon, title, sender);
		mp.game.ui.drawNotification(false, true);
	}

	private setup() {
		mp.game.ui.notifications = this;

		mp.events.subscribe({
			'Notifications-Info': this.info,
			'Notifications-Warning': this.warning,
			'Notifications-Error': this.error,
			'Notifications-Success': this.success,
			'Notifications-Help': this.help,
			'Notifications-ShowWithImage': this.show.bind(this)
		});
	}
}

const notifications = new Notifications();
