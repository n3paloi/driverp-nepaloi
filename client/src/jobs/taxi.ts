import browser from '../utils/browser';

mp.events.subscribe({
	'Taxi-ShowConfirm': () => {
		browser.showPage('job/taxi');
	}
});
