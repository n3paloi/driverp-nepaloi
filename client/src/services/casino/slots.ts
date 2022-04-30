import * as rpc from 'rage-rpc';
import { isNumber } from 'lodash';
import browser from '../../utils/browser';
import positions from './slots-machine';

const localPlayer = mp.players.local;

const reelsOffsets = [
	[-0.115, 0.047, 1.106],
	[0.005, 0.047, 1.106],
	[0.125, 0.047, 1.106]
];
const spinningTime = [2000, 4000, 6000];
let camera: CameraMp;

let slotMachineToJoin = null;

type Machine = {
	spinning: boolean[];
	reels: ObjectMp[];
	object: ObjectMp;
	rotations: number[];
};

type MachinePosition = {
	type: number;
	x: number;
	y: number;
	z: number;
	rz: number;
};

class Slots {
	private machines: Machine[];

	private selectedMachine: number;

	constructor() {
		this.machines = [];

		this.createMachines();
		this.subscribeToEvents();
	}

	private createReel(position: MachinePosition, index: number, rotation: number) {
		const { type, x, y, z, rz } = position;

		const offset = mp.game.object.getObjectOffsetFromCoords(
			x,
			y,
			z,
			rz,
			reelsOffsets[index][0],
			reelsOffsets[index][1],
			reelsOffsets[index][2]
		);

		return mp.objects.new(mp.game.joaat(`vw_prop_casino_slot_0${type}a_reels`), offset, {
			rotation: new mp.Vector3(rotation, 0, rz)
		});
	}

	private createMachines() {
		for (let i = 1; i <= 8; i++) {
			mp.game.entity.createModelHideExcludingScriptObjects(
				1127.1312255859375,
				254.82090759277344,
				-50.4407958984375,
				300.0,
				mp.game.joaat(`vw_prop_casino_slot_0${i}a`),
				true
			);
		}

		positions.forEach(({ type, x, y, z, rz }, index) => {
			const reels: ObjectMp[] = [];
			const offset = mp.game.object.getObjectOffsetFromCoords(x, y, z, rz, 0, -1.5, 1);
			const shape: any = mp.colshapes.newSphere(offset.x, offset.y, offset.z, 0.5);

			shape.slotMachine = index;

			for (let r = 0; r < 3; r++) {
				reels[r] = this.createReel(positions[index], r, 0);
			}

			this.machines.push({
				reels,
				spinning: [],
				rotations: [],
				object: mp.objects.new(
					mp.game.joaat(`vw_prop_casino_slot_0${type}a`),
					new mp.Vector3(x, y, z),
					{ rotation: new mp.Vector3(0, 0, rz) }
				)
			});
		});
	}

	private rotateReels(machine: Machine, position: MachinePosition) {
		for (let index = 0; index < 3; index++) {
			setTimeout(() => {
				machine.spinning[index] = false;

				machine.reels[index].destroy();
				machine.reels[index] = this.createReel(position, index, machine.rotations[index]);
			}, spinningTime[index]);
		}
	}

	private spin(id: number, rotations: number[]) {
		const machine = this.machines[id];

		machine.rotations = rotations;

		for (let i = 0; i < 3; i++) {
			machine.reels[i].destroy();
			machine.reels[i] = this.createReel(positions[id], i, 0);

			machine.spinning[i] = true;
		}

		this.rotateReels(machine, positions[id]);
	}

	private async occupyMachine() {
		const canOccupy = await rpc.callServer('Casino-CanOccupyMachine', slotMachineToJoin);

		if (!isNumber(slotMachineToJoin) || !canOccupy) return;

		const { x, y, z, rz } = positions[slotMachineToJoin];
		const offset = mp.game.object.getObjectOffsetFromCoords(x, y, z, rz, 0, -0.8, 1);

		this.machines[slotMachineToJoin].object.setCollision(false, false);

		localPlayer.position = new mp.Vector3(offset.x, offset.y, offset.z);
		localPlayer.setHeading(rz);
		localPlayer.freezePosition(true);
		localPlayer.setAlpha(0);

		camera = mp.cameras.new(
			'default',
			new mp.Vector3(offset.x, offset.y, offset.z + 0.2),
			new mp.Vector3(0, 0, rz),
			50
		);

		camera.setActive(true);
		mp.game.cam.renderScriptCams(true, false, 500, true, false);

		rpc.callServer('Casino-OccupySlotMachine', slotMachineToJoin);
	}

	private leaveFromMachine() {
		rpc.callServer('Casino-LeaveSlotMachine', this.selectedMachine);

		this.cancelInteractingWithSlotMachine();

		camera.setActive(false);
		mp.game.cam.renderScriptCams(false, false, 500, true, false);
		camera.destroy();
		camera = null;

		localPlayer.freezePosition(false);
		localPlayer.setAlpha(255);

		browser.hidePage();
	}

	private playerSitAtSlotMachine(player: PlayerMp, machineID: number) {
		if (player.handle === localPlayer.handle) {
			this.selectedMachine = machineID;

			return this.machines[machineID].object.setCollision(false, false);
		}

		this.machines[machineID].object.setNoCollision(player.handle, false);
	}

	private cancelInteractingWithSlotMachine() {
		this.machines[this.selectedMachine].object.setCollision(true, false);

		this.selectedMachine = null;
	}

	private playerDeath(player: PlayerMp) {
		if (player.handle !== localPlayer.handle) return;

		this.selectedMachine = null;
	}

	private playerExitColshape(shape: any) {
		if (isNumber(shape.slotMachine)) slotMachineToJoin = null;
	}

	private playerEnterColshape(shape: any) {
		if (!isNumber(shape.slotMachine) || isNumber(this.selectedMachine)) return;

		slotMachineToJoin = shape.slotMachine;

		mp.game.ui.notifications.help('Нажмите ~INPUT_CONTEXT~ чтобы сыграть');
	}

	private onKeyPress() {
		if (mp.gui.cursor.visible || isNumber(this.selectedMachine)) return;

		this.occupyMachine();
	}

	private showMenu(minimalBet: number, maxBet: number) {
		browser.showPage('services/casino/slots', { minimalBet, maxBet });
	}

	private render() {
		this.machines.forEach((machine) => {
			for (let i = 0; i < 3; i++) {
				if (machine.spinning[i]) {
					const { x, z } = machine.reels[i].rotation;

					machine.reels[i].rotation = new mp.Vector3(x + 5.0, 0.0, z);
				}
			}
		});
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Casino-ShowSlotMachineMenu': this.showMenu,
			'Casino-SpinSlotMachine': this.spin.bind(this),
			'Casino-LeaveFromMachine': this.leaveFromMachine.bind(this),
			playerSitAtSlotMachine: this.playerSitAtSlotMachine.bind(this)
		});

		mp.events.subscribeToDefault({
			playerDeath: this.playerDeath.bind(this),
			playerExitColshape: this.playerExitColshape.bind(this),
			playerEnterColshape: this.playerEnterColshape.bind(this),
			render: this.render.bind(this)
		});

		mp.keys.bind(69, true, this.onKeyPress.bind(this));
	}
}

const slots = new Slots();
