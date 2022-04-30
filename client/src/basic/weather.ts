let currentWeather = 'EXTRASUNNY';

mp.events.add('Weather-Change', (weather) => {
	currentWeather = weather;

	mp.game.gameplay.setWeatherTypeNow(currentWeather);
});

setInterval(() => {
	mp.game.gameplay.setWeatherTypeNow(currentWeather);
}, 20000);
