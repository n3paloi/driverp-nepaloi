import notifications from '../../helpers/notifications';
import Building from '../../basic/building';

class FbiBuilding extends Building {
	constructor() {
		const info = {
			name: 'FBI',
			blipData: { model: 60, color: 0 },
			markerData: { radius: 0.75, color: [0, 133, 199, 100] },

			outPos: { x: 135.27674865722656, y: -764.1279296875, z: 45.76328659057617 },
			inPos: { x: 135.3935546875, y: -764.075927734375, z: 242.15199279785156 }
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

const building = new FbiBuilding();

export default building;
