import browser from '../utils/browser';
import peds from '../configs/peds/carMarket';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0x46e39e63);

mp.events.subscribe({
	'CarMarket-ShowMenu': (carModel, price, isOwner, ownersCount = 0, maxOwners = 0) => {
		browser.showPage('services/car_market', {
			isOwner,
			carModel,
			price,
			tuning: mp.players.local.vehicle.getVariable('tuning'),
			owners: {
				prev: ownersCount,
				max: maxOwners
			}
		});
	}
});
