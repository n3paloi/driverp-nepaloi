import * as rpc from 'rage-rpc';
import LeaderBoard from '../leaderBoard';
import Sheriff from '.';

class SheriffLeaderBoard extends LeaderBoard {
	constructor() {
		const coords = { x: -440.497, y: 6005.873, z: 31.716 };

		super(coords);
	}

	protected showMenu(player: PlayerMp) {
		const members = Sheriff.getMembers();

		rpc.callClient(player, 'Sheriff-ShowLeaderBoard', members);
	}
}

const leaderBoard = new SheriffLeaderBoard();
