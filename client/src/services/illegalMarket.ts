import browser from '../utils/browser';
import peds from '../configs/peds/illegalSellers';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0x106d9a99);

mp.events.subscribe({
	'IllegalMarket-ShowBuyerMenu': (prices) => {
		browser.showPage('services/illegal_market', { prices });
	}
});
