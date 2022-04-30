import * as rpc from 'rage-rpc';
import vehicleControls from './controls';
import vehicleState from './state';

const player = mp.players.local;

class Speedometer {
	constructor() {
		setInterval(this.render.bind(this), 200);
	}

	private render() {
		const { vehicle } = player;
		const state = vehicleState.get(vehicle);

		rpc.callBrowsers(
			'Player-SetVehicle',
			vehicle &&
				state &&
				vehicle.getPedInSeat(-1) === player.handle &&
				vehicle.getClass() !== 13
				? {
						engine: !!vehicle.getIsEngineRunning(),
						velocity: Math.round(vehicle.getSpeed() * 3.6),
						rpm: Math.round(vehicle.rpm * 1000),
						gear: vehicle.gear,
						fuel: {
							current: Math.round(vehicle.getVariable('fuel')),
							max: vehicle.getVariable('maxFuel')
						},
						locked: vehicle.getDoorLockStatus() > 1,
						seatBelt: vehicleControls.seatbelt,
						turnSignals: state.indicators
				  }
				: undefined
		);
	}
}

const speedometer = new Speedometer();
