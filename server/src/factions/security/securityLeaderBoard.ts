import * as rpc from 'rage-rpc';
import LeaderBoard from '../leaderBoard';
import Security from '.';

class SecurityLeaderBoard extends LeaderBoard {
	constructor() {
		const coords = { x: 1401.9302978515625, y: 1132.4140625, z: 114.33364868164062 };//Доска почета

		super(coords);
	}

	protected showMenu(player: PlayerMp) {
		const members = Security.getMembers();

		rpc.callClient(player, 'Security-ShowLeaderBoard', members);
	}
}

const leaderBoard = new SecurityLeaderBoard();
