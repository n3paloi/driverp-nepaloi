import rpc from 'rage-rpc';
import { getNearestVehicleInRange } from '../utils/vehicles';
import colshapeManager from '../helpers/colshapes';
import vehicleManager from '../basic/vehicle';
import vehicleTuning, { TuningData } from '../basic/vehicle/tuning';
import vehicles from '../data/vehicles';

type Position = PositionEx & { rot: number };

type SpawnPositions = {
	[type in 'all' | 'helicopter']?: Position[];
};

const garages: { [id: string]: FactionGarage } = {};

class FactionGarage {
	public readonly id: string;

	public readonly vehicles: Map<string, VehicleMp> = new Map();

	private readonly models: string[][];

	private readonly positions: SpawnPositions;

	private readonly tuning: Partial<TuningData>;

	private marker: MarkerMp;

	constructor(
		id: string,
		position: PositionEx,
		spawnPositions: SpawnPositions,
		models: string[][],
		tuning: Partial<TuningData> = {}
	) {
		this.id = id;
		this.positions = spawnPositions;
		this.models = models;
		this.tuning = tuning;
		this.createMainShape(position);

		garages[id] = this;
	}

	static despawnVehicle(vehicle: VehicleMp) {
		if (!mp.vehicles.exists(vehicle)) return;

		const garage = garages[vehicle.owner?.id];

		if (garage) {
			const holder: string = vehicle.getVariable('holderId');
			garage.vehicles.delete(holder);
			vehicle.destroy();
		}
	}

	getAvailableVehicles(player: PlayerMp) {
		return this.models[player.faction.rank - 1];
	}

	showMenu(player: PlayerMp) {
		if (player.faction.id !== this.id) return;

		rpc.callClient(player, 'Factions-ShowGarageMenu', [
			this.id,
			this.vehicles.has(player.dbId),
			this.getAvailableVehicles(player)
		]);
	}

	async spawnVehicle(player: PlayerMp, model: string) {
		if (
			this.vehicles.has(player.dbId) ||
			!this.models[player.faction.rank - 1].includes(model)
		)
			return mp.events.reject('Вы уже брали ТС');

		const position = this.getFreePosition(model);
		if (!position) return mp.events.reject('Нет свободных паркомест');

		const vehicle = await vehicleManager.create(
			model,
			position,
			{
				type: 'faction',
				id: this.id
			},
			true,
			true
		);
		vehicle.setVariable('holderId', player.dbId);
		vehicle.numberPlate = this.getNumberPlate();

		vehicleTuning.update(vehicle, this.tuning);

		this.vehicles.set(player.dbId, vehicle);
	}

	updateMarkerVisible(player: PlayerMp) {
		if (player.faction.name) this.marker.showFor(player);
		else this.marker.hideFor(player);
	}

	private getNumberPlate() {
		const vehiclesAmount = this.vehicles.size + 1;
		return this.id.toUpperCase() + vehiclesAmount;
	}

	private getFreePosition(model: string) {
		const vehicleType: string = vehicles[model]?.type;
		const positions: Position[] = this.positions[vehicleType] ?? this.positions.all;

		return (
			positions &&
			positions.find((item) => {
				const vehicle = getNearestVehicleInRange(
					new mp.Vector3(item.x, item.y, item.z),
					2
				);

				return !vehicle;
			})
		);
	}

	private createMainShape(coords: PositionEx) {
		const { x, y, z } = coords;

		colshapeManager.create({ x, y, z }, 1, {
			onKeyPress: this.showMenu.bind(this),
			keyName: 'E'
		});
		this.marker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 1, {
			color: [255, 92, 0, 255],
			visible: false
		});
	}
}

mp.events.subscribe({
	'Faction-SpawnVehicle': (player: PlayerMp, model: string) => {
		const garage = garages[player.faction.id];
		return garage && garage.spawnVehicle(player, model);
	},
	'Faction-DespawnVehicle': (player: PlayerMp) => {
		const garage = garages[player.faction.id];
		if (!garage) return;

		const vehicle = garage.vehicles.get(player.dbId);
		if (vehicle) FactionGarage.despawnVehicle(vehicle);
	}
});

export function updateGarageMarker(player: PlayerMp, faction: string) {
	const garage = garages[faction];
	if (garage) garage.updateMarkerVisible(player);
}

export default FactionGarage;