import * as rpc from 'rage-rpc';
import User from '../../models/User';
import Vehicle from '../../models/Vehicle';
import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';

class PolicePC {
	public name: string;

	private coords: PositionEx[];

	constructor() {
		this.coords = [
			{ x: 443.273193359375, y: -980.83251953125, z: 30.6895809173584 },
			{ x: -1648.165, y: 165.678, z: 61.782 },
			{ x: -1652.995, y: 163.454, z: 61.782 },
			{ x: 450.08251953125, y: -987.4801635742188, z: 30.6895751953125 },
			{ x: 413.5072021484375, y: -1024.0865478515625, z: 29.50324058532715 },
			{ x: -1093.606, y: -842.954, z: 19.308 },
			{ x: -1096.414, y: -845.126, z: 19.308 }
		];

		this.name = 'lspd';

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

		rpc.callClient(player, 'Police-ShowPC');
	}

	async getVehicleOwner(player: PlayerMp, numberPlate: string) {
		const vehicle = await Vehicle.findOne({ numberPlate });

		if (!vehicle || !vehicle.owner) {
			notifications.error(player, 'Неверный номер!');

			return Promise.reject();
		}

		const owner = await User.findById(vehicle.owner);

		if (!owner) {
			notifications.error(player, 'Владелец не найден!');

			return Promise.reject();
		}

		return {
			name: `${owner.firstName} ${owner.lastName}`,
			vehicleModel: vehicle.model
		};
	}

	async getLicenses(player: PlayerMp, userData: any) {
		const { firstName, lastName } = userData;

		const user = await User.findOne({ firstName, lastName });

		if (!user) {
			notifications.error(player, 'Гражданин не найден!');

			return Promise.reject();
		}

		return user.licenses;
	}
}

const policePC = new PolicePC();

mp.events.subscribe({
	'Police-ShowPC': (player) => {
		if (!player.vehicle) return;

		policePC.openMenu(player);
	},
	'Police-GetVehicleOwner': (player, number) => policePC.getVehicleOwner(player, number),
	'Police-GetLicenses': (player, data) => policePC.getLicenses(player, data)
});
