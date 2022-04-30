import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import browser from '../utils/browser';

type Clothes = {
	[name: string]: number[][];
};

const player = mp.players.local;

const components = {
	tops: 11,
	underwears: 11,
	legs: 4,
	shoes: 6,
	masks: 1,
	jewerly: 7
};
const props = {
	hats: 0,
	glasses: 1,
	watches: 6
};

const сamPositions: {
	[name: string]: { angle: number; dist: number; height: number };
} = {
	hats: { angle: 0, dist: 0.7, height: 0.6 },
	tops: { angle: 0, dist: 1.4, height: 0.2 },
	underwears: { angle: 0, dist: 1.4, height: 0.2 },
	legs: { angle: 0, dist: 1.4, height: -0.4 },
	shoes: { angle: 0, dist: 1.2, height: -0.7 },
	masks: { angle: 0, dist: 0.7, height: 0.6 },
	watches: { angle: 74, dist: 1, height: 0 },
	glasses: { angle: 0, dist: 0.7, height: 0.6 },
	jewerly: { angle: 0, dist: 1, height: 0.3 }
};
const camMenuValues = { angle: 0, dist: 1, height: 0 };

class ClothingShop {
	private type = 'hat';

	private item = 0;

	private clothes: Clothes = {};

	private camera: CameraMp;

	constructor() {
		mp.events.subscribe({
			'ClothingShop-ShowBuyerMenu': this.showBuyerMenu.bind(this),
			'ClothingShop-CloseMenu': this.closeMenu.bind(this),
			'ClothingShop-SetCategory': this.setType.bind(this),
			'ClothingShop-ChangeItem': this.changeItem.bind(this),
			'ClothingShop-ChangeCamera': this.changeCamera.bind(this),
			'Clothes-SavePrice': (price: number) => {
				const style = this.getStyleOfItem();

				rpc.callServer('Clothes-SavePrice', [this.type, style, price]);
			}
		});
	}

	private showBuyerMenu() {
		player.freezePosition(true);

		browser.showPage('services/clothing_shop');
	}

	private async closeMenu() {
		this.camera.setActive(false);

		mp.game.cam.renderScriptCams(false, false, 0, true, false);

		this.camera.destroy();
		this.camera = null;

		this.clothes = {};

		player.freezePosition(false);

		await rpc.callServer('ClothingShop-CloseMenu');

		browser.hidePage();
	}

	private async getClothesByType(type: string) {
		if (this.clothes[type]) return;

		const items = await rpc.callServer('ClothingShop-GetClothes', type);

		this.clothes[type] = items;
	}

	private updateClothesData() {
		rpc.callBrowsers('ClothingShop-SetData', {
			price: this.getPriceOfItem(),
			colors: this.getColorsAmount()
		});
	}

	private async changeItem(item: number, color: number, next = false) {
		this.item = item;

		const style = this.getStyleOfItem();

		await rpc.callServer('ClothingShop-SetItem', [this.type, { style, color }]);

		if (next) this.updateClothesData();
	}

	private async setType(type: string) {
		this.type = type;

		await this.getClothesByType(type);

		this.changeItem(0, 0, true);
		this.toggleCamera();

		return this.clothes[type].length;
	}

	private getColorsAmount() {
		const style = this.getStyleOfItem();

		return isNumber(components[this.type])
			? player.getNumberOfTextureVariations(components[this.type], style)
			: player.getNumberOfPropTextureVariations(props[this.type], style);
	}

	private getPriceOfItem() {
		return this.clothes[this.type][this.item][1];
	}

	private getStyleOfItem() {
		return this.clothes[this.type][this.item][0];
	}

	private toggleCamera() {
		if (this.camera) this.camera.destroy();

		const { position } = player;
		const camData = сamPositions[this.type];

		const offset = this.getCameraOffset(
			new mp.Vector3(position.x, position.y, position.z + camData.height),
			player.getRotation(2).z + 90,
			camData.dist
		);

		this.camera = mp.cameras.new('default', offset, new mp.Vector3(0, 0, 0), 80);

		this.camera.pointAtCoord(position.x, position.y, position.z + camData.height);
		this.camera.setActive(true);

		mp.game.cam.renderScriptCams(true, false, 0, true, false);
	}

	private getCameraOffset(position: Vector3Mp, angle: number, dist: number) {
		angle *= 0.0174533;

		position.y += dist * Math.sin(angle);
		position.x += dist * Math.cos(angle);

		return position;
	}

	private changeCamera(action: string, state: any) {
		const { position } = player;

		switch (action) {
			case 'rotate':
				camMenuValues.angle = state[action];
				break;
			case 'height':
				camMenuValues.height = state[action];
				break;
			case 'depth':
				camMenuValues.dist = state[action];
				break;
			default:
				break;
		}

		const camPos = this.getCameraOffset(
			new mp.Vector3(position.x, position.y, position.z + camMenuValues.height),
			player.getRotation(2).z + 90 + camMenuValues.angle,
			camMenuValues.dist
		);

		this.camera.setCoord(camPos.x, camPos.y, camPos.z);
		this.camera.pointAtCoord(position.x, position.y, position.z + camMenuValues.height);
	}
}

const shop = new ClothingShop();
