import * as rpc from 'rage-rpc';
import LeaderBoard from '../leaderBoard';
import Mafia from '.';

class MafiaLeaderBoard extends LeaderBoard {
	constructor() {
		const coords = { x: -2590.527099609375, y: 1882.3876953125, z: 167.3199920654297 };

		super(coords);
	}

	protected showMenu(player: PlayerMp) {
		const members = Mafia.getMembers();

		rpc.callClient(player, 'ItalianMafia-ShowLeaderBoard', members);
	}
}

const leaderBoard = new MafiaLeaderBoard();
