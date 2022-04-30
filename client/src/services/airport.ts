import browser from '../utils/browser';

mp.peds.new(0xf63de8e1, new mp.Vector3(-1229.699, -3378.027, 13.945), 337.0249);

mp.events.subscribe({
	'Airport-ShowMenu': (items) => browser.showPage('services/airport', { items })
});
