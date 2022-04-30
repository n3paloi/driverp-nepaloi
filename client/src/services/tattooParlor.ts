import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import tattoosList from '../configs/tattoos';
import peds from '../configs/peds/tattooMasters';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0xdb134533);

const player = mp.players.local;
const bodyCamValues = {
	torso: { Angle: 0, Dist: 1, Height: 0.2 },
	head: { Angle: 0, Dist: 1, Height: 0.5 },
	leftarm: { Angle: 55, Dist: 1, Height: 0.1 },
	rightarm: { Angle: 305, Dist: 1, Height: 0.1 },
	leftleg: { Angle: 55, Dist: 1, Height: -0.6 },
	rightleg: { Angle: 305, Dist: 1, Height: -0.6 }
};

const camMenuValues = { angle: 0, dist: 1, height: 0 };
let bodyCamStart = new mp.Vector3(0, 0, 0);
let camera = null;
let playerTattoos = [];

function getCameraOffset(pos, angle, dist) {
	angle *= 0.0174533;

	pos.y += dist * Math.sin(angle);
	pos.x += dist * Math.cos(angle);

	return pos;
}

mp.events.subscribe({
	'TattooParlor-ShowBuyerMenu': (tattoos, prices) => {
		player.setVelocity(0.0, 0.0, 0.0);

		bodyCamStart = player.position;
		playerTattoos = tattoos;

		const camValues = bodyCamValues.torso;
		const pos = getCameraOffset(
			new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height),
			player.getRotation(2).z + 90 + camValues.Angle,
			camValues.Dist
		);

		camera = mp.cameras.new('default', pos, new mp.Vector3(0, 0, 0), 50);

		camera.pointAtCoord(
			bodyCamStart.x,
			bodyCamStart.y,
			bodyCamStart.z + camValues.Height
		);
		camera.setActive(true);

		mp.game.cam.renderScriptCams(true, false, 500, true, false);

		browser.showPage('services/tattoo_parlor', {
			tattoos: tattoosList,
			gender: player.isMale() ? 'male' : 'female',
			prices
		});
	},
	'TattooParlor-Set': (tattoo) => {
		let isExists = false;
		const hash = player.isMale() ? tattoo.texture.male : tattoo.texture.female;

		player.clearDecorations();

		playerTattoos.forEach((item) => {
			if (item.texture === hash) isExists = true;

			player.setDecoration(mp.game.joaat(item.dictionary), mp.game.joaat(item.texture));
		});

		player.setDecoration(mp.game.joaat(tattoo.dictionary), mp.game.joaat(hash));

		const camValues = bodyCamValues[tattoo.bodyPosition];
		const camPos = getCameraOffset(
			new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height),
			player.getRotation(2).z + 90 + camValues.Angle,
			camValues.Dist
		);

		camera.setCoord(camPos.x, camPos.y, camPos.z);
		camera.pointAtCoord(
			bodyCamStart.x,
			bodyCamStart.y,
			bodyCamStart.z + camValues.Height
		);

		return isExists;
	},
	'TattooParlor-CamCB': (action, state) => {
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

		const camPos = getCameraOffset(
			new mp.Vector3(
				bodyCamStart.x,
				bodyCamStart.y,
				bodyCamStart.z + camMenuValues.height
			),
			player.getRotation(2).z + 90 + camMenuValues.angle,
			camMenuValues.dist
		);

		camera.setCoord(camPos.x, camPos.y, camPos.z);
		camera.pointAtCoord(
			bodyCamStart.x,
			bodyCamStart.y,
			bodyCamStart.z + camMenuValues.height
		);
	},
	'TattooParlor-CloseMenu': () => {
		camera.setActive(false);
		mp.game.cam.renderScriptCams(false, false, 500, true, false);
		camera.destroy();

		browser.hidePage();

		camera = null;
		playerTattoos = [];

		rpc.callServer('TattooParlor-CloseMenu');
	}
});
