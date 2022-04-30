import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import Property, { PropertyData } from '../property';
import BusinessModel from '../../models/Business';
import notifications from '../../helpers/notifications';
import blips from '../../helpers/blips';
import businessBuilding from './businessBuilding';

export type BusinessData = PropertyData & {
	name: string;
	cost: number;
	position: PositionEx;
	income: number;
	paymentTime: Date;
};

class Business extends Property {
	protected items: BusinessData[];

	private workTime: number;

	constructor() {
		super('Business', {
			maxPlayerItems: 1,
			sellPercent: 50,
			taxPercent: 0.025
		});

		this.items = [];

		this.workTime = 24;
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Business-Go': this.start.bind(this)
		});

		super.subscribeToEvents();
	}

	protected changePlayerData(
		player: PlayerMp,
		business: BusinessData,
		increase: boolean
	) {
		player.businesses += increase ? 1 : -1;
	}

	protected async updateProperty(business: BusinessData, newData: any) {
		await BusinessModel.findByIdAndUpdate(business._id, { $set: newData });

		Object.assign(business, newData);
	}

	protected async setDefaultState(business: BusinessData) {
		const state = {
			ownerId: null,
			forSale: true,
			paidDays: 1,
			customCost: 0,
			paymentTime: null
		};

		await this.updateProperty(business, state);
	}

	protected getPrice(business: BusinessData) {
		return business.cost;
	}

	protected getSellPrice(business: BusinessData) {
		return (business.cost / 100) * this.sellPercent;
	}

	protected showOwn(player: PlayerMp, business: BusinessData) {
		blips.createForPlayer(player, {
			model: 108,
			name: `Бизнес №${business.index}`,
			position: business.position,
			color: 3,
			scale: 0.7
		});
	}

	protected canBuy(player: PlayerMp) {
		let error;

		if (!player.isHasLicense('business')) {
			error = 'У вас нет лицензии на бизнесы!';
		} else if (player.businesses === this.maxPlayerItems) {
			error = 'Достигнут лимит на владение бизнесами!';
		}

		return error ? notifications.error(player, error) : true;
	}

	protected updateBlipSellingStatus(business: BusinessData, player?: PlayerMp) {
		const blip = isNumber(business.blipId) && mp.blips.at(business.blipId);

		if (blip && !business.forSale) {
			blip.destroy();

			this.updateProperty(business, { blipId: undefined });

			return this.showOwn(player, business);
		}

		if (player) blips.deleteForPlayer(player, `Бизнес №${business.index}`);

		businessBuilding.setBlipStatus(
			blip || businessBuilding.createBlip(business),
			this.isOwnedSelling(business)
		);
	}

	protected getPropertyData(player: PlayerMp) {
		const index = player.nearestProperty;

		return this.items[index];
	}

	openMenu = async (player: PlayerMp, index: number) => {
		this.setNearestProperty(player, index);

		const business = this.getPropertyData(player);
		if (!business) return;

		const owner = await this.getOwnerName(business);
		const isOwner = this.isOwner(player, business.ownerId);
		const cost = isOwner ? this.getSellPrice(business) : business.cost;
		const forSale = this.isOwnedSelling(business);

		await rpc.callClient(player, 'Business-ShowMenu', [
			index,
			business.name,
			isOwner,
			owner,
			forSale && !isOwner ? business.customCost : cost,
			forSale,
			business.paymentTime && business.paymentTime.getTime() - Date.now(),
			business.income,
			business.paidDays,
			business.cost * 2,
			this.getTax(business),
			this.workTime
		]);
	};

	private async start(player: PlayerMp) {
		const business = this.getPropertyData(player);

		if (!business.paymentTime) {
			const date = new Date();

			date.setHours(date.getHours() + this.workTime);

			await this.updateProperty(business, { paymentTime: date });

			notifications.info(
				player,
				`Работа началась! Вы получите прибыль через ${this.workTime}ч`
			);
		} else if (business.paymentTime.getTime() - Date.now() <= 0) {
			await this.updateProperty(business, { paymentTime: null });

			await player.moneyHelper.change(business.income, 'bank', 'business income');
		}

		return business.paymentTime && business.paymentTime.getTime() - Date.now();
	}

	taxEvent() {
		const operations = [];

		this.items.forEach((business) => {
			if (!business.ownerId) return;

			if (business.paidDays <= 0) return this.withdraw(business);

			operations.push({
				updateOne: {
					filter: { _id: business._id },
					update: {
						$inc: { paidDays: -1 }
					}
				}
			});

			business.paidDays--;
		});

		if (operations.length) BusinessModel.bulkWrite(operations);
	}

	loadBusiness(data: any) {
		const business = businessBuilding.create(data);

		this.items.push(business);
	}

	async create(player: PlayerMp, name: string, cost: number, income: number) {
		const business = new BusinessModel({ name, cost, income, position: player.position });

		await business.save();

		this.loadBusiness(business.toObject());
	}

	loadPlayerItems(player: PlayerMp) {
		this.items.forEach((business) => {
			if (!this.isOwner(player, business.ownerId)) return;

			this.changePlayerData(player, business, true);

			if (!this.isOwnedSelling(business)) this.showOwn(player, business);
		});
	}
}

const business = new Business();

mp.events.subscribeToDefault({
	databaseConnected: async () => {
		const cursor = await BusinessModel.find().lean().cursor();

		let count = 0;

		cursor.on('data', (data) => {
			business.loadBusiness(data);

			count++;
		});

		cursor.on('close', () => console.log(`Businesses loaded. Count: ${count}`));
	}
});

export default business;
