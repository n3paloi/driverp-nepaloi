/* eslint-disable @typescript-eslint/camelcase */
import * as rpc from 'rage-rpc';
import { isNull, isNumber } from 'lodash';
import Service from './service';
import VehicleModel from '../models/Vehicle';
import vehicleManager from '../basic/vehicle';
import vehicleList from '../data/vehicles';
import coords from '../data/services/lsCustoms';
import notifications from '../helpers/notifications';

class LsCustoms extends Service {
	private standCoord: { x: number; y: number; z: number };

	private prices: { [name: string]: any };

	private multipliers: { [name: string]: number };

	constructor() {
		super('Los Santos Customs', coords, { radius: 2.5 }, { model: 72, color: 4 });

		this.standCoord = {
			x: -210.2097930908203,
			y: -1325.9105224609375,
			z: 30.453493118286133
		};
		this.prices = {
			armour: {
				'-1': 500,
				0: 200000,
				1: 500000,
				2: 1000000,
				3: 2000000,
				4: 3500000
			},
			engine: {
				'-1': 3000,
				0: 10000,
				1: 40000,
				2: 80000,
				3: 160000
			},
			turbo: {
				'-1': 3000,
				0: 150000
			},
			horn: 5000,
			transmission: {
				'-1': 3000,
				0: 10000,
				1: 40000,
				2: 80000
			},
			glasses: {
				0: 1000,
				1: 5000,
				2: 2500,
				3: 1500
			},
			suspention: {
				'-1': 3000,
				0: 10000,
				1: 30000,
				2: 60000,
				3: 80000
			},
			brakes: {
				'-1': 3000,
				0: 10000,
				1: 40000,
				2: 80000
			},
			lights: 5000,
			neon: {
				'-1': 500,
				0: 8000,
				1: 8000,
				2: 10000,
				3: 10000,
				4: 40000,
				color: 10000
			},
			numbers: {
				color: 5000,
				text: 1900
			},
			wheels: {
				model: 25000,
				color: 15000,
				smoke: 25000,
				tyres: {
					0: 500,
					1: 30000
				}
			},
			paint: {
				primary: 15000,
				secondary: 20000,
				type: 15000
			},
			spoiler: 20000,
			bumpers: 40000,
			sideskirt: 15000,
			exhaust: 40000,
			frame: 20000,
			grille: 18000,
			hood: 30000,
			roof: 50000,
			livery: 40000
		};
		this.multipliers = {
			armour: 2,
			engine: 2,
			turbo: 2,
			horn: 0,
			transmission: 2,
			glasses: 0.5,
			suspention: 2,
			brakes: 2,
			lights: 0.5,
			neon: 0.5,
			numbers: 0,
			wheels: 0,
			paint: 0.5,
			spoiler: 0.5,
			bumpers: 0.5,
			sideskirt: 0.5,
			exhaust: 0.5,
			frame: 0.5,
			grille: 0.5,
			hood: 0.5,
			roof: 0.5,
			livery: 0.5
		};
	}

	private getPricesWithMargin(vehicle: VehicleMp) {
		const prices: { [name: string]: any } = {};

		Object.entries(this.prices).forEach(([name, data]) => {
			prices[name] = {};

			if (isNumber(data)) prices[name] = this.getPrice(vehicle, name, null, 0);
			else {
				Object.entries(data).forEach(([subtype, price]) => {
					if (isNumber(price)) {
						prices[name][subtype] = this.getPrice(vehicle, name, subtype, +subtype);
					} else prices[name][subtype] = price;
				});
			}
		});

		return prices;
	}

	getPrice(vehicle: VehicleMp, type: string, subtype: string, model: number) {
		let cost = 0;

		if (type === 'wheels' && subtype === 'tyres') {
			cost = this.prices[type][subtype][model];
		} else if (
			type === 'wheels' ||
			type === 'paint' ||
			subtype === 'color' ||
			(type === 'transmission' && subtype === 'type')
		) {
			cost = this.prices[type][subtype];
		} else if (
			type === 'lights' ||
			type === 'horn' ||
			typeof this.prices[type] === 'number'
		) {
			cost = this.prices[type];
		} else if (this.prices[type][model]) {
			cost = this.prices[type][model];
		} else if (this.prices[type][subtype]) {
			cost = this.prices[type][subtype];
		}

		const vehiclePrice = vehicleList[vehicle?.name]?.price ?? 0;
		const margin = (vehiclePrice / 100) * this.multipliers[type];

		return cost + margin;
	}

	buyCustomNumberText = async (player: PlayerMp, text: string) => {
		const price = this.prices.numbers.text;

		if (text.trim().length < 4) {
			return notifications.error(player, 'Минимальная длина номерного знака 4 символа!');
		}

		const isExists = await VehicleModel.findOne({ numberPlate: text });

		if (isExists) {
			return notifications.error(player, 'Данный номерной знак уже зарегистрирован');
		}

		const canBuy = await player.moneyHelper.change(-price, 'drivepoints', 'lsc number');

		if (!canBuy) {
			return notifications.error(player, 'Недостаточно средств!');
		}

		await vehicleManager.setNumberPlate(player.vehicle, text);

		notifications.success(player, 'Операция успешна!');
	};

	setTuning(vehicle, type, subtype, model, color) {
		const tuning = vehicle.getVariable('tuning');
		const nullExists = ['smoke', 'primary', 'secondary', 'color'];

		if (!nullExists.includes(subtype) && isNull(model)) {
			console.error(type, subtype, model, 'LSC null exists');

			return tuning;
		}

		if (
			(type === 'wheels' && subtype === 'smoke') ||
			(type === 'paint' && subtype !== 'type') ||
			(type === 'neon' && subtype === 'color')
		) {
			tuning[type][subtype] = color;
		} else if (
			(type === 'wheels' && subtype === 'tyres') ||
			(type !== 'numbers' && subtype === 'color') ||
			type === 'bumpers' ||
			type === 'paint'
		) {
			tuning[type][subtype] = model;
		} else if (type === 'wheels') {
			tuning[type] = { ...tuning[type], model };
		} else if (type === 'neon' && !subtype) {
			tuning[type].position = model;
		} else tuning[type] = model;

		return tuning;
	}

	buyTuning = async (
		player: PlayerMp,
		type: string,
		subtype: string,
		model: number,
		color: RGB
	) => {
		try {
			const { vehicle } = player;

			if (!vehicle || !vehicleManager.isOwner(vehicle, player)) {
				return Promise.reject(new Error());
			}

			const cost = this.getPrice(vehicle, type, subtype, model);
			await player.moneyHelper.different(cost, 'tuning');

			const tuning = this.setTuning(vehicle, type, subtype, model, color);

			await VehicleModel.findByIdAndUpdate(vehicle.dbId, {
				$set: { tuning }
			});

			vehicle.setVariable('tuning', tuning);
			notifications.success(player, 'Успешная покупка!');

			return tuning;
		} catch (err) {
			return Promise.reject(new Error());
		}
	};

	pressedKeyOnMainShape(player: PlayerMp) {
		if (!player.vehicle || player.job) return;

		const index = mp.colshapes.at(player.colshapeId).customData;

		if (!vehicleManager.isOwner(player.vehicle, player)) {
			return notifications.error(player, 'Сядьте в личный транспорт');
		}

		if (player.vehicle.getOccupants().length > 1) {
			return notifications.error(player, 'Высадите пассажиров для въезда в LS Customs');
		}

		const { vehicle } = player;
		const { x, y, z } = this.standCoord;

		vehicle.position = new mp.Vector3(x, y, z - 0.5);
		player.serviceIndex = index;
		player.dimension = player.id + 1;
		vehicle.dimension = player.dimension;

		setTimeout(() => {
			vehicle.rotation = new mp.Vector3(0, 0, 322.911);
		}, 100);

		rpc.callClient(player, 'LsCustoms-ShowBuyerMenu', this.getPricesWithMargin(vehicle));
	}
}

const lsCustoms = new LsCustoms();

mp.events.subscribe({
	'LsCustoms-Buy': lsCustoms.buyTuning,
	'LsCustoms-BuyCustomNumber': lsCustoms.buyCustomNumberText,
	'LsCustoms-CloseMenu': (player: PlayerMp) => {
		const { x, y, z } = coords[player.serviceIndex];

		player.vehicle.position = new mp.Vector3(x, y, z - 0.5);
		player.dimension = 0;
		player.vehicle.dimension = 0;

		setTimeout(() => {
			try {
				if (!mp.players.exists(player)) return;

				player.vehicle.rotation = new mp.Vector3(0, 0, 90);
			} catch (err) {
				console.log(err);
			}
		}, 100);
	}
});
