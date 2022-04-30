import Building from '../../basic/building';
import notifications from '../../helpers/notifications';

class MafiaBuilding extends Building {
	constructor() {
		const info = {
			name: 'Итальянская мафия',

			outPos: { x: -2586.75927734375, y: 1877.803955078125, z: 163.72415161132812 },
			blipData: { model: 680, color: 6 },
			markerData: { radius: 0.75, color: [190, 85, 211, 90] }
		};
		super(info);
	}

	tryToEnter(player: PlayerMp) {
		if (player.faction.name !== this.name) {
			return notifications.error(player, `Вы не состоите во фракции ${this.name}`);
		}

		super.tryToEnter(player);
	}
}

const building = new MafiaBuilding();

export default building;
