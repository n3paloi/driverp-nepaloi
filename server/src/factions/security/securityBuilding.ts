import Building from '../../basic/building';
import notifications from '../../helpers/notifications';

class SecurityBuilding extends Building {
	constructor() {
		const info = {
			name: 'База ЧОП',

			outPos: { x: 1399.920654296875, y: 1139.7105712890625, z: 114.3336410522461 },//Блип ЧОП
			blipData: { model: 487, color: 55 },
			markerData: { radius: 0.75, color: [194, 42, 42, 85] }
		};
		super(info);
	}

	tryToEnter(player: PlayerMp) {
		if (!player.faction.name || (player.faction.name && player.faction.name !== 'ЧОП'))
			return notifications.error(player, 'Вы не состоите во фракции ЧОП');

		super.tryToEnter(player);
	}
}

const building = new SecurityBuilding();

export default building;
