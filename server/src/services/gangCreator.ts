import * as rpc from 'rage-rpc';
import Service from './service';
import coords from '../data/services/gangCreator';
import notifications from '../helpers/notifications';
import gangs from '../gangs';

class GangCreator extends Service {
	private creatingPrice: number;

	constructor() {
		const info = {
			name: 'Решала',
			entities: coords,
			markerData: { radius: 0.75 },
			blipData: { model: 525, color: 60 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.creatingPrice = 10000000;

		this.subsribeToEvents();
	}

	private async buy(player: PlayerMp, name: string) {
		try {
			if (gangs.isAlreadyExists(name)) {
				return notifications.error(player, 'Банда с данным названием уже существует!');
			}

			await player.moneyHelper.different(this.creatingPrice, 'gang');
			await gangs.create(player, name);

			notifications.success(player, 'Успешная покупка!');
		} catch (err) {
			return Promise.reject();
		}
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (player.faction.name || player.gang.name) {
			return notifications.error(player, 'Вы уже состоите в организации!');
		}

		rpc.callClient(player, 'GangCreator-ShowBuyerMenu', this.creatingPrice);
	}

	private subsribeToEvents() {
		mp.events.subscribe({
			'GangCreator-Buy': this.buy.bind(this)
		});
	}
}

export default new GangCreator();
