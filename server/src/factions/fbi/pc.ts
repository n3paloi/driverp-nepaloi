import * as rpc from 'rage-rpc';
import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';

class FbiPC {
	public name: string;

	private coords: PositionEx[];

	constructor() {
		this.name = 'fbi';
		this.coords = [
			{ x: 108.76289367675781, y: -746.5542602539062, z: 242.15223693847656 },
			{ x: 111.3006591796875, y: -754.2066650390625, z: 242.15225219726562 },
			{ x: 118.04336547851562, y: -748.447021484375, z: 45.751564025878906 }
		];

		this.createEntities();
	}

	createEntities() {
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

		rpc.callClient(player, 'FBI-ShowPC');
	}

	hackPhone(player: PlayerMp, phoneNumber: string) {
		const target = mp.players
			.toArray()
			.find((item) => item.loggedIn && item.phone.number === phoneNumber);

		if (!target) {
			notifications.error(player, 'Владелец не найден!');

			return Promise.reject();
		}

		return {
			name: `${target.firstName} ${target.lastName}`,
			registerDate: target.registerDate,
			cardNumber: `${target.cardNumber}`,
			money: target.money.bank,
			vehicles: Object.keys(target.vehicles).length
		};
	}
}

const fbiPC = new FbiPC();

mp.events.subscribe({
	'FBI-ShowPC': (player) => {
		if (!player.vehicle) return;

		fbiPC.openMenu(player);
	},
	'FBI-HackPhone': (player, phoneNumber) => fbiPC.hackPhone(player, phoneNumber)
});
