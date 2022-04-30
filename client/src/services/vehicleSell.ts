import browser from '../utils/browser';
import peds from '../configs/peds/carSell';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0xc9e5f56b);

mp.events.subscribe({
	'VehicleSell-ShowMenu': (price: number) => {
		browser.showPage('services/vehicle_sell', { price });
	}
});
