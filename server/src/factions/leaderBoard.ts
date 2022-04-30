/* eslint-disable lines-between-class-members */
import colshapeManager from '../helpers/colshapes';
import notifications from '../helpers/notifications';

export default class LeaderBoard {
	private mainCoords: any;

	constructor(coords) {
		this.mainCoords = coords;

		this.createMainShape();
	}

	protected showMenu(player: PlayerMp) {}

	private createMainShape() {
		const { x, y, z } = this.mainCoords;

		colshapeManager.create(this.mainCoords, 0.75, {
			onEnter: this.enteredMainShape.bind(this),
			onKeyPress: this.showMenu.bind(this),
			keyName: 'E'
		});

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [255, 65, 74, 95],
			visible: true
		});
	}

	private enteredMainShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы посмотреть');
	}
}
