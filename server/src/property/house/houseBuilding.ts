import houses from '../../data/houses';
import colshapes from '../../helpers/colshapes';
import houseProperty, { HouseData } from './index';
import inventory from './houseInventory';
import notifications from '../../helpers/notifications';

class HouseBuilding {
	private nextFreeDimension: number;

	constructor() {
		this.nextFreeDimension = 1000;
	}

	private onEnterPassage(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	createBlip(house: HouseData) {
		const { x, y, z } = house.entrance;

		if (house.forSale) {
			const blip = mp.blips.new(374, new mp.Vector3(x, y, z), {
				name: 'Дом (продаётся)',
				color: 2,
				shortRange: true,
				scale: 0.4
			});

			if (house.customCost) blip.color = 5;

			return blip;
		}
	}

	private createPassage(position: PositionEx) {
		const { x, y, z, dimension = 0 } = position;

		colshapes.create(
			position,
			0.75,
			{
				onEnter: this.onEnterPassage,
				onKeyPress: houseProperty.openMenu,
				keyName: 'E'
			},
			houseProperty.count
		);

		const color: RGBA = dimension ? [194, 42, 42, 85] : [0, 255, 0, 85];

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			dimension,
			color,
			visible: true
		});
	}

	create(house: HouseData) {
		const { coords } = houses[house.houseClass];

		if (!coords) return;

		const blip = this.createBlip(house);

		const dimension = this.nextFreeDimension;

		this.createPassage(house.entrance);
		this.createPassage({ dimension, ...coords.location });

		inventory.create(
			{ dimension, ...coords.inventory },
			{
				dbId: house._id,
				inventory: house.inventory,
				houseClass: house.houseClass
			}
		); // refactoring

		return {
			index: houseProperty.count,
			blipId: blip && blip.id,
			exit: { ...coords.location, dimension: this.nextFreeDimension++ },
			...house
		};
	}

	tryToEnter(player: PlayerMp, house: HouseData) {
		if (house.locked) return notifications.error(player, 'Дверь заперта');

		const isEntrance = this.isEntrance(player, house.entrance);

		player.tp(isEntrance ? house.exit : house.entrance);
	}

	setBlipStatus(blip: BlipMp, customSelling: boolean) {
		blip.model = 374;
		blip.name = 'Дом (продаётся)';
		blip.color = customSelling ? 5 : 2;
		blip.scale = 0.4;
	}

	isEntrance(player: PlayerMp, entrance: PositionEx) {
		const position = new mp.Vector3(entrance.x, entrance.y, entrance.z);

		return player.dist(position) <= 3;
	}
}

export default new HouseBuilding();
