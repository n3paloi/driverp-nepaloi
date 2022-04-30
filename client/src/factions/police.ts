import { isNumber } from 'lodash';
import browser from '../utils/browser';

const player = mp.players.local;
const control = [140, 141, 142, 257, 263, 264, 24, 25, 22, 23, 59, 69, 92, 114, 75, 23];

mp.peds.new(0x5e3da4a4, new mp.Vector3(459.0267, -999.657, 25.699), 45.024);

mp.events.subscribe({
	'Police-ShowPC': () => {
		browser.showPage('factions/police/pc', {
			userName: player.getVariable('realName'),
			rank: player.getVariable('faction').rank
		});
	},
	'Police-ShowMenu': (playerId: number) => {
		browser.showPage('factions/police', { playerId }, false);
	},
	'Police-ShowDocs': (name: string, rank: string) => {
		browser.showPage('factions/police/docs', { name, rank });
	},
	'Police-ShowWeaponsMenu': (prices) => {
		browser.showPage('factions/police/weapons', { prices });
	},
	'Police-ShowLeaderBoard': (...members) => {
		browser.showPage('factions/police/leaderboard', { members });
	},
	'Police-TieUp': (entity) => {
		player.setEnableHandcuffs(true);

		control.forEach((element) => {
			mp.game.controls.disableControlAction(2, element, true);
		});

		player.taskFollowToOffsetOf(entity.handle, 0, 0, 0, 1, -1, 1, true);
	},
	'Police-Untie': () => {
		player.setEnableHandcuffs(false);

		control.forEach((element) => {
			mp.game.controls.enableControlAction(2, element, true);
		});

		player.clearTasks();
	},
	'Police-PutToCar': (car) => {
		const state = car.getVariable('state');

		if (!state) return;

		for (let seat = 0; seat < 7; seat++) {
			if (car && car.isSeatFree(seat) && car.getSpeed() < 5 && !player.vehicle) {
				car.setDoorsLocked(1);

				setTimeout(() => car.setDoorsLocked(state.locked ? 2 : 1), 2100);

				return player.taskEnterVehicle(car.handle, 2500, seat, 1.0, 16, 0);
			}
		}
	},
	'Police-ToggleDoor': (model, { x, y, z }) => {
		if (!isNumber(model)) return;

		let locked;

		if (mp.game.object.getStateOfClosestDoorOfType(model, x, y, z, 1, 1).locked)
			locked = false;
		else locked = true;

		mp.game.object.doorControl(model, x, y, z, locked, 0, 0, 0);
	}
});

mp.events.subscribeToDefault({
	render: () => {
		control.forEach((element) => {
			if (player.isCuffed()) {
				mp.game.controls.disableControlAction(2, element, true);
			}
		});
	}
});
