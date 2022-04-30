import * as rpc from 'rage-rpc';
import User from '../models/User';
import Service from './service';
import characterCreator from '../character/characterCreator';
import clothes from '../character/clothes';
import coords from '../data/services/barberShops';
import notifications from '../helpers/notifications';

class Barbershop extends Service {
	private standCoord: {
		x: number;
		y: number;
		z: number;
		rotation: number;
		dimension: number;
	};

	private price: number;

	constructor() {
		const info = {
			name: 'Барбершоп',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 71, color: 9 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.standCoord = {
			x: 402.55,
			y: -996.37,
			z: -99.01,
			rotation: 180,
			dimension: 1000
		};

		this.price = 9500;
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle || player.faction.working) return;

		if (player.model === mp.joaat('mp_m_freemode_01')) {
			player.setProp(0, 8, 0);
			player.setProp(1, 0, 0);
		} else {
			player.setProp(0, 57, 0);
			player.setProp(1, 5, 0);
		}

		player.setClothes(1, 0, 0, 0);

		player.dimension = ++this.standCoord.dimension;

		rpc.callClient(player, 'Barbershop-ShowBuyerMenu', [this.price, player.appearance]);
	}

	async buy(player: PlayerMp, character: any) {
		try {
			await player.moneyHelper.different(this.price, 'bshop');

			await User.findByIdAndUpdate(player.dbId, {
				$set: { character }
			});

			player.appearance = character;

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const barbershop = new Barbershop();

mp.events.subscribe({
	'Barbershop-Buy': (player, data) => barbershop.buy(player, data),
	'Barbershop-CloseMenu': (player) => {
		characterCreator.loadPlayerCharacter(player, player.appearance, true);
		clothes.load(player);

		player.dimension = 0;
	}
});
