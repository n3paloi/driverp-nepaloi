import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Property, { PropertyData } from '../property';
import GarageModel from '../../models/Garage';
import notifications from '../../helpers/notifications';
import blips from '../../helpers/blips';
import garages from '../../data/garages';
import garageBuilding from './garageBuilding';

export type GarageData = PropertyData & {
	garageClass: string;
	entrance: PositionEx;
	exit: PositionEx;
	locked: boolean;
};

class Garage extends Property {
	protected items: GarageData[];

	constructor() {
		super('Garage', {
			maxPlayerItems: 1,
			sellPercent: 25,
			tax: 750
		});

		this.items = [];
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Garage-ToggleLockStatus': this.toggleLockStatus.bind(this),
			'Garage-Go': this.go.bind(this)
		});

		super.subscribeToEvents();
	}

	protected changePlayerData(player: PlayerMp, garage: GarageData, increase: boolean) {
		const vehicleSlots = this.getVehicleSlots(garage.garageClass);

		player.garages += increase ? 1 : -1;
		player.vehicleSlots += increase ? vehicleSlots : -vehicleSlots;
	}

	protected async updateProperty(garage: GarageData, newData: any) {
		await GarageModel.findByIdAndUpdate(garage._id, { $set: newData });

		Object.assign(garage, newData);
	}

	protected async setDefaultState(garage: GarageData) {
		const state = {
			ownerId: null,
			forSale: true,
			paidDays: 1,
			locked: false,
			customCost: 0
		};

		await this.updateProperty(garage, state);
	}

	protected getPrice(garage: GarageData) {
		return garages[garage.garageClass].price;
	}

	protected getSellPrice(garage: GarageData) {
		return (garages[garage.garageClass].price / 100) * this.sellPercent;
	}

	protected showOwn(player: PlayerMp, garage: GarageData) {
		blips.createForPlayer(player, {
			model: 50,
			name: `Гараж №${garage.index}`,
			position: garage.entrance,
			color: 3,
			scale: 0.7
		});
	}

	protected canBuy(player: PlayerMp) {
		let error;

		if (player.garages >= this.maxPlayerItems) {
			error = 'Достигнут лимит на владение гаражами!';
		}

		return error ? notifications.error(player, error) : true;
	}

	protected updateBlipSellingStatus(garage: GarageData, player?: PlayerMp) {
		const blip = isNumber(garage.blipId) && mp.blips.at(garage.blipId);

		if (blip && !garage.forSale) {
			blip.destroy();

			this.updateProperty(garage, { blipId: undefined });

			return this.showOwn(player, garage);
		}

		if (player) blips.deleteForPlayer(player, `Гараж №${garage.index}`);

		garageBuilding.setBlipStatus(
			blip || garageBuilding.createBlip(garage),
			this.isOwnedSelling(garage)
		);
	}

	protected getPropertyData(player: PlayerMp) {
		const index = player.nearestProperty;

		return this.items[index];
	}

	openMenu = (player: PlayerMp, index: number) => {
		this.setNearestProperty(player, index);

		const garage = this.getPropertyData(player);

		const isOwnerExist = !!garage.ownerId;
		const isOwner = this.isOwner(player, garage.ownerId);
		const price = this.getPrice(garage);
		const cost = isOwnerExist ? this.getSellPrice(garage) : price;
		const forSale = this.isOwnedSelling(garage);

		rpc.callClient(player, 'Garage-ShowMenu', [
			index,
			isOwner,
			isOwnerExist,
			garageBuilding.isEntrance(player, garage.entrance),
			garage.locked,
			garage.garageClass,
			garage.paidDays,
			forSale,
			forSale && !isOwner ? garage.customCost : cost,
			price * 2,
			this.tax
		]);
	};

	private getVehicleSlots(houseClass: string): number {
		return garages[houseClass].vehicles;
	}

	private go(player: PlayerMp) {
		const garage = this.getPropertyData(player);

		garageBuilding.tryToEnter(player, garage);
	}

	private async toggleLockStatus(player: PlayerMp) {
		const garage = this.getPropertyData(player);

		if (!this.isOwner(player, garage.ownerId)) return;

		await this.updateProperty(garage, { locked: !garage.locked });

		return garage.locked;
	}

	taxEvent() {
		const operations = [];

		this.items.forEach((garage) => {
			if (!garage.ownerId) return;

			if (garage.paidDays <= 0) return this.withdraw(garage);

			operations.push({
				updateOne: {
					filter: { _id: garage._id },
					update: {
						$inc: { paidDays: -1 }
					}
				}
			});

			garage.paidDays--;
		});

		if (operations.length) GarageModel.bulkWrite(operations);
	}

	loadGarage(data: any) {
		const garage = garageBuilding.create(data);

		this.items.push(garage);
	}

	async create(player: PlayerMp, garageClass: string) {
		const garage = new GarageModel({
			garageClass,
			entrance: player.position
		});

		await garage.save();

		this.loadGarage(garage.toObject());
	}

	loadPlayerItems(player: PlayerMp) {
		this.items.forEach((garage) => {
			if (!this.isOwner(player, garage.ownerId)) return;

			this.changePlayerData(player, garage, true);

			if (!this.isOwnedSelling(garage)) this.showOwn(player, garage);
		});
	}
}

const garage = new Garage();

mp.events.subscribeToDefault({
	databaseConnected: async () => {
		const cursor = await GarageModel.find()
			.lean()
			.cursor();

		let count = 0;

		cursor.on('data', (data) => {
			garage.loadGarage(data);

			count++;
		});

		cursor.on('close', () => console.log(`Garages loaded. Count: ${count}`));
	}
});

export default garage;
