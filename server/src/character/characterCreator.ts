import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import User from '../models/User';
import spawn from '../data/spawn';
import colshapeManager from '../helpers/colshapes';
import notifications from '../helpers/notifications';
import clothes from './clothes';

class CharCreator {
	private exitCoord: PositionEx;

	constructor() {
		this.exitCoord = {
			x: 405.215,
			y: -997.179,
			z: -99.01
		};

		this.createExitShape();
	}

	openMenu(player: PlayerMp) {
		player.model = mp.joaat('mp_m_freemode_01');

		player.tp({
			x: 402.82,
			y: -996.449,
			z: -99.001,
			dimension: player.id + 1
		});

		rpc.callClient(player, 'CharCreator-OpenMenu');
	}

	enteredExitShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ для выхода на спавн');
	}

	createExitShape() {
		const { x, y, z } = this.exitCoord;

		mp.markers.new(1, new mp.Vector3(x, y, z - 1), 0.75, {
			color: [255, 219, 0, 70],
			visible: true
		});

		colshapeManager.create(this.exitCoord, 0.75, {
			onEnter: this.enteredExitShape,
			onKeyPress: (player) => player.tp(spawn),
			keyName: 'E'
		});
	}

	loadPlayerCharacter(player: PlayerMp, data: any, firstLogin: boolean) {
		player.gender = 'male';

		if (data.gender) player.gender = 'female';

		if (!firstLogin) return this.openMenu(player);

		this.loadPlayerBody(player, data);
		this.loadHeadOverlay(player, data);
		this.loadPlayerHead(player, data);
	}

	loadPlayerBody(player: PlayerMp, character: any) {
		if (character.gender === 0) player.model = mp.joaat('mp_m_freemode_01');
		else player.model = mp.joaat('mp_f_freemode_01');

		player.setVariable('gender', character.gender);

		this.setBody(player, character.skindata);
		this.setFace(player, character.facedata);
		this.setTattoos(player, character.tattoos);
	}

	loadPlayerHead(player: PlayerMp, character: any) {
		this.setHair(player, character.hair);
		this.setBrowStyle(player, character.brow);
		this.setBeardStyle(player, character.beard);
	}

	loadHeadOverlay(player: PlayerMp, character: any) {
		this.setHeadOverlay(player, character.headOverlayData);
	}

	setTattoos(player: PlayerMp, tattoos: any) {
		player.clearDecorations();

		tattoos.forEach((tattoo) => {
			player.setDecoration(mp.joaat(tattoo.dictionary), mp.joaat(tattoo.texture));
		});
	}

	setBody(player: PlayerMp, skindata: number[]) {
		if (!skindata || !skindata.length) return;

		player.setHeadBlend(
			skindata[0],
			skindata[1],
			0,
			skindata[0],
			skindata[1],
			0,
			skindata[2],
			skindata[3],
			0.0
		);
	}

	setFace(player: PlayerMp, facedata: number[]) {
		if (!facedata || !facedata.length) return;

		for (let i = 0; i < facedata.length; i++) {
			player.setFaceFeature(i, facedata[i] || 0);
		}
	}

	setHair(player: PlayerMp, hair: any) {
		if (!hair || !Object.keys(hair).length) return;

		this.setHairStyle(player, hair.style);
		this.setHairColor(player, hair.color);
	}

	setHairStyle(player: PlayerMp, hairStyle: number) {
		if (!isNumber(hairStyle)) return;

		player.setClothes(2, hairStyle, 0, 0);
	}

	setHairColor(player: PlayerMp, hairColor: number[]) {
		if (!hairColor || !hairColor.length) return;

		player.setHairColor(hairColor[0], hairColor[1]);
	}

	setBrowStyle(player: PlayerMp, brow: any) {
		if (!brow || !Object.keys(brow).length || !isNumber(brow.style)) return;

		player.setHeadOverlay(2, [brow.style, brow.opacity, 1, 1]);
	}

	setBeardStyle(player: PlayerMp, beard: any) {
		if (!beard || !Object.keys(beard).length || !isNumber(beard.style)) return;

		player.setHeadOverlay(1, [beard.style, beard.opacity, 1, 1]);
	}

	setHeadOverlay(player: PlayerMp, headOverlay: number[]) {
		if (!headOverlay || !headOverlay.length) return;

		headOverlay.forEach((item, index) => {
			const style = item === -1 ? 255 : item;

			player.setHeadOverlay(index, [style ?? 0, 1.0, 0, 0]);
		});
	}
}

const charCreator = new CharCreator();

mp.events.subscribe({
	'CharCreator-Save': async (player: PlayerMp, data: any) => {
		const inventory = data.gender
			? [
					{
						type: 'clothes',
						name: 'underwears',
						style: 0,
						color: 0,
						torsos: 0,
						under: 0,
						used: true
					},
					{
						type: 'clothes',
						name: 'legs',
						style: 14,
						color: 0,
						used: true
					},
					{
						type: 'clothes',
						name: 'shoes',
						style: 5,
						color: 0,
						used: true
					}
			  ]
			: [
					{
						type: 'clothes',
						name: 'underwears',
						style: 5,
						color: 0,
						torsos: 5,
						under: 5,
						used: true
					},
					{
						type: 'clothes',
						name: 'legs',
						style: 12,
						color: 0,
						used: true
					},
					{
						type: 'clothes',
						name: 'shoes',
						style: 6,
						color: 0,
						used: true
					}
			  ];

		await User.findByIdAndUpdate(player.dbId, {
			$set: { character: data, inventory }
		});

		player.inventory = inventory;

		player.tp(spawn);

		charCreator.loadPlayerCharacter(player, data, true);
		clothes.load(player);

		rpc.callClient(player, 'CharCreator-CloseEditor');
		rpc.callClient(player, 'Player-ShowStartScreen');
	},

	'CharCreator-ChangeGender': (player: PlayerMp, gender: number) => {
		if (gender) player.model = mp.joaat('mp_f_freemode_01');
		else player.model = mp.joaat('mp_m_freemode_01');
	},

	'CharCreator-UpdateHairStyle': (player: PlayerMp, hair: number) => {
		const isMale = player.isMale();

		if ((isMale && hair !== 23) || (!isMale && hair !== 24)) {
			player.setClothes(2, hair, 0, 0);
		}
	},

	'CharCreator-LoadPlayerCharacter': (player: PlayerMp) => {
		charCreator.loadPlayerCharacter(player, player.appearance, true);
	}
});

export default charCreator;
