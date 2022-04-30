import rpc from 'rage-rpc';
import { isNumber } from 'lodash';

class Players {
	constructor() {
		mp.players.getById = this.getById.bind(this);
		mp.players.callInStream = this.callInStream.bind(this);
	}

	getById(id: number) {
		return isNumber(id) && id >= 0 ? mp.players.at(id) : null;
	}

	callInStream(position: Vector3Mp, event: string, args?: any) {
		mp.players.forEachInRange(
			position,
			mp.config['stream-distance'],
			(player: PlayerMp) => rpc.callClient(player, event, args)
		);
	}
}

export default new Players();
