import colshapes from './colshapes';

export type PedData = {
	model: string;
	position: PositionEx;
	heading: number;
	scenario?: string;
	actions?: PedActions;
};

type PedActions = {
	onEnter?: (ped?: PedMp) => void;
	onExit?: (ped?: PedMp) => void;
	onKeyPress?: (ped?: PedMp) => void;
};

class Peds {
	// constructor() {
	//   mp.events.subscribeToDefault({
	//     entityStreamIn
	//   });
	// }

	create({ model, position, heading, scenario, actions }: PedData) {
		const { x, y, z } = position;
		const ped = mp.peds.new(mp.game.joaat(model), new mp.Vector3(x, y, z), heading);

		if (scenario) {
			ped.scenario = scenario;
			ped.taskStartScenarioInPlace(scenario, 0, false);
		}

		// if (actions) {
		// 	colshapes.create(position, 3, { ...actions, keyName: 'E' });
		// }
	}
}

export default new Peds();
