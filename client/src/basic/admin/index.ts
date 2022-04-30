import browser from '../../utils/browser';
import './coords';
import './esp';
import './spectator';

mp.events.subscribe({
	'Admin-ShowMenu': (level: number, players) => {
		browser.showPage('admin', { adminLvl: level, players });
	}
});
