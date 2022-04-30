import browser from '../utils/browser';
import './diver';
import './taxi';
import './carThief';
import './goldMiner';
import './orangeCollector';
import './pineappleCollector';
import './weedCollector';
import './towTruckDriver';
import './trucker';
import './waterfront';

mp.events.subscribe({
	'Job-ShowMenu': (name, isWorking, currentPoints, currentLevel, remainingPoints) => {
		browser.showPage('job', {
			jobName: name,
			points: {
				current: currentPoints,
				remaining: remainingPoints
			},
			isWorking,
			currentLevel
		});
	}
});
