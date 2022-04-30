import browser from '../utils/browser';

mp.peds.new(0xb353629e, new mp.Vector3(308.357, -595.278, 43.284), 45.647, 0);
mp.peds.new(0xb353629e, new mp.Vector3(-252.113, 6335.384, 32.427), 204.964, 0);
mp.peds.new(0xb353629e, new mp.Vector3(1835, 3683.646, 34.27), 120.35, 0);

mp.events.subscribe({
	'Pharmacy-ShowBuyerMenu': (prices) => {
		browser.showPage('services/pharmacy', { prices });
	}
});
