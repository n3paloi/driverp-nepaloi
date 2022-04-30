import * as rpc from 'rage-rpc';
import Time from './time';

class Chat {
	constructor() {
		mp.events.subscribeToDefault({
			playerChat: this.sendChatMessage.bind(this)
		});
	}

	sendSystem(message: string, player?: PlayerMp) {
		const text = `!{242,19,37}${message}`;

		if (player) this.sendToPlayer(player, 'near', text);
		else this.sendToAll(text);
	}

	private sendChatMessage(player: PlayerMp, data: string) {
		const { type, message } = JSON.parse(data);

		const color = player.getVariable('inMask') ? [255, 255, 255] : player.chatColor;
		const time = Time.getTime();

		const text = `!{${color}}[${time}] ${player.name}: ${message}`;

		if (type === 'faction') this.sendToFaction(player, text);
		else this.sayNear(player, text);
	}

	private sayNear(player: PlayerMp, message: string) {
		mp.players.forEachInRange(player.position, 100, (entity) =>
			this.sendToPlayer(entity, 'near', message)
		);
	}

	private sendToAll(message: string) {
		mp.players.forEach((player) => this.sendToPlayer(player, 'near', message));
	}

	private sendToFaction(player: PlayerMp, message: string) {
		if (!player.faction || !player.faction.name) return;

		const players = mp.players.toArray();

		players.forEach((item) => {
			if (!item.faction) return;
			if (!item.faction.name || player.faction.name !== item.faction.name) return;

			this.sendToPlayer(item, 'faction', message);
		});
	}

	private sendToPlayer(player: PlayerMp, type: string, message: string) {
		rpc.callClient(player, 'chatMessage', [type, message]);
	}
}

export default new Chat();
