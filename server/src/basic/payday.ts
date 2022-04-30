import notifications from '../helpers/notifications';
import Faction, { factions } from '../factions/faction';
import house from '../property/house';
import business from '../property/business';

class Payday {
	trigger(bonus = false) {
		this.processPlayers(bonus);
	}

	getTaxes() {
		house.taxEvent();
		business.taxEvent();
	}

	private processPlayers(bonus: boolean) {
		mp.players.forEach((player) => {
			try {
				if (!mp.players.exists(player)) return;

				if (player.paydayTime < 10) {
					return notifications.info(
						player,
						'Для получения пейдея, нужно наиграть минимум 10 мин'
					);
				}

				player.paydayTime = 0;

				const faction = factions[player.faction?.name];

				if (faction) this.giveFactionSalary(player, faction, bonus);
				else if (!player.job) this.giveUnemploymentBenefits(player);
			} catch (e) {
				console.log(e, 'payday error');
			}
		});
	}

	private async giveUnemploymentBenefits(player: PlayerMp) {
		await player.moneyHelper.change(10000, 'bank', 'unemployment benefits');
		notifications.show(
			player,
			'Уведомление',
			'FLEECA BANK',
			'Вы получили пособие по безработице в размере $10000',
			'CHAR_BANK_FLEECA',
			9
		);
	}

	private async giveFactionSalary(player: PlayerMp, faction: Faction, bonus: boolean) {
		if (!faction.isWorking(player)) return;

		const salary = faction.getSalaryOfRank(player.faction.rank - 1);
		const award = faction.government && bonus ? salary * 0.5 : 0;
		const sum = salary + award;

		await player.moneyHelper.change(sum, 'bank', 'faction salary');

		notifications.show(
			player,
			'Уведомление',
			'FLEECA BANK',
			`Вы заработали $${sum}! Продолжайте в том же духе!`,
			'CHAR_BANK_FLEECA',
			9
		);
	}
}

export default new Payday();