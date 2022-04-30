import notifications from '../../helpers/notifications';
import { getPlayerByDbId } from '../../utils/players';
import ReportModel from '../../models/Report';
import chat from '../chat';
import permissions from './permissions';

class Reports {
	constructor() {
		mp.events.subscribe({
			'Admin-GetReports': Reports.getReports.bind(this),
			'Admin-CreateReport': this.create.bind(this),
			'Admin-ReplyOnReport': this.reply.bind(this)
		});
	}

	async create(player: PlayerMp, message: string) {
		const isReported = await Reports.isReported(player.dbId);
		if (isReported) return;

		await ReportModel.create({ sender: player.dbId, message });
		this.notifyAll(message);
	}

	private async reply(admin: PlayerMp, reportId: string, message: string) {
		if (!permissions.hasPermission(admin, 'helper')) {
			return mp.events.reject();
		}

		const report = await ReportModel.findById(reportId);
		const sender = getPlayerByDbId(report?.sender);
		if (!sender) return mp.events.reject('Игрока нет в сети');

		await report.remove();

		chat.sendSystem(`[ADMIN]${admin.getName()}: ${message}`, sender);
		notifications.info(
			sender,
			'Администратор ответил на ваш репорт. Проверьте игровой чат!'
		);
	}

	private static async isReported(sender: string) {
		const count = await ReportModel.findOne({ sender }).countDocuments();
		return count >= 3;
	}

	private static async getReports(player: PlayerMp, page: number) {
		const data = await ReportModel.find({ admin: { $exists: false } })
			.skip(page * 20)
			.limit(20)
			.sort({ _id: -1 })
			.populate({
				path: 'sender',
				select: 'uid firstName lastName'
			})
			.lean();

		return data.map((item) => {
			const { sender } = item;

			return {
				...item,
				sender: sender
					? `${sender.firstName} ${sender.lastName} #${sender.uid}`
					: 'Deleted'
			};
		});
	}

	private notifyAll(message: string) {
		mp.players.forEach(
			(player) =>
				permissions.hasPermission(player, 'helper') && notifications.info(player, message)
		);
	}
}

const reports = new Reports();
