import * as rpc from 'rage-rpc';
import vehicleState from './state';
import vehicleTuning from './tuning';

const player = mp.players.local;

class VehicleSync {
	private radioSyncInterval?: NodeJS.Timeout;

	constructor() {
		this.subscribeToEvents();
		this.checkLicenseInterval();
	}

	syncTuning(vehicle: VehicleMp) {
		const tuning = vehicleTuning.get(vehicle);

		if (tuning) vehicleTuning.set(vehicle, tuning);
	}

	private checkLicenseInterval() {
		setInterval(() => {
			const { vehicle } = player;

			if (!vehicle || vehicle.getClass() === 13) return;
			if (vehicle.getVariable('fuel') <= 0) {
				vehicle.setEngineOn(false, true, true);
			}
		}, 600);
	}

	private syncForStreaming(vehicle: VehicleMp) {
		if (!vehicle || vehicle.type !== 'vehicle') return;

		const state = vehicleState.get(vehicle);

		vehicle.trackVisibility();
		vehicle.setTyresCanBurst(true);
		vehicle.setCanBeDamaged(true);
		vehicle.setUndriveable(true);
		vehicle.setInvincible(false);

		if (state) {
			vehicleState.setHealth(vehicle, state.health.body, state.health.engine);
			vehicleState.setEngineState(vehicle, state.engine, true);
			vehicleState.setLockStatus(vehicle, state.locked);
			vehicleState.setDirtLevel(vehicle, state.dirtLevel);
			vehicleState.setDoorsState(vehicle, state.doors);
			vehicleState.setRoofState(vehicle, state.roof);
			vehicleState.setTurnSignalsStatus(
				vehicle,
				state.indicators.left,
				state.indicators.right
			);
		}

		this.syncTuning(vehicle);
	}

	private syncRadioStation() {
		const { vehicle } = player;
		const state = vehicleState.get(vehicle);

		if (!vehicle || !state) return;

		const radioIndex = mp.game.invoke('0xE8AF77C4C06ADC93');

		if (vehicle.getPedInSeat(-1) === player.handle && state.radioIndex !== radioIndex) {
			rpc.callServer('VehicleSync-SetRadioStation', [vehicle, radioIndex]);
		} else if (state.radioIndex === 255) {
			mp.game.audio.setRadioToStationName('OFF');
		} else {
			mp.game.invoke('0xF7F26C6E9CC9EBB8', true);
			mp.game.invoke('0xA619B168B8A8570F', state.radioIndex);
		}
	}

	private onEnterInVehicle(vehicle: VehicleMp) {
		const state = vehicleState.get(vehicle);
		if (!state) return;

		if (!state.engine) {
			setTimeout(() => vehicle.setEngineOn(state.engine, true, true), 300);
		}

		if (this.radioSyncInterval) clearInterval(this.radioSyncInterval);
		this.radioSyncInterval = setInterval(this.syncRadioStation, 1000);

		vehicle.setUndriveable(!state.engine);
		vehicle.setInvincible(false);

		if (state.locked) player.taskLeaveVehicle(vehicle.handle, 16);
	}

	private onLeaveFromVehicle() {
		const { vehicle } = player;
		const state = vehicleState.get(vehicle);

		if (!state) return;
		if (this.radioSyncInterval) clearInterval(this.radioSyncInterval);

		vehicle.setEngineOn(state.engine, true, true);
		vehicle.setUndriveable(!state.engine);
		vehicle.setInvincible(false);

		mp.events.callRemote('VehicleSync-SetDirtLevel', vehicle, vehicle.getDirtLevel());
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			entityStreamIn: this.syncForStreaming.bind(this),
			playerEnterVehicle: this.onEnterInVehicle.bind(this),
			playerLeaveVehicle: this.onLeaveFromVehicle.bind(this)
		});

		mp.events.subscribeToData({
			tuning: this.syncTuning
		});

		mp.events.subscribe({
			'VehicleSync-SetEngine': vehicleState.setEngineState,
			'VehicleSync-SetDirtLevel': vehicleState.setDirtLevel,
			'VehicleSync-SetLockStatus': vehicleState.setLockStatus,
			'VehicleSync-SetDoorsState': vehicleState.setDoorsState,
			'VehicleSync-SetRoofState': vehicleState.setRoofState,
			'VehicleSync-SetHealth': vehicleState.setHealth,
			'VehicleSync-SetIndicators': vehicleState.setTurnSignalsStatus
		});
	}
}

export default new VehicleSync();
