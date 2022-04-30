import garages from '../../data/garages';
import colshapes from '../../helpers/colshapes';
import garageProperty, { GarageData } from './index';
import notifications from '../../helpers/notifications';

class GarageBuilding {
	private nextFreeDimension: number;

	constructor() {
		this.nextFreeDimension = 1000;
	}

	private onEnterPassage(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	createBlip(garage: GarageData) {
		const { x, y, z } = garage.entrance;

		if (garage.forSale) {
			const blip = mp.blips.new(50, new mp.Vector3(x, y, z), {
				name: 'Гараж (продаётся)',
				color: 2,
				shortRange: true,
				scale: 0.7
			});

			if (garage.customCost) blip.color = 5;

			return blip;
		}
	}

	private createPassage(position: PositionEx) {
		const { x, y, z, dimension = 0 } = position;

		colshapes.create(
			position,
			2,
			{
				onEnter: this.onEnterPassage,
				onKeyPress: garageProperty.openMenu,
				keyName: 'E'
			},
			garageProperty.count
		);

		const color: RGBA = dimension ? [194, 42, 42, 85] : [0, 255, 0, 80];

		mp.markers.new(30, new mp.Vector3(x, y, z), 1, {
			dimension,
			color,
			visible: true
		});
	}

	create(garage: GarageData) {
		const { location } = garages[garage.garageClass];

		if (!location) return;

		const blip = this.createBlip(garage);

		const exit = { ...location, dimension: this.nextFreeDimension++ };

		this.createPassage(garage.entrance);
		this.createPassage(exit);

		return {
			exit,
			index: garageProperty.count,
			blipId: blip && blip.id,
			...garage
		};
	}

	tryToEnter(player: PlayerMp, garage: GarageData) {
		if (garage.locked) return notifications.error(player, 'Ворота закрыты');

		const isEntrance = this.isEntrance(player, garage.entrance);

		const position = isEntrance ? garage.exit : garage.entrance;

		if (player.vehicle) {
			player.vehicle.position = new mp.Vector3(position.x, position.y, position.z);
			player.vehicle.dimension = position.dimension || 0;

			setTimeout(() => {
				try {
					player.vehicle.rotation = new mp.Vector3(0, 0, 90);
				} catch (err) {
					console.log(err);
				}
			}, 100);
		} else player.tp(position);
	}

	setBlipStatus(blip: BlipMp, customSelling: boolean) {
		blip.name = 'Гараж (продаётся)';
		blip.color = customSelling ? 5 : 2;
	}

	isEntrance(player: PlayerMp, entrance: PositionEx) {
		const position = new mp.Vector3(entrance.x, entrance.y, entrance.z);

		return player.dist(position) <= 3;
	}
}

export default new GarageBuilding();
