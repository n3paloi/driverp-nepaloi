import browser from '../utils/browser';
import peds from '../configs/peds/sellersFood';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0xde0e0969);

mp.events.subscribe({
	'FoodShop-ShowBuyerMenu': (prices) => {
		browser.showPage('services/food_shop', { prices });
	}
});
