import colshapeManager from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';
import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

class FibGarageElevator {
	private elevator: any;

	private id = 'fbi';

	constructor() {
		this.elevator = {
			entrance: {
				x: 140.964,
				y: -766.488,
				z: 45.752
			},
			exit: {
				x: 133.232,
				y: -700.698,
				z: 33.113
			}
		};

		this.createElevator();
	}

	private enteredEntranceShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
	}

	private enteredExitShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
	}

	private createElevator() {
		const { entrance, exit } = this.elevator;

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

const elevator = new FibGarageElevator();

export default new FactionGarage(
	'fbi',
	{ x: 94.207, y: -727.533, z: 33.133 },
	garageCoords.fbi,
	[
		['towtruck'],
		['towtruck', 'lspdthppv'],
		['towtruck', 'lspdthppv'],
		['towtruck', 'lspdthppv'],
		['towtruck', 'lspdthppv'],
		['towtruck', 'lspdthppv', 'escpol'],
		['towtruck', 'lspdthppv', 'escpol'],
		['towtruck', 'lspdthppv', 'escpol'],
		['towtruck', 'lspdthppv', 'escpol', 'riot'],
		['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger'],
		['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger', 'polamggtr'],
		['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger', 'polamggtr']
	],
	{
		paint: { primary: [0, 0, 0], secondary: [0, 0, 0], type: 0 },
		armour: 4,
		glasses: 1,
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);
