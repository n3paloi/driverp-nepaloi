import * as rpc from 'rage-rpc';
import VehicleModel from '../../models/Vehicle';
import notifications from '../../helpers/notifications';
import { getStreamedPlayers } from '../../utils/players';

export type State = {
	engine: boolean;
	locked: boolean;
	dirtLevel: number;
	health: {
		body: number;
		engine: number;
	};
	roof: boolean;
	trunk: boolean;
	doors: number[];
	wheels: number[];
	radioIndex: number;
	indicators: {
		left: boolean;
		right: boolean;
	};
};

class VehicleState {
	constructor() {
		this.runAutosaveInterval();
	}

	get initial(): State {
		return {
			engine: false,
			locked: false,
			health: {
				body: 1000,
				engine: 1000
			},
			roof: true,
			trunk: false,
			dirtLevel: 0,
			radioIndex: 0,
			doors: [],
			wheels: [],
			indicators: {
				left: false,
				right: false
			}
		};
	}

	get(vehicle: VehicleMp): State {
		return vehicle?.getVariable('state') || {};
	}

	setEngineState(
		player: PlayerMp,
		vehicle: VehicleMp,
		status: boolean,
		instantly = false
	) {
		if (!vehicle.canStart) {
			return notifications.info(player, 'Черт! Что-то с движком...');
		}

		vehicle.engine = status;

		this.update(vehicle, { engine: status });

		rpc.callClient(player, 'VehicleSync-SetEngine', [vehicle, status, instantly]);
	}

	setRadioStation(vehicle: VehicleMp, station: number) {
		this.update(vehicle, { radioIndex: station });
	}

	setDirtLevel(vehicle: VehicleMp, value: number) {
		this.update(vehicle, { dirtLevel: value });

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetDirtLevel', [vehicle, value])
		);
	}

	setDoors(vehicle: VehicleMp, doors: number[]) {
		this.update(vehicle, { doors });

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetDoorsState', [vehicle, doors])
		);
	}

	setRoof(vehicle: VehicleMp, status: boolean) {
		this.update(vehicle, { roof: status });

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetRoofState', [vehicle, status])
		);
	}

	setLockStatus(vehicle: VehicleMp, status: boolean) {
		this.update(vehicle, { locked: status });

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetLockStatus', [vehicle, status])
		);
	}

	setHealth(vehicle: VehicleMp, body: number, engine: number) {
		this.update(vehicle, {
			health: { body, engine }
		});

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetHealth', [vehicle, body, engine])
		);
	}

	toggleIndicator(vehicle: VehicleMp, indicator: 'left' | 'right') {
		const { indicators } = this.get(vehicle);

		indicators[indicator] = !indicators[indicator];

		this.update(vehicle, { indicators });

		getStreamedPlayers(vehicle.position).forEach((player) =>
			rpc.callClient(player, 'VehicleSync-SetIndicators', [
				vehicle,
				indicators.left,
				indicators.right
			])
		);
	}

	toggleTrunk(player: PlayerMp, vehicle: VehicleMp) {
		const { trunk, doors } = this.get(vehicle);

		this.update(vehicle, {
			trunk: !trunk
		});

		doors[5] = trunk ? 0 : 1;

		this.setDoors(vehicle, doors);

		notifications.info(player, trunk ? 'Багажник закрыт' : 'Багажник открыт для всех');
	}

	private update(vehicle: VehicleMp, data: { [K in keyof State]?: State[K] }) {
		const state = this.get(vehicle);

		vehicle.setVariable('state', { ...state, ...data });
	}

	private runAutosaveInterval() {
		setInterval(() => {
			try {
				const operations = [];

				mp.vehicles.forEach((vehicle) => {
					if (!mp.vehicles.exists(vehicle) || !vehicle.dbId) return;

					operations.push({
						updateOne: {
							filter: { _id: vehicle.dbId },
							update: {
								fuel: vehicle.getVariable('fuel'),
								state: this.get(vehicle)
							}
						}
					});
				});

				if (operations.length) VehicleModel.bulkWrite(operations);
			} catch (err) {
				console.log(err, 'state interval');
			}
		}, 3 * 60 * 1000);
	}
}

export default new VehicleState();