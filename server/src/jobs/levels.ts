import { last } from 'lodash';
import User from '../models/User';

export type Level = {
	points: number;
	salary: number;
};

export default class JobLevels {
	private name: string;

	private levels: Level[];

	private awardPoints: number;

	constructor(name: string, levels: Level[], award: number) {
		this.name = name;
		this.levels = levels;
		this.awardPoints = award;
	}

	getCurrentLevel(player: PlayerMp) {
		const points = this.getCurrentPoints(player);

		return this.levels.slice().sort((level) => (level.points >= points ? 1 : -1))[0];
	}

	needPoints(level: Level) {
		const levelNumber = this.getLevelNumber(level);

		const { points } = this.levels[levelNumber] || level;

		return points;
	}

	getLevelNumber(level: Level) {
		return this.levels.findIndex((item) => level.points <= item.points) + 1;
	}

	getCurrentPoints(player: PlayerMp): number {
		return player.jobs[this.name] || 0;
	}

	private isMaxLevel(level: Level) {
		const { points: maxPoints } = last(this.levels);

		return maxPoints === level.points;
	}

	async giveAward(player: PlayerMp) {
		const currentLevel = this.getCurrentLevel(player);
		const { salary } = currentLevel;

		if (salary) await player.moneyHelper.change(salary, 'cash');
		if (this.isMaxLevel(currentLevel)) return;

		if (player.jobs[this.name]) player.jobs[this.name] += this.awardPoints;
		else player.jobs[this.name] = this.awardPoints;

		await User.findByIdAndUpdate(player.dbId, { jobs: player.jobs });
	}
}
