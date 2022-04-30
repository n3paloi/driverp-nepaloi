import browser from '../utils/browser';

mp.events.subscribe({
	'CarWash-ShowBuyerMenu': (price: number) => {
		browser.showPage('services/car_wash', { price });
	}
});
