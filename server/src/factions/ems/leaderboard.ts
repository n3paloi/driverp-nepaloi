import * as rpc from 'rage-rpc';
import LeaderBoard from '../leaderBoard';
import Ems from '.';

class EmsLeaderBoard extends LeaderBoard {
	constructor() {
		const coords = { x: 306.774, y: -567.855, z: 43.284 };

		super(coords);
	}

	protected showMenu(player: PlayerMp) {
		const members = Ems.getMembers();

		rpc.callClient(player, 'EMS-ShowLeaderBoard', members);
	}
}

const leaderBoard = new EmsLeaderBoard();
