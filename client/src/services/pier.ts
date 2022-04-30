import browser from '../utils/browser';

mp.peds.new(0x4a8e5536, new mp.Vector3(-774.297, -1431.191, 1.596), 230.0);
mp.peds.new(0x4a8e5536, new mp.Vector3(-264.008, 6661.372, 1.682), 248.671);

mp.events.subscribe({
	'Pier-ShowMenu': (boats) => browser.showPage('services/pier', { boats })
});
