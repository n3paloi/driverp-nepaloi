import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import animations from '../utils/animations';
import notifications from '../helpers/notifications';
import playerInventory from '../basic/player/playerInventory';
import playerActions from '../basic/player/actions';

class GangActions {
	constructor() {
		mp.events.subscribe({
			'Gang-Menu': this.openInteractionMenu.bind(this),
			'Gang-UseRope': this.useRope.bind(this),
			'Gang-UseSack': this.useSack.bind(this)
		});

		mp.events.add({
			'Gang-ShowDocs': this.showDocs.bind(this)
		});
	}

	private async useRope(player: PlayerMp, id: number) {
		if (player.vehicle || !isNumber(id)) return;

		const rope = playerInventory.getItem(player.inventory, 'rope');

		if (!rope) return notifications.error(player, 'У вас нет веревки!');

		playerActions.toggleHandcuffs(player, id, () =>
			playerInventory.decItemCount(player, player.inventory, rope)
		);
	}

	private async useSack(player: PlayerMp, id: number) {
		if (player.vehicle || !isNumber(id)) return;

		const sack = playerInventory.getItem(player.inventory, 'sack');

		if (!sack) return notifications.error(player, 'У вас нет мешка!');

		playerActions.toggleHeadSack(player, id, () =>
			playerInventory.decItemCount(player, player.inventory, sack)
		);
	}

	private openInteractionMenu(player: PlayerMp, target: number) {
		if (!player.gang.name) return;

		const id = isNumber(target) ? target : -1;

		rpc.callClient(player, 'Gang-ShowMenu', id);
	}

	private showDocs(player: PlayerMp, id: number) {
		if (!isNumber(id) || !player.gang.name) return;

		const player2 = mp.players.at(id);
		const { name, rank } = player.gang;

		rpc.callClient(player2, 'Gang-ShowDocs', [
			player.getVariable('realName'),
			name,
			rank
		]);

		animations.playOnServer(player, 'docs', 2500);
	}
}

const actions = new GangActions();