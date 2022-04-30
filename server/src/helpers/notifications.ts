import * as rpc from 'rage-rpc';

class Notifications {
	info(player: PlayerMp, message: string) {
		rpc.callClient(player, 'Notifications-Info', message);
	}

	warning(player: PlayerMp, message: string) {
		rpc.callClient(player, 'Notifications-Warning', message);
	}

	error(player: PlayerMp, message: string) {
		rpc.callClient(player, 'Notifications-Error', message);
	}

	success(player: PlayerMp, message: string) {
		rpc.callClient(player, 'Notifications-Success', message);
	}

	help(player: PlayerMp, message: string) {
		rpc.callClient(player, 'Notifications-Help', message);
	}

	show(
		player: PlayerMp,
		title: string,
		sender: string,
		message: string,
		picture: string,
		icon = 0
	) {
		rpc.callClient(player, 'Notifications-ShowWithImage', [
			title,
			sender,
			message,
			picture,
			icon
		]);
	}
}

export default new Notifications();
