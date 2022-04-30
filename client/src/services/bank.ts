import peds from '../configs/peds/bankers';
import loadPeds from '../utils/loadPeds';
import browser from '../utils/browser';

loadPeds(peds, 0x999b00c6);

mp.events.subscribe({
	'Bank-ShowMenu': () => {
		browser.showPage('services/bank');
	}
});
