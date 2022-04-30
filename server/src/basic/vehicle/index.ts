import * as crypto from 'crypto';
import VehicleModel from '../../models/Vehicle';
import { getPlayerByDbId } from '../../utils/players';
import blips from '../../helpers/blips';
import vehicles, { vehicleTypes } from '../../data/vehicles';
import vehicleState, { State } from './state';
import vehicleTuning, { TuningData } from './tuning';
import './despawn';
import './fuel';
import './sync';
import './health';
import './vehicleInventory';

class Vehicle {
	constructor() {
		mp.events.subscribe({
			'Vehicle-CheckOwner': (player: PlayerMp, vehicle: VehicleMp) => {
				if (!player || !vehicle) return false;

				return this.isOwner(vehicle, player, !vehicle.dbId);
			},
			'Vehicle-GetModelInfo': (player, model: string) => this.getTypeOptions(model),
			toggleIndicator: (player, vehicle: VehicleMp, value: any) => {
				vehicleState.toggleIndicator(vehicle, value);
			},
			toggleTrunk: (player: PlayerMp, vehicle: VehicleMp) => {
				vehicleState.toggleTrunk(player, vehicle);
			},
			toggleEngine: this.toggleEngine,
			'Vehicle-IsOwner': (player: PlayerMp, vehicle: VehicleMp) =>
				this.isOwner(vehicle, player, true),
			'Vehicle-MarkPosition': this.markPosition,
			getPlayerVehicles: (player: PlayerMp) => player.vehicles
		});
	}

	getType(model: string) {
		return vehicles[model] ? vehicles[model].type : Object.keys(vehicleTypes)[0];
	}

	getTypeOptions(model: string) {
		return vehicleTypes[this.getType(model)];
	}

	isTemporary(vehicle: VehicleMp) {
		return !vehicle.dbId;
	}

	isOwner(vehicle: VehicleMp, player: PlayerMp, temporary = false) {
		const owner: VehicleOwner = vehicle?.owner;

		if (!owner || (!temporary && this.isTemporary(vehicle))) return false;

		return owner.type === 'faction'
			? player.faction.id === owner.id
			: temporary
			? player.dbId.toString() === owner.id.toString()
			: !!player.vehicles[vehicle.dbId];
	}

	async setOwner(vehicle: VehicleMp, owner: VehicleOwner) {
		vehicle.owner = owner;

		if (!this.isTemporary(vehicle)) {
			await VehicleModel.findByIdAndUpdate(vehicle.dbId, { $set: { owner: owner.id } });
		}
	}

	async create(
		model: string,
		position: PositionEx & { rot?: number },
		owner: VehicleOwner,
		temporary: boolean,
		locked = false,
		player?: PlayerMp,
		spawn = true
	) {
		let vehicle: VehicleMp;
		const number = temporary ? 'PROJECT1' : await this.generateNumber();
		const { tank, health } = this.getTypeOptions(model);

		if (spawn) {
			vehicle = this.spawn(model, position, owner, number, tank, {
				locked,
				health: { body: health, engine: health }
			});
		}

		if (!temporary) {
			const doc = await new VehicleModel({
				model,
				owner: owner.id,
				numberPlate: number,
				fuel: tank
			}).save();

			if (vehicle) vehicle.dbId = doc._id;

			if (owner.type === 'user') {
				player.vehicles[doc._id.toString()] = {
					name: model,
					id: vehicle?.id,
					type: this.getType(model),
					number
				};
			}
		}

		return vehicle;
	}

	spawn(
		model: string,
		position: PositionEx & { rot?: number },
		owner: VehicleOwner,
		number: string,
		fuel: number,
		state: { [K in keyof State]?: State[K] } = {},
		tuning: TuningData | {} = {}
	) {
		const hash = mp.joaat(model);
		const { x, y, z, dimension = 0, rot = 90 } = position;
		const { trunk, tank, health } = this.getTypeOptions(model);

		const vehicle = mp.vehicles.new(hash, new mp.Vector3(x, y, z), {
			dimension,
			heading: rot
		});

		vehicle.owner = owner;
		vehicle.name = model;
		vehicle.numberPlate = number;
		vehicle.inventory = [];
		vehicle.owners = [];
		vehicle.slots = trunk;
		vehicle.maxHealth = health;
		vehicle.canStart = true;

		vehicle.setVariable('fuel', fuel);
		vehicle.setVariable('maxFuel', tank);
		vehicle.setVariable('state', { ...vehicleState.initial, ...state });
		vehicle.setVariable('tuning', { ...vehicleTuning.default, ...tuning });

		return vehicle;
	}

	async delete(vehicle: VehicleMp) {
		if (!this.isTemporary(vehicle)) await VehicleModel.findByIdAndDelete(vehicle.dbId);

		const owner = getPlayerByDbId(vehicle.owner.id);

		if (owner) delete owner.vehicles[vehicle.dbId];

		vehicle.destroy();
	}

	async setNumberPlate(vehicle: VehicleMp, customNumber?: string) {
		const number = !customNumber ? await this.generateNumber() : customNumber;

		await VehicleModel.findByIdAndUpdate(vehicle.dbId, { $set: { numberPlate: number } });

		vehicle.numberPlate = number;
	}

	async loadPlayerVehicles(player: PlayerMp) {
		const items = await VehicleModel.find({ owner: player.dbId })
			.select({ model: 1, numberPlate: 1, label: 1 })
			.lean();

		items.forEach((item) => {
			player.vehicles[item._id.toString()] = {
				type: this.getType(item.model),
				name: item.model,
				number: item.numberPlate,
				label: item.label
			};
		});
	}

	async spawnPlayerVehicle(player: PlayerMp, dbId: string, position: PositionEx) {
		const data = player.vehicles[dbId];

		if (typeof data.id === 'number') {
			const vehicle = mp.vehicles.at(data.id);

			vehicle.position = new mp.Vector3(position.x, position.y, position.z);
			vehicle.dimension = 0;

			setTimeout(() => {
				vehicle.rotation = new mp.Vector3(0, 0, 90);
			}, 100);
		} else {
			const doc = await VehicleModel.findById(dbId).lean();
			const vehicle = this.spawn(
				doc.model,
				position,
				{
					type: 'user',
					id: doc.owner
				},
				doc.numberPlate,
				doc.fuel,
				doc.state,
				doc.tuning
			);

			vehicle.dbId = doc._id;
			vehicle.inventory = doc.inventory;
			vehicle.owners = doc.owners;

			player.vehicles[vehicle.dbId].id = vehicle.id;
		}
	}

	private async generateNumber() {
		let number: string;

		do {
			const hash = crypto.randomBytes(48).toString('hex').slice(0, 8).toUpperCase();

			// eslint-disable-next-line no-await-in-loop
			const isExists = await VehicleModel.findOne({ numberPlate: hash }).countDocuments();

			if (!isExists) number = hash;
		} while (!number);

		return number;
	}

	private toggleEngine(player: PlayerMp, vehicle: VehicleMp) {
		vehicleState.setEngineState(player, vehicle, !vehicleState.get(vehicle).engine, true);
	}

	private markPosition(player: PlayerMp, id: string) {
		const data = player.vehicles[id];
		const vehicle = typeof data.id === 'number' && mp.vehicles.at(data.id);
		if (!vehicle) return mp.events.reject();

		blips.createWaypoint(player, vehicle.position);
	}
}

export default new Vehicle();
