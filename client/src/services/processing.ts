import browser from '../utils/browser';

// illegal
mp.peds.new(0x9d0087a8, new mp.Vector3(1389.88, 3608.8139, 38.9423), 210.928);
// legal
mp.peds.new(0xdb9c0997, new mp.Vector3(981.215, -1705.843, 31.226), 83.392);

mp.events.subscribe({
	'Processing-ShowMenu': (legal, products) => {
		browser.showPage('services/processing', { products, legal });
	}
});
