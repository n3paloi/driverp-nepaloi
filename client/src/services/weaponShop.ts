import browser from '../utils/browser';
import peds from '../configs/peds/sellersWeapons';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0x9e08633d);

mp.events.subscribe({
	'WeaponShop-ShowBuyerMenu': (prices) => {
		browser.showPage('services/weapon_shop', { prices });
	}
});
