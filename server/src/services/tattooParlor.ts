import * as rpc from 'rage-rpc';
import User from '../models/User';
import Service from './service';
import coords from '../data/services/tattooParlors';
import clothes from '../character/clothes';
import characterCreator from '../character/characterCreator';
import notifications from '../helpers/notifications';

type Tattoo = {
	bodyPosition: string;
	dictionary: string;
	texture: string;
};

class TattooParlor extends Service {
	private prices: any;

	constructor() {
		const info = {
			name: 'Тату салон',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 75, color: 61 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.prices = {
			torso: 50000,
			head: 30000,
			leftarm: 40000,
			rightarm: 40000,
			leftleg: 35000,
			rightleg: 35000
		};

		this.subsribeToEvents();
	}

	private async buyTattoo(player: PlayerMp, tattoo: Tattoo) {
		try {
			const price = this.prices[tattoo.bodyPosition];

			if (!price) return;

			await player.moneyHelper.different(price, 'tattoo');

			player.appearance.tattoos.push(tattoo);

			await User.findByIdAndUpdate(player.dbId, {
				$set: { 'character.tattoos': player.appearance.tattoos }
			});

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	private async removeTattoo(player: PlayerMp, tattoo: Tattoo) {
		try {
			const price = this.prices[tattoo.bodyPosition];

			if (!price) return;

			await player.moneyHelper.different(price, 'tattoo');

			const tattoos = player.appearance.tattoos.filter(
				(item) => tattoo.texture !== item.texture
			);

			player.appearance.tattoos = tattoos;

			await User.findByIdAndUpdate(player.dbId, {
				$set: { 'character.tattoos': tattoos }
			});

			characterCreator.setTattoos(player, tattoos);

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject(new Error());
		}
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle || player.faction.working) return;

		player.dimension = player.id + 1;

		clothes.clear(player);

		rpc.callClient(player, 'TattooParlor-ShowBuyerMenu', [
			player.appearance.tattoos,
			this.prices
		]);
	}

	private subsribeToEvents() {
		mp.events.subscribe({
			'TattooParlor-Buy': this.buyTattoo.bind(this),
			'TattooParlor-Remove': this.removeTattoo.bind(this),
			'TattooParlor-CloseMenu': this.onCloseMenu.bind(this)
		});
	}

	private onCloseMenu(player: PlayerMp) {
		characterCreator.loadPlayerCharacter(player, player.appearance, true);
		clothes.load(player);

		player.dimension = 0;
	}
}

export default new TattooParlor();
