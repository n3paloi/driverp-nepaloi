import * as rpc from 'rage-rpc';
import browser from '../../utils/browser';
import ShopCamera from './camera';

const player = mp.players.local;

mp.peds.new(0xe75b4b1c, new mp.Vector3(-1106.0996, -2891.4924, 13.9459), 237.4605); // air
mp.peds.new(0x6c9dd7c9, new mp.Vector3(-753.59, -1511.628, 5.017), 14.12); // boat
mp.peds.new(0x3a5201c5, new mp.Vector3(485.251, -1307.362, 29.259), 209.672); // moto
mp.peds.new(0xb7c61032, new mp.Vector3(-31.931, -1113.984, 26.422), 24.743); // car

const coords = {
	carshop: {
		position: new mp.Vector3(-44.651, -1097.625, 26),
		rotation: 115,
		camera: {
			position: new mp.Vector3(-45.528, -1104.588, 26.826),
			point: new mp.Vector3(-43.646, -1091.035, 26.614)
		}
	},
	motoshop: {
		position: new mp.Vector3(490.935, -1333.256, 28.796),
		rotation: 343.766,
		camera: {
			position: new mp.Vector3(497.446, -1330.668, 30.179),
			point: new mp.Vector3(480.343, -1337.355, 29.979)
		}
	},
	boatshop: {
		position: new mp.Vector3(-813.275, -1507.794, -0.5),
		rotation: 23.169,
		camera: {
			position: new mp.Vector3(-826.449, -1506.624, 1.916),
			point: new mp.Vector3(-760.355, -1515.922, 5.939)
		}
	},
	airshop: {
		position: new mp.Vector3(-1507.744, -2701.061, 14.547),
		rotation: 355.963,
		camera: {
			position: new mp.Vector3(-1517.589, -2688.863, 15.358),
			point: new mp.Vector3(-1508.34, -2701.298, 13.694)
		}
	}
};

class VehicleShop {
	private type = '';

	private prices: { [name: string]: number } = {};

	private testDrive = false;

	private vehicle?: VehicleMp;

	private playerPosition?: Vector3Mp;

	private camera?: ShopCamera;

	constructor() {
		mp.events.subscribeToDefault({
			playerLeaveVehicle: this.stopTestDrive.bind(this)
		});

		mp.events.subscribe({
			'VehicleShop-ShowBuyerMenu': this.showMenu.bind(this),
			'VehicleShop-SetVeh': (model: string) =>
				setTimeout(() => this.spawnVehicle(model), 550),
			'VehicleShop-StartTest': this.startTestDrive.bind(this),
			'VehicleShop-GetChars': this.getVehicleCharacters.bind(this),
			'VehicleShop-CloseMenu': this.closeMenu.bind(this)
		});
	}

	private showMenu(type: string, prices: { [name: string]: number }) {
		const { camera } = coords[type];
		this.camera = new ShopCamera(camera.position, camera.point);

		this.playerPosition = player.position;
		player.setHelmet(false);

		browser.showPage('services/vehicle_shop', { type, prices });

		this.type = type;
		this.prices = prices;
	}

	private closeMenu() {
		if (this.vehicle) {
			this.vehicle.destroy();
			this.vehicle = null;
		}

		if (!this.testDrive) {
			this.resetPlayer();
			this.playerPosition = null;
			this.type = '';
			this.prices = {};

			rpc.callServer('VehicleShop-Exit');
		}

		this.camera.reset();
		browser.hidePage();
	}

	private async startTestDrive(model: string) {
		if (this.testDrive || !mp.vehicles.exists(this.vehicle)) return;

		await rpc.callServer('TestDrive-Start', [player.position, model]);

		this.testDrive = true;
		this.closeMenu();
		player.setAlpha(255);
	}

	private async stopTestDrive() {
		if (!this.testDrive) return;

		await rpc.callServer('TestDrive-Stop');

		this.testDrive = false;
		this.resetPlayer();
		this.showMenu(this.type, this.prices);
	}

	private async spawnVehicle(name: string) {
		if (this.vehicle) this.vehicle.destroy();
		player.setAlpha(0);

		const { position, rotation } = coords[this.type];

		this.vehicle = mp.vehicles.new(mp.game.joaat(name), position, {
			dimension: player.dimension,
			heading: rotation,
			numberPlate: 'MIAMIRP1'
		});
		while (!mp.game.entity.isAnEntity(this.vehicle.handle)) mp.game.wait(0);

		this.vehicle.setHeading(rotation);
		this.vehicle.setDirtLevel(0);

		player.taskEnterVehicle(this.vehicle.handle, 2000, -1, 2, 16, 0);
		this.vehicle.freezePosition(true);

		mp.game.audio.setFrontendRadioActive(false);
	}

	private resetPlayer() {
		player.setCoordsNoOffset(
			this.playerPosition.x,
			this.playerPosition.y,
			this.playerPosition.z,
			false,
			false,
			false
		);
		player.setAlpha(255);
		player.setHelmet(true);
	}

	private async getVehicleCharacters(model: string) {
		const hash = mp.game.joaat(model);
		const chars = {
			tank: 0,
			trunk: 0,
			speed: Math.round(mp.game.vehicle.getVehicleModelMaxSpeed(hash) / 1.2),
			boost: Math.round(mp.game.vehicle.getVehicleModelAcceleration(hash) * 100),
			brakes: Math.round(mp.game.vehicle.getVehicleModelMaxBraking(hash) * 100),
			clutch: Math.round(mp.game.vehicle.getVehicleModelMaxTraction(hash) * 10)
		};

		const data = await rpc.callServer('Vehicle-GetModelInfo', model);
		return { ...chars, ...data };
	}
}

const vehShop = new VehicleShop();
