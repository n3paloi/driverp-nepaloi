import colshapes from '../../helpers/colshapes';
import businessProperty, { BusinessData } from './index';
import notifications from '../../helpers/notifications';

class BusinessBuilding {
	private onEnterPassage(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	createBlip(business: BusinessData) {
		const { x, y, z } = business.position;

		if (business.forSale) {
			const blip = mp.blips.new(108, new mp.Vector3(x, y, z), {
				name: 'Бизнес (продаётся)',
				color: 2,
				shortRange: true,
				scale: 0.7
			});

			if (business.customCost) blip.color = 5;

			return blip;
		}
	}

	private createMainShape(position: PositionEx) {
		const { x, y, z } = position;

		colshapes.create(
			position,
			0.75,
			{
				onEnter: this.onEnterPassage,
				onKeyPress: businessProperty.openMenu,
				keyName: 'E'
			},
			businessProperty.count
		);

		mp.markers.new(29, new mp.Vector3(x, y, z), 0.75, {
			color: [0, 255, 0, 100],
			visible: true
		});
	}

	create(business: BusinessData) {
		const blip = this.createBlip(business);

		this.createMainShape(business.position);

		return {
			index: businessProperty.count,
			blipId: blip && blip.id,
			...business
		};
	}

	setBlipStatus(blip: BlipMp, customSelling: boolean) {
		blip.model = 108;
		blip.name = 'Бизнес (продаётся)';
		blip.color = customSelling ? 5 : 2;
	}
}

export default new BusinessBuilding();
