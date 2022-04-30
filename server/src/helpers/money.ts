import { isNumber } from 'lodash';
import * as log4js from 'log4js';
import { getPlayerByDbId } from '../utils/players';
import User from '../models/User';
import notifications from './notifications';

const logger = log4js.getLogger('money');

class MoneyHelper {
	private readonly player: PlayerMp;

	constructor(player: PlayerMp) {
		this.player = player;
	}

	static isNumeric(value: any) {
		const convertedValue = parseInt(value, 10);
		return convertedValue && isNumber(convertedValue);
	}

	updateMoney() {
		this.player.dialog.showMoneyData(this.player.money);
	}

	async resetCash() {
		await User.updateOne({ _id: this.player.dbId }, { $set: { 'money.cash': 0 } });
		this.player.money.cash = 0;

		this.updateMoney();
	}

	async change(value, type, product = 'clear') {
		if (!MoneyHelper.isNumeric(value)) return false;

		const status = await User.updateOne(
			value < 0
				? { _id: this.player.dbId, [`money.${type}`]: { $gt: -value - 1 } }
				: { _id: this.player.dbId },
			{ $inc: { [`money.${type}`]: value } }
		);

		if (!status.nModified) return false;

		this.player.money[type] += value;

		this.updateMoney();

		logger.info(
			`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ${product}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
			drivepoints: ${this.player.money.drivepoints}\n
      -------------------------------------------
      `
		);

		return true;
	}

	async different(value, product = 'clear') {
		const cost = parseInt(value, 10);

		if (!MoneyHelper.isNumeric(cost) || cost <= 0) return Promise.reject();

		if (this.player.money.bank >= cost) await this.change(-cost, 'bank');
		else if (this.player.money.cash >= cost) await this.change(-cost, 'cash');
		else {
			notifications.error(this.player, 'Недостаточно средств!');

			return Promise.reject();
		}

		logger.info(
			`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ${product}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
      -------------------------------------------
      `
		);
	}

	async move(value, fromType, toType) {
		const amount = parseInt(value, 10);

		if (!MoneyHelper.isNumeric(amount) || amount < 0) return false;

		const status = await User.updateOne(
			{ _id: this.player.dbId, [`money.${fromType}`]: { $gt: amount - 1 } },
			{ $inc: { [`money.${fromType}`]: -amount, [`money.${toType}`]: amount } }
		);

		if (!status.nModified) {
			notifications.error(
				this.player,
				fromType === 'bank' ? 'Недостаточно банковских средств' : 'Недостаточно наличных'
			);

			return false;
		}

		this.player.money[fromType] -= amount;
		this.player.money[toType] += amount;

		this.updateMoney();

		logger.info(
			`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ATM exchange from ${fromType}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
      -------------------------------------------
      `
		);

		return true;
	}

	async transfer(value, type, id) {
		const cost = parseInt(value, 10);

		if (!MoneyHelper.isNumeric(cost) || cost < 0) return false;

		const amount = this.player.money[type];

		if (!amount || amount - cost < 0) {
			notifications.error(this.player, 'Недостаточно средств!');

			return false;
		}

		await User.bulkWrite([
			{
				updateOne: {
					filter: { _id: this.player.dbId },
					update: { $inc: { [`money.${type}`]: -cost } }
				}
			},
			{
				updateOne: {
					filter: { _id: id },
					update: { $inc: { [`money.${type}`]: cost } }
				}
			}
		]);

		this.player.money[type] -= cost;
		const user = mp.players.toArray().filter((player) => {
			if (!player || !player.loggedIn) return false;

			return player.dbId === id;
		})[0];

		if (user) {
			user.money[type] += cost;
			user.moneyHelper.updateMoney();
		}

		this.updateMoney();

		notifications.success(this.player, 'Успешная операция!');

		logger.info(
			`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: money transfer\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
			recipient: ${id}\n
      -------------------------------------------
      `
		);

		return true;
	}

	static async changeById(dbId: string, type: MoneyCurrency, amount: number, meta = '') {
		if (!MoneyHelper.isNumeric(amount)) throw new Error('wrong amount of money');

		const status = await User.updateOne(
			amount < 0 ? { _id: dbId, [`money.${type}`]: { $gt: -amount - 1 } } : { _id: dbId },
			{ $inc: { [`money.${type}`]: amount } }
		);
		if (!status.nModified) throw new Error('not enough money');

		const player = getPlayerByDbId(dbId);
		if (player) {
			player.money[type] += amount;
			player.dialog.showMoneyData(player.money);
		}

		logger.info(
			`\n dbId: ${dbId}\n
			value: ${amount} - ${typeof amount}\n
      product: ${meta}\n
      -------------------------------------------
      `
		);
	}
}

export default MoneyHelper;
