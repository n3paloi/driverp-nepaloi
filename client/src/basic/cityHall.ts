import browser from '../utils/browser';//НПС в Мерии

mp.peds.new(0x47e4eea0, new mp.Vector3(242.11776733398438, 226.86061096191406,106.287109375), 154.01583);
mp.peds.new(0x2799efd8, new mp.Vector3(247.5660858154297, 224.80258178710938, 106.28736114501953), 158.1208);
mp.peds.new(0x45918e44, new mp.Vector3(252.8838653564453, 222.97994995117188, 106.2868881225586), 152.279434);

mp.events.subscribe({
	'CityHall-ShowMenu': (type, prices, licenses) => {
		browser.showPage(`cityhall/${type}`, {
			prices,
			playerLicenses: licenses,
			playerName: mp.players.local.getVariable('realName')
		});
	}
});