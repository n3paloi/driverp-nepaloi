import * as rpc from 'rage-rpc';
import * as moment from 'moment';
import PlayerInventory from '../basic/player/playerInventory';
import animations from '../utils/animations';

class PlayerHelper {
	extend(player: PlayerMp) {
		player.getName = this.getName.bind(this, player);
		player.updateName = this.updateName.bind(this, player);
		player.tp = this.tp.bind(this, player);
		player.timeout = this.timeout.bind(this, player);
		player.isHasLicense = this.isHasLicense.bind(this, player);
		player.isMale = this.isMale.bind(this, player);
		player.isDriver = this.isDriver.bind(this, player);
		player.addToInventory = this.addToInventory.bind(this, player);
		player.isEnoughSlots = this.isEnoughSlots.bind(this, player);
		player.isGovMember = this.isGovMember.bind(this, player);
		player.ressurect = this.ressurect.bind(this, player);
	}

	private getName(player: PlayerMp) {
		return player.getVariable('realName');
	}

	private updateName(player: PlayerMp) {
		player.name = `Гражданин (${player.id})`;

		const isValid = moment().isBefore(
			player.tempName.expiresDate || moment().subtract(10, 'minutes'),
			'minute'
		);

		const { firstName, lastName } = isValid ? player.tempName : player;

		player.setVariable('realName', `${firstName} ${lastName}`);
		player.setVariable('isActiveTempName', isValid);
	}

	private tp(player: PlayerMp, position: PositionEx, rotation = 90) {
		const { x, y, z, dimension = 0 } = position;

		player.position = new mp.Vector3(x, y, z);
		player.heading = rotation;
		player.dimension = dimension;
	}

	private timeout(player: PlayerMp, callback: () => any, duration: number) {
		setTimeout(() => {
			try {
				if (!mp.players.exists(player)) return;

				callback();
			} catch (err) {
				console.log(err);
			}
		}, duration);
	}

	private isHasLicense(player: PlayerMp, license: string) {
		return !!player.licenses.find((item) => item.name === license);
	}

	private isMale(player: PlayerMp) {
		return player.model === mp.joaat('mp_m_freemode_01');
	}

	private isGovMember(player: PlayerMp) {
		const govFactions = ['Полиция', 'FBI', 'Шериф'];

		return player.faction && govFactions.includes(player.faction.name);
	}

	private isDriver(player: PlayerMp) {
		const { vehicle } = player;

		return vehicle && vehicle.getOccupant(-1) && vehicle.getOccupant(-1).id === player.id;
	}

	private ressurect(player: PlayerMp) {
		clearTimeout(player.deathTimeout);

		player.health = 50;
		player.setVariable('isDying', false);

		animations.stop(player);

		rpc.callClient(player, 'Player-CloseDeathMenu');
	}

	private addToInventory(player: PlayerMp, item: InventoryItem) {
		return PlayerInventory.addItem(player, item);
	}

	private isEnoughSlots(player: PlayerMp, item: InventoryItem) {
		return PlayerInventory.isEnoughSlots(player, player.inventory, item, item.count);
	}
}

export default new PlayerHelper();
