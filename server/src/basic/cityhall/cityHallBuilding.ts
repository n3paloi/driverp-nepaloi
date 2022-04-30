import Building from '../building';
import notifications from '../../helpers/notifications';

class CityHallBuilding extends Building {
	public entities: any;

	constructor() {
		const info = {
			name: 'Мэрия',
			blipData: { model: 419, color: 37 },
			markerData: { radius: 0.75, color: [58, 226, 206, 85] },
			outPos: { x: 230.0961456298828, y: 214.58436584472656, z: 105.55398559570312 },
			inPos: { x: 233.93283081054688, y: 216.17578125, z: 106.28671264648438 }
		};
		super(info);

		this.entities = {  //Метки в Мерии
			licenses: {
				x: 242.88784790039062, 
				y: 223.89781188964844, 
				z: 106.28681945800781,
				color: [58, 226, 206, 75]
			},
			card: {
				x: 251.9730682373047, 
				y: 220.93588256835938, 
				z: 106.28668975830078,
				color: [255, 234, 95, 75]
			},
			passport: {
				x: 246.36061096191406, 
				y: 222.77207946777344, 
				z: 106.28681945800781,
				color: [186, 85, 211, 75]
			}
			
		};

		this.createEntities();
	}

	createEntities() {
		Object.keys(this.entities).forEach((name) => {
			const { x, y, z, color } = this.entities[name];

			mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
				color,
				visible: true
			});

			const shape: any = mp.colshapes.newSphere(x, y, z, 0.75);
			shape.name = name;
		});
	}
}

const building = new CityHallBuilding();

export default building;

mp.events.add({
	playerEnterColshape: (player, shape) => {
		if (!player.loggedIn) return;

		const { name } = shape;

		if (building.entities[name]) {
			player.canOpen.cityHall = name;

			notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
		}
	},
	playerExitColshape: (player, shape) => {
		if (!player.loggedIn) return;

		const { name } = shape;

		if (building.entities[name]) delete player.canOpen.cityHall;
	}
});