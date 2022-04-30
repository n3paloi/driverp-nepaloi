import { random, round } from 'lodash';
import * as moment from 'moment';
import axios from 'axios';

type ForecastItem = {
	temperature: number;
	condition: string;
	date: string;
};

const weatherTypes = {
	Thunderstorm: ['THUNDER'],
	Drizzle: ['CLEARING'],
	Rain: ['RAIN', 'CLEARING'],
	Snow: ['XMAS', 'SNOWLIGHT'],
	Clear: ['EXTRASUNNY', 'CLEAR'],
	Clouds: ['CLOUDS', 'OVERCAST'],
	Fog: ['SMOG', 'FOGGY', 'NEUTRAL']
};

class Weather {
	private city: string;

	private forecast: ForecastItem[];

	constructor() {
		this.city = 'Los Angeles';
		this.forecast = [];

		this.subscribeToEvents();
	}

	get currentWeather() {
		return this.forecast[0];
	}

	change(firstRunning = false) {
		if (!firstRunning) this.removePrevForecastItem();

		mp.world.weather = this.currentWeather.condition;
		mp.world.setWeatherTransition(this.currentWeather.condition);

		mp.players.call('Weather-Change', [this.currentWeather.condition]);
	}

	private addForecastItem(item: ForecastItem) {
		this.forecast.push(item);
	}

	private removePrevForecastItem() {
		this.forecast.splice(0, 1);
	}

	private async loadForecast() {
		const apiKey = process.env.WEATHER_KEY;
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&lang=ru&appid=${apiKey}`;

		const { data } = await axios.get(url);

		data.list.forEach((item) => {
			const temperature = round(item.main.temp);
			const types: string[] = weatherTypes[item.weather[0].main];

			if (!types) return;

			const weather = {
				temperature,
				condition: types[random(0, types.length - 1)],
				date: moment.unix(item.dt).toLocaleString()
			};

			this.addForecastItem(weather);
		});

		this.change(true);
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			databaseConnected: this.loadForecast.bind(this),
			'Auth-SuccessLogin': (player: PlayerMp) => {
				player.call('Weather-Change', [this.currentWeather.condition]);
			}
		});

		mp.events.subscribe({
			'Weather-GetForecast': () => this.forecast
		});

		mp.events.addCommand({
			weather: (player, name = 'CLEAR') => {
				if (!player.adminLvl) return;

				this.currentWeather.condition = name;

				mp.world.weather = name;
				mp.world.setWeatherTransition(name);

				mp.players.call('Weather-Change', [this.currentWeather.condition]);
			}
		});
	}
}

const weather = new Weather();

export default weather;
