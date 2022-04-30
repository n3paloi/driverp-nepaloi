import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import { setCharacterData, getCharacterData } from '../character/creator';

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
	'Barbershop-ShowBuyerMenu': (price: number, appearance: any) => {
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

		browser.showPage('services/barbershop', { price, gender: player.isMale() ? 0 : 1 });
	},

	'Barbershop-Buy': () => {
		rpc.callServer('Barbershop-Buy', getCharacterData());
	},

	'Barbershop-CloseMenu': () => {
		camera.setActive(false);
		mp.game.cam.renderScriptCams(false, true, 0, true, true);
		camera.destroy();
		camera = null;

		browser.hidePage();
		player.freezePosition(false);

		rpc.callServer('Barbershop-CloseMenu');
	}
});
