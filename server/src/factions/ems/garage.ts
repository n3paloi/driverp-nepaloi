import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';
import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

class EmsGarageElevator {
	private id = 'ems';

	constructor() {
		this.createElevator({
			entrance: {
				x: 331.6086730957031,
				y: -595.4246215820312,
				z: 43.283992767333984
			},
			exit: {
				x: 319.01153564453125,
				y: -559.0020751953125,
				z: 28.743432998657227
			}
		});
		this.createElevator({
			entrance: {
				x: 339.0078430175781,
				y: -584.071533203125,
				z: 74.16558074951172
			},
			exit: {
				x: 329.39056396484375,
				y: -600.800048828125,
				z: 43.28402328491211
			}
		});
	}

	private enteredEntranceShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
	}

	private enteredExitShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
	}

	private createElevator(elevator: any) {
		const { entrance, exit } = elevator;

		colshapeManager.create(entrance, 0.75, {
			onEnter: this.enteredEntranceShape.bind(this),
			onKeyPress: (player) => {
				if (player.faction.id !== this.id) {
					return notifications.error(player, 'Вы не состоите во фракции');
				}

				player.tp(exit);
			},
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(entrance.x, entrance.y, entrance.z - 1.2), 0.75, {
			color: [0, 128, 128, 100],
			visible: true
		});

		colshapeManager.create(exit, 0.75, {
			onEnter: this.enteredExitShape.bind(this),
			onKeyPress: (player) => {
				if (player.faction.id !== this.id) {
					return notifications.error(player, 'Вы не состоите во фракции');
				}

				player.tp(entrance);
			},
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(exit.x, exit.y, exit.z - 1.2), 0.75, {
			color: [0, 128, 128, 100],
			visible: true
		});
	}
}

const elevator = new EmsGarageElevator();

export default new FactionGarage(
	'ems',
	{ x: 317.0, y: -541.68, z: 28.74 },
	garageCoords.ems,
	[
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo'],
		['emsnspeedo','dodgesamu'],
		['emsnspeedo','dodgesamu']
	],
	{
		paint: { primary: [255, 255, 255], secondary: [255, 255, 255], type: 0 },
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);