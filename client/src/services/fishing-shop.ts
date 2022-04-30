import browser from '../utils/browser';

mp.peds.new(0x85889ac3, new mp.Vector3(-2193.387, 4289.986, 49.174), 31.513, 0);

mp.events.subscribe({
	'FishingShop-ShowBuyerMenu': (items) => {
		browser.showPage('services/fishing_shop', { items });
	}
});
