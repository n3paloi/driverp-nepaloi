import UserModel from 'models/User';

export type PermissionLevel = 'helper' | 'admin' | 'gm';

class AdminPermissions {
	private readonly list: { [name in PermissionLevel]: number };

	constructor() {
		this.list = {
			helper: 1,
			admin: 2,
			gm: 3
		};
	}

	hasPermission(player: PlayerMp, level: PermissionLevel) {
		return player.adminLvl >= this.list[level];
	}

	async giveAccess(player: PlayerMp, level: PermissionLevel) {
		await this.setPermission(player, level);
	}

	async withdrawAccess(player: PlayerMp) {
		await this.setPermission(player);
	}

	private async setPermission(player: PlayerMp, level?: PermissionLevel) {
		const index = this.list[level] || 0;

		await UserModel.findByIdAndUpdate(player.dbId, {
			$set: { adminLvl: index }
		});

		player.adminLvl = index;
	}
}

export default new AdminPermissions();
