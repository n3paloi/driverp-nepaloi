import * as rpc from 'rage-rpc';
import targetMenu from '../player/target-menu';
import vehicleManager from './index';
import autopilot from './autopilot';
import cruiseControl from './cruise-control';

enum Door {
	FRONT_LEFT = 0,
	FRONT_RIGHT = 1,
	BACK_LEFT = 2,
	BACK_RIGHT = 3,
	HOOD = 4,
	TRUNK = 5,
	BACK = 6,
	BACK2 = 7
}

let anchor = false;

const player = mp.players.local;

class VehicleControls {
	constructor() {
		mp.game.controls.useDefaultVehicleEntering = false;

		this.subscribeToEvents();
		this.bindKeys();
	}

	get seatbelt() {
		return !player.getConfigFlag(32, true);
	}

	private enterToFreeSeat(vehicle: VehicleMp) {
		for (let seat = 0; seat < vehicle.getMaxNumberOfPassengers(); seat++) {
			if (vehicle.isSeatFree(seat)) {
				return player.taskEnterVehicle(vehicle.handle, 5000, seat, 1, 1, 0);
			}
		}
	}

	private toggleIndicator(indicator: 'left' | 'right') {
		const blockedClasses = [13, 14, 15, 16, 21];
		const { vehicle } = player;

		if (
			vehicle &&
			vehicle.getPedInSeat(-1) === player.handle &&
			blockedClasses.indexOf(vehicle.getClass()) === -1
		)
			rpc.callServer('toggleIndicator', [vehicle, indicator]);
	}

	private toggleSeatBelt(notify = true) {
		if (!player.vehicle) return;

		player.setConfigFlag(32, notify ? this.seatbelt : true);

		if (notify) {
			mp.game.ui.notifications.info(
				this.seatbelt ? 'Вы пристегнулись' : 'Вы сняли ремень безопасности'
			);
		}
	}

	private async toggleLockStatus() {
		const vehicle: VehicleMp = vehicleManager.getNearestInRange(5);

		if (vehicle) {
			const isOwner = await rpc.callServer('Vehicle-CheckOwner', vehicle);
			if (!isOwner) return;

			const isLocked = vehicle.getDoorLockStatus() > 1;
			vehicle.setDoorsLocked(isLocked ? 1 : 2);
			await rpc.callServer('VehicleSync-SetLockStatus', [vehicle, !isLocked]);

			mp.game.ui.notifications.info(isLocked ? 'Вы открыли ТС' : 'Вы закрыли ТС');
		}
	}

	private toggleEngine() {
		const { vehicle } = player;

		if (!mp.gui.cursor.visible && vehicle && vehicle.getPedInSeat(-1) === player.handle) {
			rpc.callServer('toggleEngine', player.vehicle);
		}
	}

	private toggleDoor(vehicle: VehicleMp, door: number) {
		const doors = [];

		for (let y = 0; y < 8; y++) {
			if (vehicle.getDoorAngleRatio(y) > 0.1) doors.push(1);
			else doors.push(0);
		}

		doors[door] = doors[door] ? 0 : 1;

		rpc.callServer('VehicleSync-SetDoors', [vehicle, doors]);
	}

	private toggleRoof(vehicle: VehicleMp) {
		const state = vehicle.getConvertibleRoofState() === 0;

		rpc.callServer('VehicleSync-SetRoof', [vehicle, !state]);
	}

	private toggleAnchor(vehicle: VehicleMp) {
		if (
			!vehicle ||
			vehicle.getClass() !== 14 ||
			Math.round(vehicle.getSpeed() * 3.6) > 10
		)
			return;

		anchor = !anchor;

		mp.game.invoke('0xE3EBAAE484798530', vehicle.handle, true);
		mp.game.invoke('0x75DBEC174AEEAD10', vehicle.handle, anchor);

		mp.game.ui.notifications.info(anchor ? 'Вы бросили якорь' : 'Вы сняли судно с якоря');
	}

	private onClickControl(control: string) {
		const { vehicle } = targetMenu;
		if (!vehicle) return;

		switch (control) {
			case 'engine':
				rpc.callServer('toggleEngine', vehicle);
				break;
			case 'trunk':
				rpc.callServer('toggleTrunk', vehicle);
				break;
			case 'hood':
				this.toggleDoor(vehicle, Door.HOOD);
				break;
			case 'frontLeftDoor':
				this.toggleDoor(vehicle, Door.FRONT_LEFT);
				break;
			case 'frontRightDoor':
				this.toggleDoor(vehicle, Door.FRONT_RIGHT);
				break;
			case 'backLeftDoor':
				this.toggleDoor(vehicle, Door.BACK_LEFT);
				break;
			case 'backRightDoor':
				this.toggleDoor(vehicle, Door.BACK_RIGHT);
				break;
			case 'roof':
				this.toggleRoof(vehicle);
				break;
			case 'seatbelt':
				this.toggleSeatBelt();
				break;
			case 'anchor':
				this.toggleAnchor(vehicle);
				break;
			case 'key':
				this.toggleLockStatus();
				break;
			case 'autopilot':
				autopilot.toggle();
				break;
			case 'cruise':
				cruiseControl.toggle();
				break;
			default:
				break;
		}
	}

	private bindKeys() {
		mp.keys.bind(37, false, this.toggleIndicator.bind(this, 'left'));
		mp.keys.bind(39, false, this.toggleIndicator.bind(this, 'right'));
		mp.keys.bind(66, false, this.toggleEngine);
		mp.keys.bind(76, false, () => !mp.gui.cursor.visible && this.toggleLockStatus());
		mp.keys.bind(71, false, () => !mp.gui.cursor.visible && this.toggleSeatBelt());

		mp.keys.bind(70, false, () => {
			if (mp.gui.cursor.visible || player.vehicle || player.isCuffed()) return;

			const vehicle = vehicleManager.getNearestInRange(5);

			if (!vehicle || vehicle.getSpeed() > 5) return;

			if (vehicle.isSeatFree(-1)) {
				player.taskEnterVehicle(vehicle.handle, 2500, -1, 1, 1, 0);
			} else this.enterToFreeSeat(vehicle);
		});
		mp.keys.bind(71, false, () => {
			if (mp.gui.cursor.visible || player.vehicle || player.isCuffed()) return;

			const vehicle = vehicleManager.getNearestInRange(5);

			if (!vehicle || vehicle.getSpeed() > 5) return;

			this.enterToFreeSeat(vehicle);
		});
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			render: () => {
				mp.game.controls.disableControlAction(0, 23, true);
				mp.game.controls.disableControlAction(0, 58, true);
			},
			playerLeaveVehicle: this.toggleSeatBelt.bind(this, false)
		});

		mp.events.subscribe({
			playerChangeVehicleControl: this.onClickControl.bind(this)
		});
	}
}

export default new VehicleControls();
