import { isNumber } from 'lodash';
import User from '../models/User';
import notifications from '../helpers/notifications';
import MoneyHelper from '../helpers/money';
import gangs from '../gangs';
import { getPlayerByDbId } from '../utils/players';

export type PropertyData = {
	_id: string;
	index: number;
	ownerId: string;
	customCost: number;
	forSale: boolean;
	paidDays: number;
	blipId?: number;
	gang?: string;
};

export default abstract class Property {
	protected name: string;

	protected items: PropertyData[];

	protected maxPlayerItems: number;

	protected sellPercent: number;

	protected taxPercent: number;

	constructor(name: string, data: any) {
		this.items = [];
		this.name = name;

		this.maxPlayerItems = data.maxPlayerItems;
		this.sellPercent = data.sellPercent;
		this.taxPercent = data.taxPercent;

		this.subscribeToEvents();
	}

	get count() {
		return this.items.length;
	}

	isGangProperty(player: PlayerMp) {
		const gang = gangs.get(player.gang.name);
		const data = this.getPropertyData(player);

		return gang && data.gang && data.gang.toString() === gang._id.toString();
	}

	setGang(player: PlayerMp, index: number, gang: string) {
		player.nearestProperty = index;

		this.updateProperty(this.getPropertyData(player), { gang });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			[`${this.name}-Trade`]: this.trade.bind(this),
			[`${this.name}-PayTax`]: this.payTax.bind(this),
			[`${this.name}-PutForSell`]: this.putForSell.bind(this),
			[`${this.name}-WithdrawFromSale`]: this.withdrawFromSale.bind(this)
		});
	}

	protected abstract changePlayerData(
		player: PlayerMp,
		data: PropertyData,
		increase: boolean
	): void;

	protected abstract updateProperty(data: PropertyData, newData: any): void;

	protected abstract setDefaultState(data: PropertyData): void;

	protected abstract getPrice(data: PropertyData): number;

	protected abstract getSellPrice(data: PropertyData): number;

	protected abstract openMenu(player: PlayerMp, index: number): void;

	protected abstract showOwn(player: PlayerMp, data: PropertyData): void;

	protected abstract canBuy(player: PlayerMp): boolean;

	protected abstract updateBlipSellingStatus(data: PropertyData, player?: PlayerMp): void;

	protected setNearestProperty(player: PlayerMp, index: number) {
		player.nearestProperty = index;
	}

	protected getPropertyData(player: PlayerMp) {
		const index = player.nearestProperty;
		return this.items[index];
	}

	protected getTax(data: PropertyData) {
		const price = this.getPrice(data);
		return (price / 100) * this.taxPercent;
	}

	protected isOwner(player: PlayerMp, ownerId: string, gang = false) {
		if (!player.dbId || !ownerId) return;

		return (
			player.dbId.toString() === ownerId.toString() ||
			(gang && this.isGangProperty(player) && gangs.hasPremission(player, 'house'))
		);
	}

	protected isOwnedSelling(data: PropertyData) {
		return isNumber(data.customCost) && data.customCost > 0;
	}

	protected async putForSell(player: PlayerMp, value: string) {
		const data = this.getPropertyData(player);
		const price = parseInt(value, 10);

		if (!this.isOwner(player, data.ownerId) || this.isGangProperty(player)) {
			return notifications.error(player, 'Это имущество банды');
		}

		if (price > this.getPrice(data) * 2) {
			return notifications.error(player, 'Ваше значение больше макс. суммы продажи!');
		}

		await this.updateProperty(data, { customCost: price, forSale: true });

		this.updateBlipSellingStatus(data, player);

		notifications.success(player, 'Операция успешна!');

		return true;
	}

	protected async withdrawFromSale(player: PlayerMp) {
		const data = this.getPropertyData(player);

		if (!this.isOwner(player, data.ownerId)) return;

		await this.updateProperty(data, { customCost: 0, forSale: false });

		this.updateBlipSellingStatus(data, player);

		notifications.success(player, 'Операция успешна!');

		return false;
	}

	private async buy(player: PlayerMp, data: PropertyData) {
		try {
			if (!this.canBuy(player)) return;

			const cost = this.isOwnedSelling(data) ? data.customCost : this.getPrice(data);

			await player.moneyHelper.different(cost, 'property buy');

			if (data.ownerId) {
				const owner = getPlayerByDbId(data.ownerId);

				if (owner) {
					await owner.moneyHelper.change(cost, 'bank', 'buying custom prop');

					this.changePlayerData(player, data, false);
				} else
					await User.findByIdAndUpdate(data.ownerId, { $inc: { 'money.bank': cost } });
			}

			await this.updateProperty(data, {
				ownerId: player.dbId,
				forSale: false,
				customCost: 0
			});

			this.changePlayerData(player, data, true);

			notifications.success(player, 'Операция успешна!');
		} catch (err) {
			return Promise.reject();
		}
	}

	private async sell(player: PlayerMp, data: PropertyData) {
		if (!this.isOwner(player, data.ownerId)) return;

		await player.moneyHelper.change(this.getSellPrice(data), 'bank', 'sell prop');
		await this.setDefaultState(data);

		this.changePlayerData(player, data, false);

		notifications.success(player, 'Операция успешна!');
	}

	private async trade(player: PlayerMp) {
		const data = this.getPropertyData(player);
		const isOwner = this.isOwner(player, data.ownerId);

		if (data.gang) {
			return notifications.error(player, 'Это имущество банды');
		}

		if (data.forSale && !isOwner) await this.buy(player, data);
		else await this.sell(player, data);

		this.updateBlipSellingStatus(data, player);
	}

	private async payTax(player: PlayerMp, value: any) {
		try {
			const days = parseInt(value, 10);
			const data = this.getPropertyData(player);
			if (!data) return;

			if (!isNumber(days) || days < 0 || data.paidDays + days > 16) {
				return notifications.error(player, 'Максимальное кол-во дней для оплаты - 16');
			}

			const tax = this.getTax(data) * days;
			await player.moneyHelper.different(tax, 'tax');
			await this.updateProperty(data, { paidDays: data.paidDays + days });

			notifications.success(player, 'Операция успешна!');

			return data.paidDays;
		} catch (err) {
			return Promise.reject();
		}
	}

	protected async withdraw(data: PropertyData) {
		const owner = getPlayerByDbId(data.ownerId);
		const price = this.getSellPrice(data);

		await this.setDefaultState(data);

		if (owner) this.changePlayerData(owner, data, false);
		await MoneyHelper.changeById(data.ownerId, 'bank', price, 'withdraw house');

		this.updateBlipSellingStatus(data, owner);
	}

	protected async getOwnerName(data: PropertyData) {
		if (!data.ownerId) return '';

		const player = getPlayerByDbId(data.ownerId);
		let name: string = player && player.getVariable('realName');

		if (!name) {
			const user = await User.findById(data.ownerId)
				.select({ _id: 0, firstName: 1, lastName: 1 })
				.lean();
			name = user ? `${user.firstName} ${user.lastName}` : '';
		}

		return name;
	}
}