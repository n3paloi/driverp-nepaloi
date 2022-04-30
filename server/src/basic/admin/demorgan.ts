import moment from 'moment';
import notifications from '../../helpers/notifications';
import prison from '../prison';
import permissions from './permissions';

class AdminDemorgan {
	constructor() {
		mp.events.subscribe({
			'Admin-SetDemorgan': this.setDemorgan.bind(this),
			'Admin-ReleaseFromPrison': this.releasePlayer.bind(this)
		});
	}

	private async setDemorgan(admin: PlayerMp, id: number, term: string, reason: string) {
		if (!permissions.hasPermission(admin, 'helper')) return;

		const minutes = this.getMinutesAmount(term);
		if (!permissions.hasPermission(admin, 'admin') && minutes > 4 * 60) {
			return notifications.error(admin, 'Максимальный срок - 4 часа');
		}

		const target = mp.players.getById(id);
		if (target) {
			await prison.toDemorgan(target, minutes, reason);
			notifications.success(admin, 'Игрок отправлен в деморган');
		}
	}

	private async releasePlayer(admin: PlayerMp, id: number) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		const target = mp.players.at(id);
		if (target && prison.isImprisoned(target)) {
			await prison.deleteViolator(target);
			prison.releaseViolator(target);

			notifications.success(admin, 'Игрок освобожден из тюрьмы');
		}
	}

	private getMinutesAmount(date: string) {
		return moment(date).diff(moment(), 'minutes');
	}
}

const demorgan = new AdminDemorgan();
