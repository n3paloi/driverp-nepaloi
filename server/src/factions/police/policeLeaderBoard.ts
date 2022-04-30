import * as rpc from 'rage-rpc';
import LeaderBoard from '../leaderBoard';
import Police from '.';

class PoliceLeaderBoard extends LeaderBoard {
	constructor() {
		const coords = { x: 472.4600524902344, y: -992.0211791992188, z: 30.689800262451172 };

		super(coords);
	}

	protected showMenu(player: PlayerMp) {
		const members = Police.getMembers();

		rpc.callClient(player, 'Police-ShowLeaderBoard', members);
	}
}

const leaderBoard = new PoliceLeaderBoard();
