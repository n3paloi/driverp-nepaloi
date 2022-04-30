import browser from './browser';

enum ClothesComponent {
	FACE = 0,
	MASK = 1,
	HAIR = 2,
	TORSO = 3,
	LEGS = 4,
	BAG = 5,
	SHOES = 6,
	ACCESSORIES = 7,
	UNDERSHIRTS = 8,
	ARMOR = 9,
	DECALS = 10,
	TOPS = 11
}

enum PlayerProp {
	HAT = 0,
	GLASSES = 1,
	EARS = 2,
	WATCH = 6,
	BRACELET = 7
}

let camera: CameraMp;
let bodyCamStart = new mp.Vector3(0, 0, 0);

const player = mp.players.local;

const clothesCamValues = {
	hats: { angle: 0, dist: 0.7, height: 0.6 },
	tops: { angle: 0, dist: 1.4, height: 0.2 },
	torso: { angle: 0, dist: 1.4, height: 0.2 },
	torso2: { angle: 0, dist: 1.4, height: 0.2 },
	bags: { angle: 0, dist: 1.4, height: 0.2 },
	armor: { angle: 0, dist: 1.4, height: 0.2 },
	underwears: { angle: 0, dist: 1.4, height: 0.2 },
	legs: { angle: 0, dist: 1.4, height: -0.4 },
	shoes: { angle: 0, dist: 1.2, height: -0.7 },
	masks: { angle: 0, dist: 0.7, height: 0.6 },
	ears: { angle: 0, dist: 0.7, height: 0.6 },
	watches: { angle: 74, dist: 1, height: 0 },
	glasses: { angle: 0, dist: 0.7, height: 0.6 },
	jewerly: { angle: 0, dist: 1, height: 0.3 }
};

function getCameraOffset(pos, angle, dist) {
	angle *= 0.0174533;

	pos.y += dist * Math.sin(angle);
	pos.x += dist * Math.cos(angle);

	return pos;
}

class ClothesViewer {
	constructor() {
		mp.events.subscribe({
			'ClothesViewer-ShowMenu': this.showMenu.bind(this),
			'ClothesViewer-SetItem': this.setClothes.bind(this),
			'ClothesViewer-OpenCategory': this.openCategory.bind(this)
		});
	}

	private showMenu() {
		player.freezePosition(true);
		bodyCamStart = player.position;

		const camValues = {
			angle: player.getRotation(2).z + 90,
			dist: 1.3,
			height: 0.3
		};
		const position = getCameraOffset(
			new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.height),
			camValues.angle,
			camValues.dist
		);

		camera = mp.cameras.new('default', position, new mp.Vector3(0, 0, 0), 50);
		camera.pointAtCoord(
			bodyCamStart.x,
			bodyCamStart.y,
			bodyCamStart.z + camValues.height
		);
		camera.setActive(true);
		mp.game.cam.renderScriptCams(true, false, 500, true, false);

		browser.showPage('clothes_viewer');
	}

	private openCategory(name: string) {
		const camValues = clothesCamValues[name];
		const camPos = getCameraOffset(
			new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.height),
			player.getRotation(2).z + 90 + camValues.angle,
			camValues.dist
		);

		camera.setCoord(camPos.x, camPos.y, camPos.z);
		camera.pointAtCoord(
			bodyCamStart.x,
			bodyCamStart.y,
			bodyCamStart.z + camValues.height
		);
	}

	private setClothes(type: string, style: number, color = 0) {
		switch (type) {
			case 'tops':
				player.setComponentVariation(ClothesComponent.TOPS, style, color, 0);
				break;
			case 'underwears':
				player.setComponentVariation(ClothesComponent.TOPS, style, color, 0);
				break;
			case 'torso':
				player.setComponentVariation(ClothesComponent.TORSO, style, color, 0);
				break;
			case 'torso2':
				player.setComponentVariation(ClothesComponent.UNDERSHIRTS, style, color, 0);
				break;
			case 'legs':
				player.setComponentVariation(ClothesComponent.LEGS, style, color, 0);
				break;
			case 'shoes':
				player.setComponentVariation(ClothesComponent.SHOES, style, color, 0);
				break;
			case 'masks':
				player.setComponentVariation(ClothesComponent.MASK, style, color, 0);
				break;
			case 'bags':
				player.setComponentVariation(ClothesComponent.BAG, style, color, 0);
				break;
			case 'jewerly':
				player.setComponentVariation(ClothesComponent.ACCESSORIES, style, color, 0);
				break;
			case 'hats':
				player.setPropIndex(PlayerProp.HAT, style, color, true);
				break;
			case 'ears':
				player.setPropIndex(PlayerProp.EARS, style, color, true);
				break;
			case 'armor':
				player.setPropIndex(ClothesComponent.ARMOR, style, color, true);
				break;
			case 'watches':
				player.setPropIndex(PlayerProp.WATCH, style, color, true);
				break;
			case 'glasses':
				player.setPropIndex(PlayerProp.GLASSES, style, color, true);
				break;
			default:
				break;
		}

		mp.console(`type: ${type}, style: ${style}, color: ${color}`);
	}
}

const clothesViewer = new ClothesViewer();
