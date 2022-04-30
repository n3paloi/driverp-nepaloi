import * as rpc from 'rage-rpc';
import { random, isNumber } from 'lodash';
import notifications from '../../helpers/notifications';
import animations from '../../utils/animations';
import { getStreamedPlayers } from '../../utils/players';

class CasinoSlots {
	private minimalBet: number;

	private maxBet: number;

	private machines: Map<number, string>;

	private rotations: number[];

	constructor() {
		this.minimalBet = 1000;
		this.maxBet = 100000;

		this.rotations = [5, 25, 45, 70, 95, 115, 160];
		this.machines = new Map();

		this.subscribeToEvents();
	}

	private canOccupyMachine(player: PlayerMp, machineId: number) {
		return !this.machines.has(machineId);
	}

	private getRandomRotation() {
		return this.rotations[random(0, this.rotations.length - 1)];
	}

	private getAwardMultiplier(rotations: number[]) {
		let multiplier = 1;

		rotations.forEach((rotation, index, array) => {
			const count = array.filter((item) => item === rotation).length;

			multiplier = count > multiplier ? count : multiplier;
		});

		return multiplier;
	}

	private async moneyOperation(player: PlayerMp, bet: number, multiplier: number) {
		if (multiplier >= 2) {
			const award = bet * multiplier;

			await player.moneyHelper.change(award, 'bank', 'casino slots award');

			notifications.success(player, `Ваш выигрыш составил ${award}$`);
		} else {
			notifications.info(player, `Вы проиграли ${bet}$`);
		}
	}

	private async spin(player: PlayerMp, value: any) {
		try {
			const bet = parseInt(value, 10);
			const machine = player.getVariable('slotMachine');

			if (
				!isNumber(bet) ||
				!isNumber(machine) ||
				bet < this.minimalBet ||
				bet > this.maxBet
			)
				return;

			await player.moneyHelper.different(bet, 'casino slots');

			const rotations = [];

			for (let index = 0; index < 3; index++) rotations[index] = this.getRandomRotation();

			getStreamedPlayers(player.position).forEach((item) =>
				rpc.callClient(item, 'Casino-SpinSlotMachine', [machine, rotations])
			);

			setTimeout(() => {
				try {
					this.moneyOperation(player, bet, this.getAwardMultiplier(rotations));

					rpc.callBrowsers(player, 'Casino-AllowSpin');
				} catch (err) {
					console.log(err, 'casino slots err');
				}
			}, 6000);
		} catch (err) {
			return Promise.reject();
		}
	}

	private occupyMachine(player: PlayerMp, machineId: number) {
		if (!this.canOccupyMachine(player, machineId)) return;

		this.machines.set(machineId, player.dbId);
		player.setVariable('slotMachine', machineId);

		getStreamedPlayers(player.position).forEach((item) =>
			rpc.callClient(item, 'playerSitAtSlotMachine', [player, machineId])
		);

		animations.setWalkingStyle(player, 'normal');
		animations.set(player, 'casino');

		this.showMenu(player);
	}

	private leaveFromMachine(player: PlayerMp, machine: number) {
		this.machines.delete(machine);

		player.setVariable('slotMachine', null);
		animations.stop(player);
	}

	private showMenu(player: PlayerMp) {
		rpc.callClient(player, 'Casino-ShowSlotMachineMenu', [this.minimalBet, this.maxBet]);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Casino-SpinSlotMachine': this.spin.bind(this),
			'Casino-OccupySlotMachine': this.occupyMachine.bind(this),
			'Casino-LeaveSlotMachine': this.leaveFromMachine.bind(this),
			'Casino-CanOccupyMachine': this.canOccupyMachine.bind(this)
		});
	}
}

const slots = new CasinoSlots();
