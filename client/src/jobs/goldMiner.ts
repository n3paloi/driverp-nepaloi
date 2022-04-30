import browser from '../utils/browser';

mp.peds.new(0x6c9b2849, new mp.Vector3(-599.676, 2093.428, 131.271), 6.217);

mp.events.subscribe({
	'GoldMiner-ShowMenu': (isWorking, price) => {
		browser.showPage('job/gold_miner', { isWorking, price });
	}
});
