import * as rpc from 'rage-rpc';
import User from '../models/User';
import Service from './service';
import clothes from '../character/clothes';
import coords from '../data/services/appearance';
import notifications from '../helpers/notifications';

class Appearance extends Service {
	private price: number;

	constructor() {
		const info = {
			name: 'Хирург',
			entities: coords,
			markerData: { radius: 0.75 }
		};
		super(info.name, info.entities, info.markerData);

		this.price = 40000;
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.vehicle || player.faction.working) return;

		clothes.clear(player);

		rpc.callClient(player, 'Appearance-ShowMenu', [this.price, player.appearance]);
	}

	async buy(player: PlayerMp, appearance: any) {
		try {
			await player.moneyHelper.different(this.price, 'appearance');

			await User.findByIdAndUpdate(player.dbId, {
				$set: { character: appearance }
			});

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}
}

const appearance = new Appearance();

mp.events.subscribe({
	'Appearance-Buy': (player, data) => appearance.buy(player, data)
});
