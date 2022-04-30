import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import animations from '../../utils/animations';
import playerInventory from './playerInventory';
import { getNearestPlayerInRange } from '../../utils/players';
import { getNearestVehicleInRange } from '../../utils/vehicles';

class PlayerActions {
	constructor() {
		mp.events.subscribe({
			setActionObject: this.setActionObject,
			toggleHandcuffs: this.toggleHandcuffs.bind(this),
			disableHandcuffs: this.disableHandcuffs.bind(this),
			toggleVehicleSeat: this.toggleVehicleSeat.bind(this),
			toggleHeadSack: this.toggleHeadSack.bind(this),
			disableHeadSack: this.disableHeadSack.bind(this)
		});
	}

	targetIsNear(target: PlayerMp, position: Vector3Mp) {
		return target && target.dist(position) <= 3;
	}

	enableHandcuffs(player: PlayerMp, target: PlayerMp) {
		if (
			player.vehicle ||
			!this.targetIsNear(target, player.position) ||
			target.getVariable('isDying')
		)
			return;

		target.cuff = true;

		animations.playOnServer(target, 'arresting');

		rpc.callClient(target, 'Police-TieUp', player);
	}

	disableHandcuffs(player: PlayerMp, playerId: number) {
		if (player.vehicle || !isNumber(playerId) || playerId === -1) return;

		const target = mp.players.at(playerId);

		if (this.targetIsNear(target, player.position) && !target.getVariable('isDying')) {
			target.cuff = false;

			rpc.callClient(target, 'Police-Untie');

			animations.stopOnServer(target);
		}
	}

	toggleHandcuffs(player: PlayerMp, targetId: number, callback?: any) {
		if (player.vehicle || !isNumber(targetId) || targetId === -1) return;

		const target = mp.players.at(targetId);

		if (!this.targetIsNear(target, player.position)) return;

		if (target.cuff) this.disableHandcuffs(player, target.id);
		else this.enableHandcuffs(player, target);

		if (callback) callback();
	}

	toggleVehicleSeat(player: PlayerMp, targetId: number) {
		if (player.vehicle) return;

		if (isNumber(targetId) && targetId !== -1) {
			const target = mp.players.at(targetId);
			const vehicle = getNearestVehicleInRange(player.position, 3);

			if (
				vehicle &&
				this.targetIsNear(target, player.position) &&
				!target.getVariable('isDying')
			) {
				rpc.callClient(target, 'Police-PutToCar', vehicle);
			}
		} else {
			const target = getNearestPlayerInRange(player.position, 6);

			if (target && target.vehicle && this.targetIsNear(target, player.position)) {
				target.removeFromVehicle();

				this.enableHandcuffs(player, target);
			}
		}
	}

	enableHeadSack(player: PlayerMp) {
		if (player.getVariable('isDying')) return;

		player.sack = true;
		player.setClothes(1, 89, 0, 0);

		rpc.callClient(player, 'Headsack-SetStatus', true);
	}

	async disableHeadSack(player: PlayerMp, playerId: number) {
		if (player.vehicle || !isNumber(playerId) || playerId === -1) return;

		const target = mp.players.at(playerId);

		if (this.targetIsNear(target, player.position) && !target.getVariable('isDying')) {
			target.sack = false;

			await playerInventory.takeOffItem(target, 'clothes', 'masks');

			rpc.callClient(target, 'Headsack-SetStatus', false);
		}
	}

	toggleHeadSack(player: PlayerMp, targetId: number, callback?: any) {
		if (player.vehicle || !isNumber(targetId) || targetId === -1) return;

		const target = mp.players.at(targetId);

		if (!this.targetIsNear(target, player.position)) return;

		if (target.sack) this.disableHeadSack(player, target.id);
		else this.enableHeadSack(target);

		if (callback) callback();
	}

	setActionObject(player: PlayerMp, id: number) {
		player.setVariable('actionObject', id);
	}
}

export default new PlayerActions();
