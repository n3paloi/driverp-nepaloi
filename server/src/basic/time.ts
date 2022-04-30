import * as moment from 'moment';
import random from 'math-random';
import objectCleaner from './object-cleaner';
import weather from './weather';
import prison from './prison';
import Referal from './referal';
import payday from './payday';
import playerCtrl from './player';
import hunger from './player/hunger';
import { setRandomExchangePrice } from '../services/selling';

class Time {
	exchangeHour: number;

	constructor() {
		this.exchangeHour = Math.floor(random() * 4) + 1;
		this.runTimer();
	}

	get isNight() {
		const hours = new Date().getHours();
		return hours >= 22 || hours <= 6;
	}

	getTime() {
		return moment().format('HH:mm');
	}

	setTimeForPlayer(player: PlayerMp) {
		player.dialog.showDate(new Date().toString());
	}

	private runTimer() {
		const remainingTime =
			(60 - moment().seconds()) * 1000 + (1000 - moment().milliseconds());

		setTimeout(() => setInterval(() => this.changeTime(), 60000), remainingTime);

		this.changeTime(true);
	}

	private everyHourEvent() {
		payday.trigger(this.isNight);
		objectCleaner.clear();
	}

	private changeTime(firstRunning = false) {
		const currentDate = new Date();
		const hour = currentDate.getHours();
		const minutes = currentDate.getMinutes();

		mp.world.time.hour = hour;
		mp.world.time.minute = minutes;

		if (hour % this.exchangeHour === 0 && minutes === 0) {
			setRandomExchangePrice();
			this.exchangeHour = Math.floor(random() * 4) + 1;
		}

		if (hour === 0 && minutes === 30) payday.getTaxes();

		if (firstRunning) return;

		if (minutes === 0) {
			this.everyHourEvent();
			if (hour % 3 === 0) weather.change();
		}

		prison.jailEvent();
		this.updateForPlayers(minutes % 2 === 0);
	}

	private updateForPlayers(save = false) {
		const updated: PlayerMp[] = [];

		mp.players.toArray().forEach((player) => {
			if (!mp.players.exists(player) || !player.dbId) return;

			this.setTimeForPlayer(player);
			hunger.decrease(player);

			player.playedTime += 1;
			player.paydayTime += 1;

			if (player.playedTime === Referal.fullfiledTime * 60) {
				Referal.giveMoney(player);
			}

			updated.push(player);
		});

		if (save) playerCtrl.savePlayers(updated);
	}
}

export default new Time();
