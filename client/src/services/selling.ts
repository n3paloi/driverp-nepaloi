import browser from '../utils/browser';

// illegal
mp.peds.new(0xf0ec56e2, new mp.Vector3(2484.114, 3446.136, 51.067), 330.867);
// legal
mp.peds.new(0x0ce81655, new mp.Vector3(-1078.762, -2137.775, 13.394), 140.112);
mp.peds.new(0x0ce81655, new mp.Vector3(1961.999, 5184.742, 47.98), 257.111);

mp.events.subscribe({
	'Selling-ShowMenu': (prices, products, legal) => {
		browser.showPage('services/selling', { prices, products, legal });
	}
});
