import vehicleState from './state';

class VehicleSync {
	constructor() {
		this.subscribeToEvents();
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			'VehicleSync-SetDirtLevel': (player, vehicle: VehicleMp, level: number) => {
				vehicleState.setDirtLevel(vehicle, level);
			}
		});
		mp.events.subscribe({
			'VehicleSync-SetRadioStation': (player, vehicle: VehicleMp, station: number) => {
				vehicleState.setRadioStation(vehicle, station);
			},
			'VehicleSync-SetRoof': (player, vehicle: VehicleMp, status: boolean) => {
				vehicleState.setRoof(vehicle, status);
			},
			'VehicleSync-SetDoors': (player, vehicle: VehicleMp, doors: number[]) => {
				vehicleState.setDoors(vehicle, doors);
			},
			'VehicleSync-SetLockStatus': (player, vehicle: VehicleMp, status: boolean) => {
				vehicleState.setLockStatus(vehicle, status);
			}
		});
	}
}

const sync = new VehicleSync();