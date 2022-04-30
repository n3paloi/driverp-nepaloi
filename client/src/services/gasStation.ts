import browser from '../utils/browser';

mp.events.subscribe({
	'GasStation-ShowDialog': (prices) => {
		browser.showPage('services/gas_station', { prices });
	}
});

mp.objects.new(
	mp.game.joaat('prop_gas_pump_1b'),
	new mp.Vector3(10.838, -2793.1169, 1.523),
	{
		rotation: new mp.Vector3(0, 0, 92)
	}
);
