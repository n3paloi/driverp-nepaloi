import * as Validator from 'validator';
import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../../models/User';
import { xyInFrontOfPos } from '../../utils/vehicles';
import notifications from '../../helpers/notifications';
import objects from '../../helpers/objects';
import animations from '../../utils/animations';
import vehicleManager from '../vehicle';
import weapons from '../weapons';
import '../forbes';
import './calls';
import './contacts';

class Phone {
	private prices: any;

	private vehicleTimeout: number;

	constructor() {
		this.prices = {
			spawnVehicle: 100,
			randomNumber: 4000,
			customNumber: 1000
		};

		this.vehicleTimeout = 5;
	}

	canSpawnVehicle(player: PlayerMp, dbId: string) {
		const vehicles = Object.keys(player.vehicles);

		if (
			vehicles.indexOf(dbId) >= player.vehicleSlots &&
			player.vehicleSlots < vehicles.length
		) {
			return notifications.error(
				player,
				'Для вызова данного авто, приобретите дом классом выше или гараж!'
			);
		}

		return true;
	}

	async spawnPersonalVehicle(player: any, dbId: string) {
		try {
			if (player.carDelivery || !dbId || !this.canSpawnVehicle(player, dbId)) return;

			const data = player.vehicles[dbId];
			const vehicle = isNumber(data.id) ? mp.vehicles.at(data.id) : null;

			if (
				(vehicle && vehicle.name !== data?.name) ||
				data?.type === 'boat' ||
				data?.type === 'air'
			)
				return;

			if (vehicle && vehicle.getOccupants().length) {
				return notifications.error(player, 'В вашем ТС сидит пассажир!');
			}

			await player.moneyHelper.different(this.prices.spawnVehicle);

			const position = xyInFrontOfPos(player.position, player.heading, 3.0);

			setTimeout(() => {
				if (!mp.players.exists(player)) return;

				if (mp.vehicles.exists(vehicle) && vehicle.getOccupants().length) {
					player.carDelivery = false;

					return notifications.error(player, 'В ваше ТС кто-то сел...');
				}

				vehicleManager.spawnPlayerVehicle(player, dbId, position);

				player.carDelivery = false;
			}, this.vehicleTimeout * 500);

			notifications.info(
				player,
				`Механик доставит ваше ТС через ${this.vehicleTimeout} секунд`
			);

			player.carDelivery = true;
		} catch (err) {
			return Promise.reject();
		}
	}

	async showPhoneMenu(player: PlayerMp) {
		const canOpen = await rpc.callClient(player, 'Phone-CanOpen');

		if (!canOpen || player.cuff || player.getVariable('isPlayingAnim')) return;

		animations.playOnServer(player, 'phone_press');
		objects.attach(player, 'phone');

		weapons.hideCurrentWeapon(player);

		rpc.callClient(player, 'Phone-ShowMenu');
	}

	async buyRandomNumber(player: PlayerMp) {
		try {
			await player.moneyHelper.different(this.prices.randomNumber, 'phone number');

			const phoneNumber = await this.generatePhoneNumber();

			await this.setNewNumber(player, phoneNumber);

			return phoneNumber;
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	async buyCustomNumber(player: PlayerMp, phoneNumber: string) {
		try {
			if (
				!Validator.isLength(phoneNumber, { min: 6, max: 6 }) ||
				!phoneNumber.match(/^[0-9]+$/)
			) {
				return Promise.reject(new Error());
			}

			const isExists = await User.find({ 'phone.number': phoneNumber }).countDocuments();

			if (isExists) {
				notifications.error(player, 'Данный номер занят!');
				return Promise.reject(new Error());
			}

			const canBuy = await player.moneyHelper.change(
				-this.prices.customNumber,
				'drivepoints',
				'custom phone number'
			);
			if (!canBuy) {
				notifications.error(player, 'Недостаточно средств!');
				return Promise.reject();
			}

			await this.setNewNumber(player, phoneNumber);

			notifications.success(player, 'Успешная покупка!');

			return phoneNumber;
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	getPhoneData(player: PlayerMp) {
		const { number: phoneNumber, contacts, blackList: blacklist } = player.phone;

		return {
			phoneNumber,
			contacts,
			blacklist
		};
	}

	private async setNewNumber(player: PlayerMp, phoneNumber: string) {
		await User.findByIdAndUpdate(player.dbId, { $set: { 'phone.number': phoneNumber } });

		player.phone.number = phoneNumber;
	}

	private async generatePhoneNumber(): Promise<string> {
		let phoneNumber;

		do {
			const str = Math.floor(100000 + Math.random() * 900000).toString();
			const isExists = await User.findOne({ 'phone.number': str }).countDocuments();

			if (!isExists) phoneNumber = str;
		} while (!phoneNumber);

		return phoneNumber;
	}
}

const phone = new Phone();

mp.events.subscribe({
	'Phone-SpawnVehicle': (player, id) => phone.spawnPersonalVehicle(player, id),
	'Phone-CloseMenu': (player) => {
		objects.detach(player);
		animations.stopOnServer(player);
	},
	'Phone-BuyRandomNumber': (player) => phone.buyRandomNumber(player),
	'Phone-BuyCustomNumber': (player, number) => phone.buyCustomNumber(player, number),
	'Phone-LoadData': (player) => phone.getPhoneData(player)
});
mp.events.subscribeToDefault({ 'Keys-M': (player) => phone.showPhoneMenu(player) });

export default phone;