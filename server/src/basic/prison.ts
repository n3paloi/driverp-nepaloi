import * as moment from 'moment';
import * as rpc from 'rage-rpc';
import { random } from 'lodash';
import Violator from '../models/Violator';
import cells from '../data/prisonCells';
import notifications from '../helpers/notifications';
import { finishWork } from '../jobs/job';

const articles: { [key: number]: { title: string; time: number } } = {
	1.1: {
		title: 'Убийство мирного жителя',
		time: 15
	},
	1.2: {
		title: 'Убийство сотрудника гос. службы',
		time: 20
	},
	1.3: {
		title: 'Угон транспортного средства',
		time: 10
	},
	1.4: {
		title: 'Работа на нелегальной плантации',
		time: 10
	},
	1.5: {
		title: 'Сбыт нелегальных веществ',
		time: 5
	},
	1.6: {
		title: 'Покупка нелегального оружия',
		time: 5
	},
	1.7: {
		title: 'Ограбление мирного жителя',
		time: 5
	},
	1.8: {
		title: 'Подделка гос. номера ТС',
		time: 10
	},
	1.9: {
		title: 'Подделка документов',
		time: 10
	},
	2.0: {
		title: 'Взлом гос. базы данных',
		time: 10
	},
	2.1: {
		title: 'Подделка лицензий',
		time: 10
	}
};

type Violator = {
	inside: boolean;
	time: number;
	reason?: string;
	violations: number[];
};

class Prison {
	private violators: Map<number, Violator>;

	constructor() {
		this.violators = new Map();

		this.subscribeToEvents();
	}

	getViolator(id: number) {
		return this.violators.get(id);
	}

	isImprisoned(player: PlayerMp) {
		return !!player.getVariable('insideJail');
	}

	startJail(player: PlayerMp, policeman?: PlayerMp) {
		const violator = this.getViolator(player.id);

		if (!player.cuff && policeman) {
			return notifications.error(policeman, 'Наденьте наручники на подозреваемого!');
		}
		if (!violator || violator.inside) return Promise.reject(new Error());

		finishWork(player);

		player.tp(cells[random(0, cells.length - 1)]);
		player.setVariable('insideJail', true);
		player.setVariable('isPlayingAnim', false);

		player.cuff = false;
		rpc.callClient(player, 'Police-Untie');

		violator.reason = violator.reason ?? violator.violations.join();
		violator.inside = true;
		violator.violations = [];
		this.violators.set(player.id, violator);

		if (policeman)
			notifications.info(policeman, `Общее время заключения: ${violator.time} минут`);
		notifications.info(
			player,
			`Общее время заключения: ${violator.time} минут. Причина: ${violator.reason}`
		);
	}

	async toDemorgan(player: PlayerMp, time: number, reason: string) {
		if (this.isImprisoned(player)) return mp.events.reject();

		const violator = this.getViolator(player.id);

		if (violator) {
			violator.time += time;
			violator.reason = reason;
		} else await this.addViolator(player, time, reason);

		this.startJail(player);
	}

	jailEvent() {
		const operations = [];

		this.violators.forEach((violator, id) => {
			const player = mp.players.at(id);

			if (!violator.inside || !mp.players.exists(player)) return;

			if (--violator.time <= 0) {
				operations.push({
					deleteOne: { filter: { userId: player.dbId } }
				});

				return this.releaseViolator(player);
			}

			this.violators.set(id, violator);

			operations.push({
				updateOne: {
					filter: { userId: player.dbId },
					update: {
						inside: violator.inside,
						time: violator.time,
						violations: violator.violations,
						reason: violator.reason
					}
				}
			});

			notifications.info(
				player,
				`Оставшееся время: ${violator.time} минут. Причина: ${violator.reason}`
			);
		});

		if (operations.length) Violator.bulkWrite(operations);
	}

	async addViolation(player: PlayerMp, article: number) {
		let violator = this.getViolator(player.id);

		if (!violator) violator = await this.addViolator(player);
		if (violator.violations.includes(article)) return;

		violator.time += articles[article].time;
		violator.violations.push(article);

		await Violator.findOneAndUpdate(
			{ userId: player.dbId },
			{
				$set: {
					time: violator.time,
					violations: violator.violations,
					violatedAt: Date.now()
				}
			}
		);
		this.violators.set(player.id, violator);

		notifications.show(
			player,
			'Преступление',
			'LS POLICE',
			`${articles[article].title}`,
			'CHAR_CALL911',
			0
		);
	}

	async deleteViolator(violator: PlayerMp) {
		await Violator.findOneAndRemove({ userId: violator.dbId });
		this.violators.delete(violator.id);
	}

	async loadViolator(player: PlayerMp) {
		const violator = await Violator.findOne({ userId: player.dbId }).lean();

		if (violator) {
			if (violator.inside) player.setVariable('insideJail', true);

			this.violators.set(player.id, {
				inside: violator.inside,
				time: violator.time,
				violations: violator.violations,
				reason: violator.reason
			});
		}
	}

	releaseViolator(player: PlayerMp) {
		this.violators.delete(player.id);

		player.setVariable('insideJail', false);
		player.call('Police-Untie');
		player.tp({ x: 1848.781, y: 2585.884, z: 45.672 });

		notifications.success(player, 'Вы свободны!');
	}

	onPlayerKnock(player: PlayerMp, killer: PlayerMp) {
		if (
			player === killer ||
			(killer.isGovMember() && killer.faction.working) ||
			player.getVariable('isDying')
		)
			return;

		if (player.isGovMember()) this.addViolation(killer, 1.2);
		else this.addViolation(killer, 1.1);
	}

	private async addViolator(player: PlayerMp, time = 0, reason?: string) {
		const data = {
			inside: false,
			time,
			reason,
			violations: []
		};

		await new Violator({ userId: player.dbId, ...data }).save();
		this.violators.set(player.id, data);

		return data;
	}

	private async clearOldViolators() {
		await Violator.deleteMany({
			violatedAt: {
				$lt: moment().subtract(7, 'days').toISOString()
			}
		});
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			databaseConnected: this.clearOldViolators
		});

		mp.events.subscribe({
			'Prison-GetViolators': () => {
				const data = [];

				this.violators.forEach((violator, id) => {
					const player = mp.players.at(id);

					if (!player || violator.inside) return;

					data.push({
						id,
						name: player.getVariable('realName'),
						violations: violator.violations
					});
				});

				return data;
			}
		});

		mp.events.add('playerQuit', (player: PlayerMp) => {
			if (player.dbId && this.violators.has(player.id)) {
				this.violators.delete(player.id);
			}
		});
	}
}

export default new Prison();
