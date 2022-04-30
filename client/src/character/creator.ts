import * as rpc from 'rage-rpc';
import browser from '../utils/browser';

let camera = null;
const player = mp.players.local;

const character = {
	gender: 0,
	skindata: [0, 0, 0.5, 6],
	facedata: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	hair: {
		style: 0,
		color: [0, 0]
	},
	brow: {
		style: 0,
		opacity: 1
	},
	beard: {},
	headOverlayData: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
	tattoos: []
};

export function getCharacterData() {
	return character;
}

export function setCharacterData(data) {
	Object.assign(character, data);
}

mp.events.subscribe({
	'CharCreator-OpenMenu': () => {
		camera = mp.cameras.new(
			'Cam',
			{ x: 402.6, y: -998.75, z: -98.32 },
			{ x: 0, y: 0, z: 358 },
			15
		);

		camera.setActive(true);
		mp.game.cam.renderScriptCams(true, true, 20000000000000000000000000, false, false);

		browser.showPage('character_creator');
	},

	'CharCreator-UpdateSkinOptions': (...skindata: number[]) => {
		character.skindata = skindata;

		player.setHeadBlendData(
			skindata[0],
			skindata[1],
			0,
			skindata[0],
			skindata[1],
			0,
			skindata[2],
			skindata[3],
			0.0,
			true
		);
	},

	'CharCreator-ChangeGender': (gender: number) => {
		character.gender = gender;

		rpc.callServer('CharCreator-ChangeGender', gender);
	},

	'CharCreator-UpdateFaceOptions': (index: number, scale: number) => {
		character.facedata[index] = scale;

		player.setFaceFeature(index, scale);
	},

	'CharCreator-UpdateHairColor': (...hairColor: number[]) => {
		character.hair.color = hairColor;

		player.setHairColor(hairColor[0], hairColor[1]);
	},

	'CharCreator-UpdateBrow': (data: { style: number; opacity: number }) => {
		character.brow = data;

		player.setHeadOverlay(2, data.style, data.opacity, 1, 1);
	},

	'CharCreator-UpdateBeard': (data: { style: number; opacity: number }) => {
		character.beard = data;

		player.setHeadOverlay(1, data.style, data.opacity, 1, 1);
	},

	'CharCreator-UpdateHairStyle': (style: number) => {
		character.hair.style = style;

		rpc.callServer('CharCreator-UpdateHairStyle', style);
	},

	'CharCreator-UpdateHeadOverlay': (id: number, style: number) => {
		character.headOverlayData[id] = style;

		player.setHeadOverlay(id, style === -1 ? 255 : style, 1.0, 0, 0);
	},

	'CharCreator-Save': () => {
		rpc.callServer('CharCreator-Save', character);
	},

	changeHeading: (angle: number) => {
		player.setHeading(angle);
	},

	'CharCreator-CloseEditor': () => {
		if (camera) {
			camera.setActive(false);
			mp.game.cam.renderScriptCams(false, true, 0, true, true);
			camera.destroy();
			camera = null;
		}

		browser.hidePage();

		rpc.call('Player-Spawn');
	}
});
