import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Property, { PropertyData } from '../property';
import HouseModel from '../../models/House';
import blips from '../../helpers/blips';
import notifications from '../../helpers/notifications';
import houseBuilding from './houseBuilding';
import housesInfo from '../../data/houses';

export type HouseData = PropertyData & {
	houseClass: string;
	inventory: [];
	entrance: PositionEx;
	exit: PositionEx;
	locked: boolean;
	gang?: string;
};

class House extends Property {
	protected items: HouseData[];

	constructor() {
		super('House', {
			maxPlayerItems: 2,
			sellPercent: 50,
			taxPercent: 0.15
		});

		this.items = [];
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'House-ToggleLockStatus': this.toggleLockStatus.bind(this),
			'House-Go': this.go.bind(this)
		});

		super.subscribeToEvents();
	}

	protected changePlayerData(player: PlayerMp, house: HouseData, increase: boolean) {
		const vehicleSlots = this.getVehicleSlots(house.houseClass);

		player.housesCount += increase ? 1 : -1;
		player.vehicleSlots += increase ? vehicleSlots : -vehicleSlots;
	}

	protected async updateProperty(house: HouseData, newData: any) {
		await HouseModel.findByIdAndUpdate(house._id, { $set: newData });

		Object.assign(house, newData);
	}

	protected async setDefaultState(house: HouseData) {
		const state = {
			paidDays: 1,
			locked: false,
			ownerId: null,
			forSale: true,
			customCost: 0,
			inventory: [],
			gang: null
		};

		await this.updateProperty(house, state);
	}

	protected getPrice(house: HouseData) {
		return housesInfo[house.houseClass].price;
	}

	protected getSellPrice(house: HouseData) {
		return (housesInfo[house.houseClass].price / 100) * this.sellPercent;
	}

	protected showOwn(player: PlayerMp, house: HouseData) {
		blips.createForPlayer(player, {
			model: 40,
			name: `Дом №${house.index}`,
			position: house.entrance,
			color: 3,
			scale: 0.5
		});
	}

	protected canBuy(player: PlayerMp) {
		let error;

		if (!player.isHasLicense('house') && player.housesCount) {
			error = 'У вас нет лицензии на дома!';
		} else if (player.housesCount === this.maxPlayerItems) {
			error = 'Достигнут лимит на владение домами!';
		}

		return error ? notifications.error(player, error) : true;
	}

	protected updateBlipSellingStatus(house: HouseData, player?: PlayerMp) {
		if (isNumber(house.blipId) && !house.forSale) {
			mp.blips.at(house.blipId).destroy();

			this.updateProperty(house, { blipId: undefined });

			return this.showOwn(player, house);
		}

		if (player) blips.deleteForPlayer(player, `Дом №${house.index}`);

		const blip = isNumber(house.blipId)
			? mp.blips.at(house.blipId)
			: houseBuilding.createBlip(house);

		this.updateProperty(house, { blipId: blip.id });

		houseBuilding.setBlipStatus(blip, this.isOwnedSelling(house));
	}

	protected getPropertyData(player: PlayerMp) {
		const index = player.nearestProperty;

		return this.items[index];
	}

	private getVehicleSlots(houseClass: string): number {
		return housesInfo[houseClass].vehicles;
	}

	private go(player: PlayerMp) {
		const house = this.getPropertyData(player);

		houseBuilding.tryToEnter(player, house);
	}

	private async toggleLockStatus(player: PlayerMp) {
		const house = this.getPropertyData(player);

		if (!this.isOwner(player, house.ownerId, true)) return;

		await this.updateProperty(house, { locked: !house.locked });

		return house.locked;
	}

	getInventorySlots(player: PlayerMp): number {
		const house = this.getPropertyData(player);

		if (!house) return;

		return housesInfo[house.houseClass].inventory;
	}

	hasOwner(player: PlayerMp) {
		const house = this.getPropertyData(player);

		return house && !!house.ownerId;
	}

	openMenu = async (player: PlayerMp, index: number) => {
		this.setNearestProperty(player, index);

		const house = this.getPropertyData(player);
		if (!house) return;

		const owner = await this.getOwnerName(house);
		const isOwner = this.isOwner(player, house.ownerId, true);
		const price = this.getPrice(house);
		const cost = owner ? this.getSellPrice(house) : price;
		const forSale = this.isOwnedSelling(house);

		await rpc.callClient(player, 'House-ShowMenu', [
			index,
			isOwner,
			owner,
			houseBuilding.isEntrance(player, house.entrance),
			house.locked,
			house.houseClass,
			house.paidDays,
			forSale,
			forSale && !isOwner ? house.customCost : cost,
			price * 2,
			this.getTax(house)
		]);
	};

	taxEvent() {
		const operations = [];

		this.items.forEach((house) => {
			if (!house.ownerId) return;

			if (house.paidDays <= 0) return this.withdraw(house);

			operations.push({
				updateOne: {
					filter: { _id: house._id },
					update: {
						$inc: { paidDays: -1 }
					}
				}
			});

			house.paidDays--;
		});

		if (operations.length) HouseModel.bulkWrite(operations);
	}

	loadHouse(data: any) {
		const house = houseBuilding.create(data);

		this.items.push(house);
	}

	async create(player: PlayerMp, houseClass: string) {
		const house = new HouseModel({
			houseClass,
			entrance: player.position
		});

		await house.save();

		this.loadHouse(house.toObject());
	}

	loadPlayerItems(player: PlayerMp) {
		this.items.forEach((house) => {
			if (!this.isOwner(player, house.ownerId)) return;

			this.changePlayerData(player, house, true);

			if (!this.isOwnedSelling(house)) this.showOwn(player, house);

			player.setVariable('spawnHouse', house.exit);
		});
	}

	getPlayerItems(player: PlayerMp) {
		const items: { index: number; type: string; active: boolean }[] = [];

		this.items.forEach((house) => {
			player.nearestProperty = house.index;

			if (!this.isOwner(player, house.ownerId, true)) return;

			items.push({
				index: house.index,
				type: house.houseClass,
				active: !!house.gang
			});
		});

		player.nearestProperty = null;

		return items;
	}
}

const house = new House();

mp.events.subscribeToDefault({
	databaseConnected: async () => {
		const cursor = await HouseModel.find()
			.lean()
			.cursor();

		let count = 0;

		cursor.on('data', (data) => {
			house.loadHouse(data);

			count++;
		});

		cursor.on('close', () => console.log(`Houses loaded. Count: ${count}`));
	}
});

mp.events.subscribe({
	'House-GetPlayerHouses': (player: PlayerMp) => house.getPlayerItems(player)
});

export default house;
