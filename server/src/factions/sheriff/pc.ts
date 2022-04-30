import * as rpc from 'rage-rpc';
import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';

class SheriffPC {
	public name: string;

	private coords: PositionEx[];

	constructor() {
		this.name = 'lssd';
		this.coords = [
			{ x: -448.5984802246094, y: 6011.57177734375, z: 31.71654510498047 },
			{ x: -446.2485046386719, y: 6013.6982421875, z: 36.68670654296875 },
			{ x: -433.5337219238281, y: 6004.265625, z: 31.71653175354004 },
			{ x: -1645.7198486328125, y: 160.27952575683594, z: 61.780216217041016 },
			{ x: -1650.474609375, y: 157.98887634277344, z: 61.780216217041016 }
		];

		this.createMainShape();
	}

	createMainShape() {
		this.coords.forEach((position) => {
			const { x, y, z } = position;

			mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
				color: [15, 192, 252, 70],
				visible: true
			});

			colshapeManager.create(position, 0.75, {
				onEnter: this.enteredShape.bind(this),
				onKeyPress: this.openMenu.bind(this),
				keyName: 'E'
			});
		});
	}

	enteredShape(player: PlayerMp) {
		if (player.faction.id !== this.name) return;

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	openMenu(player: PlayerMp) {
		if (player.faction.id !== this.name) return;

		const { vehicle } = player;

		if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
			return notifications.error(player, 'Нужно находиться в служебном ТС');
		}

		rpc.callClient(player, 'Sheriff-ShowPC');
	}
}

const sheriffPC = new SheriffPC();

mp.events.subscribe({
	'Sheriff-ShowPC': (player) => {
		if (!player.vehicle) return;

		sheriffPC.openMenu(player);
	}
});
