import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import cameraHelper from '../helpers/camera';
import browser from '../utils/browser';
import vehicleSync from '../basic/vehicle/sync';

const player = mp.players.local;
const characters = {
	speed: 0,
	brakes: 0,
	boost: 0,
	clutch: 0
};
const cameraData = {
	position: new mp.Vector3(-210.774, -1318.333, 31.193),
	point: new mp.Vector3(-209.623, -1334.759, 31.829)
};

let vehicle: VehicleMp;

const categoryPositions = {
	exhaust: {
		heading: 85.0
	},
	sideskirt: {
		heading: 148.9986
	},
	hood: {
		heading: 265.0
	},
	armour: {
		heading: 148.9986
	},
	spoiler: {
		heading: 85.0
	},
	grille: {
		heading: 265.0
	},
	roof: {
		heading: 148.9986
	},
	frame: {
		heading: 160.9986
	},
	front: {
		heading: 265.0
	},
	rear: {
		heading: 85.0
	},
	engine: {
		heading: 265.0
	},
	turbo: {
		heading: 265.0
	},
	horn: {
		heading: 148.9986
	},
	transmission: {
		heading: 265.0
	},
	glasses: {
		heading: 148.9986
	},
	suspention: {
		heading: 148.9986
	},
	neon: {
		heading: 148.9986
	},
	brakes: {
		heading: 265.0
	},
	lights: {
		heading: 265.0
	},
	numbers: {
		heading: 85.0
	},
	wheels: {
		heading: 148.9986
	},
	paint: {
		heading: 160.9986
	},
	livery: {
		heading: 160.9986
	}
};

const categoryModsIds = {
	engine: 11,
	turbo: 18,
	armour: 16,
	transmission: 13,
	suspention: 15,
	brakes: 12,
	horn: 14,
	wheels: 23,
	spoiler: 0,
	sideskirt: 3,
	exhaust: 4,
	hood: 7,
	roof: 10,
	frame: 5,
	grille: 6,
	livery: 48,
	bumpers: {
		front: 1,
		rear: 2
	}
};

const customMods = {
	spoiler: 0,
	sideskirt: 3,
	exhaust: 4,
	hood: 7,
	roof: 10,
	frame: 5,
	grille: 6,
	wheels: 23,
	bumpers: {
		front: 1,
		rear: 2
	},
	livery: 48
};

function updateVehicleCharacters() {
	characters.speed = Math.round(
		mp.game.vehicle.getVehicleModelMaxSpeed(vehicle.model) / 1.2
	);
	characters.brakes = vehicle.getMaxBraking() * 100;
	characters.boost = vehicle.getAcceleration() * 100;
	characters.clutch = vehicle.getMaxTraction() * 10;
}

function getNamesForDetail(count: number) {
	const names = [];

	for (let i = 1; i <= count; i++) {
		names.push(`Вариант ${i}`);
	}

	return names;
}

mp.events.subscribe({
	'LsCustoms-ShowBuyerMenu': (prices) => {
		cameraHelper.set(cameraData.position, new mp.Vector3(0, 0, 0), cameraData.point, 50);

		vehicle = player.vehicle;
		vehicle.setVelocity(0, 0, 0);
		vehicle.setDoorsShut(true);
		vehicle.setOnGroundProperly();

		updateVehicleCharacters();

		mp.game.invoke(
			'0xE65F427EB70AB1ED',
			-1,
			'MOD_SHOPS_ENTER_ENGINE_BLIP',
			vehicle.handle,
			0,
			0,
			0
		); // Engine sound

		browser.showPage('services/lsc', {
			prices,
			tuning: vehicle.getVariable('tuning'),
			characters
		});
	},
	'LsCustoms-ChangePage': (name: string) => {
		updateVehicleCharacters();

		if (name !== 'bumpers') vehicle.setHeading(categoryPositions[name].heading);

		return characters;
	},
	'LsCustoms-SelectItem': (category: string, item: number, subcategory: string) => {
		if (isNumber(categoryModsIds[category]) && !subcategory) {
			if (category === 'turbo') vehicle.toggleMod(18, true);

			vehicle.setMod(categoryModsIds[category], item);

			updateVehicleCharacters();
		}

		if (category === 'bumpers') {
			vehicle.setHeading(categoryPositions[subcategory].heading);
			vehicle.setMod(categoryModsIds.bumpers[subcategory], item);
		}

		if (category === 'paint') {
			vehicle.setModColor1(item, 0, 0);
			vehicle.setModColor2(item, 0);
		}

		if (category === 'wheels') {
			const tuning = vehicle.getVariable('tuning');

			switch (subcategory) {
				case 'color': {
					const { pearlescentColor } = vehicle.getExtraColours(0, 0);

					return vehicle.setExtraColours(pearlescentColor, item);
				}

				case 'tyres':
					mp.game.invoke(
						'0x6AF0636DDEDCB6DD',
						vehicle.handle,
						23,
						vehicle.getMod(23),
						!!item
					);
					break;

				default: {
					vehicle.setMod(categoryModsIds[category], item);

					mp.game.invoke(
						'0x6AF0636DDEDCB6DD',
						vehicle.handle,
						23,
						vehicle.getMod(23),
						!!tuning.wheels.tyres
					);
				}
			}
		} else {
			switch (category) {
				case 'neon':
					if (item === 4) {
						for (let i = 0; i < 4; i++) vehicle.setNeonLightEnabled(i, true);
					} else {
						for (let i = 0; i < 4; i++) vehicle.setNeonLightEnabled(i, false);

						vehicle.setNeonLightEnabled(item, true);
					}
					break;

				case 'horn':
					vehicle.startHorn(3000, mp.game.joaat('HELDDOWN'), false);
					break;

				case 'lights':
					vehicle.setLights(2);
					vehicle.toggleMod(22, true);

					mp.game.invoke('0xE41033B25D003A07', vehicle.handle, item);
					break;

				case 'numbers':
					vehicle.setNumberPlateTextIndex(item);
					break;

				case 'glasses':
					vehicle.setWindowTint(item);
					break;

				default:
					break;
			}
		}

		return characters;
	},
	'LsCustoms-ChangeColor': (
		category: string,
		subcategory: string,
		color: { r: number; g: number; b: number }
	) => {
		const { r, g, b } = color;

		switch (category) {
			case 'paint':
				if (subcategory === 'primary') vehicle.setCustomPrimaryColour(r, g, b);
				else vehicle.setCustomSecondaryColour(r, g, b);
				break;
			case 'neon':
				vehicle.setNeonLightsColour(r, g, b);
				break;
			case 'wheels':
				vehicle.toggleMod(20, true);
				vehicle.setTyreSmokeColor(r, g, b);
				break;
			default:
				break;
		}
	},
	'LsCustoms-GetCustomDetails': () => {
		const items = {};

		Object.entries(customMods).forEach(([name, item]) => {
			if (isNumber(item)) {
				items[name] = getNamesForDetail(vehicle.getNumMods(item));
			} else {
				items[name] = {
					front: getNamesForDetail(vehicle.getNumMods(item.front)),
					rear: getNamesForDetail(vehicle.getNumMods(item.rear))
				};
			}
		});

		return items;
	},
	'LsCustoms-RotateVehicle': (value: number) => {
		vehicle.setHeading(vehicle.getHeading() + value);
	},
	'LsCustoms-CloseMenu': () => {
		vehicleSync.syncTuning(vehicle);
		vehicle.freezePosition(false);
		vehicle = null;

		cameraHelper.reset();
		browser.hidePage();

		rpc.callServer('LsCustoms-CloseMenu');
	}
});
