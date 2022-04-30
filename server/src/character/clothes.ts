import { isNumber } from 'lodash';
import notifications from '../helpers/notifications';
import empty from '../data/clothes/empty';
import torsos from '../data/clothes/torsos';
import undershirts from '../data/clothes/undershirts';
import tops from '../data/clothes/tops';

type ClothesItem = {
	style: number;
	color: number;
	gender?: 'male' | 'female';
};

const components = {
	masks: 1,
	torso: 3,
	legs: 4,
	bag: 5,
	shoes: 6,
	jewerly: 7,
	undershirt: 8,
	armor: 9,
	decals: 10,
	tops: 11,
	underwears: 11
};
const props = {
	hats: 0,
	glasses: 1,
	ears: 2,
	watches: 6,
	bracelet: 7
};
export type ClothesName = keyof typeof components | keyof typeof props;

class Clothes {
	constructor() {
		mp.events.subscribe({
			'Clothes-LoadPlayerClothes': this.load.bind(this)
		});
	}

	set = (player: PlayerMp, type: string, item: ClothesItem) => {
		const { gender, style, color } = item;

		if (gender && player.gender !== gender) {
			notifications.error(player, 'Данная одежда несовместима с вашим полом');

			throw new Error('wrong clothes');
		}

		switch (type) {
			case 'masks':
				return this.setMask(player, item);

			case 'tops':
				return this.setJacket(player, item);

			case 'underwears':
				return this.setShirt(player, item);

			case 'bag':
				player.setClothes(components.bag, 31, 0, 2);
				break;

			default:
				if (this.isComponent(type)) player.setClothes(components[type], style, color, 2);
				else player.setProp(props[type], style, color);
		}
	};

	hide(player: PlayerMp, type: string) {
		const { gender } = player;

		if (type === 'bag') {
			player.setClothes(components.bag, empty[gender][components.bag], 0, 2);
		} else {
			this.set(player, type, {
				style: this.isComponent(type) ? empty[gender][components[type]] : 255,
				color: 0,
				gender
			});
		}
	}

	load(player: PlayerMp) {
		this.clear(player);

		player.inventory.forEach((item) => {
			if (item.type !== 'clothes' || !item.used) return;

			this.set(player, item.name, item as ClothesItem);
		});
	}

	clear(player: PlayerMp) {
		Object.keys(props).forEach((item) => this.hide(player, item));
		Object.keys(components).forEach((item) => this.hide(player, item));
	}

	private isComponent(name: string) {
		return typeof components[name] === 'number';
	}

	private getComponentData(player: PlayerMp, name: keyof typeof components) {
		return (components[name] === 11
			? player.getVariable(name) ?? player.getClothes(components[name])
			: player.getClothes(components[name])) as ReturnType<typeof player.getClothes>;
	}

	private isEmpty(player: PlayerMp, component: keyof typeof components, style: number) {
		const { gender } = player;
		const id = components[component];

		return empty[gender][id] === style;
	}

	private setJacket(player: PlayerMp, data: ClothesItem) {
		const top = this.getComponentData(player, 'underwears');

		this.setClientClothes(player, 'tops', data);
		this.setShirt(player, {
			style: top.drawable,
			color: top.texture
		});
	}

	private setShirt(player: PlayerMp, data: ClothesItem) {
		const { gender } = player;
		let { drawable: top } = this.getComponentData(player, 'tops');

		this.setClientClothes(player, 'underwears', data);

		if (!isNumber(tops[gender][top])) {
			top = data.style;

			this.setClientClothes(player, 'tops', data);
		}

		this.setUndershirt(player, top, data);
		this.applyCorrectTorso(player, top);
	}

	private setUndershirt(player: PlayerMp, top: number, { style, color }: ClothesItem) {
		const { gender } = player;

		const type: number = tops[gender][top];
		const drawable: number = undershirts[gender][style]?.[type] ?? empty[gender][8];

		player.setClothes(8, drawable, color, 2);
	}

	private applyCorrectTorso(player: PlayerMp, top: number) {
		const { gender } = player;

		const torso: number = torsos[gender][top] ?? empty[gender][3];

		player.setClothes(3, torso, 0, 2);
	}

	private setMask(player: PlayerMp, data: ClothesItem) {
		player.setClothes(1, data.style, data.color, 2);
		player.setVariable('inMask', !this.isEmpty(player, 'masks', data.style));
	}

	private setClientClothes(player: PlayerMp, type: string, data: ClothesItem) {
		const { style: drawable, color: texture } = data;

		player.setVariable(type, { drawable, texture });
	}
}

export default new Clothes();
