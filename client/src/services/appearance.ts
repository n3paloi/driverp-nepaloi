import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import { setCharacterData, getCharacterData } from '../character/creator';

mp.peds.new(0x4117d39b, new mp.Vector3(320.471, -567.448, 43.283), 135.322, 0);
mp.peds.new(0x4117d39b, new mp.Vector3(1819.062, 3672.333, 34.27), 308.213, 0);
mp.peds.new(0x4117d39b, new mp.Vector3(-253.454, 6314.751, 32.427), 312.09, 0);

const player = mp.players.local;

let camera = null;
let bodyCamStart = new mp.Vector3(0, 0, 0);

function getCameraOffset(pos, angle, dist) {
	angle *= 0.0174533;

	pos.y += dist * Math.sin(angle);
	pos.x += dist * Math.cos(angle);

	return pos;
}

mp.events.subscribe({
	'Appearance-ShowMenu': (price: number, appearance: any) => {
		player.freezePosition(true);

		bodyCamStart = player.position;

		const camValues = {
			angle: player.getRotation(2).z + 90,
			dist: 0.7,
			height: 0.6
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

		setCharacterData(appearance);

		browser.showPage('services/appearance', { price });
	},
	'Appearance-Save': () => {
		rpc.callServer('Appearance-Buy', getCharacterData());
	},
	'Appearance-CloseMenu': () => {
		if (camera) {
			camera.setActive(false);
			mp.game.cam.renderScriptCams(false, true, 0, true, true);
			camera.destroy();
			camera = null;
			player.freezePosition(false);
		}

		browser.hidePage();

		rpc.callServer('Clothes-LoadPlayerClothes');
		rpc.callServer('CharCreator-LoadPlayerCharacter');
	}
});
