import browser from '../utils/browser';
import peds from '../configs/peds/sellersBags';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0x06dd569f);

mp.events.subscribe({
	'BagShop-ShowBuyerMenu': (items) => {
		browser.showPage('services/bag_shop', { items });
	}
});
