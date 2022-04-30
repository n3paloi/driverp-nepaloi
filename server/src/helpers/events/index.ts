import rpc from 'rage-rpc';
import { isArray, isObject } from 'lodash';
import * as async from 'async';
import { ClientError } from './errors';

class Events {
	private callbackQueue: Map<
		number,
		async.AsyncQueue<{ data: any[]; callback: (...args: any[]) => void }>
	>;

	constructor() {
		this.callbackQueue = new Map();
		this.setup();
	}

	reject(reason?: any) {
		return Promise.reject(new ClientError(reason));
	}

	subscribe(
		events: { [name: string]: (player: PlayerMp, ...args) => any },
		authorized = true
	) {
		Object.entries(events).forEach(([name, callback]) =>
			rpc.register(name, async (data: null | any[], info) => {
				const player = info.player as PlayerMp;

				if (
					!mp.players.exists(player) ||
					player.performing ||
					(authorized && !player.dbId)
				)
					return;

				try {
					player.performing = true;

					const result = isArray(data)
						? await callback(player, ...data)
						: await callback(player, data);

					player.performing = false;

					return result;
				} catch (err) {
					player.performing = false;

					// if (err instanceof ClientError) return { err: { msg: err.message } };
					// if (!(err instanceof SilentError) && !err.field) {
					// 	console.error(err, `rpc event error "${name}"`);
					// }

					return Promise.reject(err);
				}
			})
		);
	}

	subscribeToDefault(events: { [name: string]: (...args) => void }) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.add(name, (...args: any[]) => {
				const player: PlayerMp = args[0];

				if (isObject(player) && player.type === 'player') {
					this.addToQueue(player.id, [...args], callback);
				} else {
					callback(...args);
				}
			});
		});
	}

	private createQueue(player: PlayerMp) {
		this.callbackQueue.set(
			player.id,
			async.queue(async ({ data, callback }) => callback(...data))
		);
	}

	private getQueue(playerId: number) {
		return this.callbackQueue.get(playerId);
	}

	private removeQueue(player: PlayerMp) {
		this.callbackQueue.delete(player.id);
	}

	private addToQueue(playerId: number, data: any[], callback: (...args: any[]) => void) {
		const queue = this.getQueue(playerId);
		if (!queue) return;

		queue.push({ data, callback });
	}

	private trackPlayerEvents() {
		mp.events.add({
			playerJoin: this.createQueue.bind(this),
			playerQuit: this.removeQueue.bind(this)
		});
	}

	private setup() {
		global.ClientError = ClientError as typeof Error;

		mp.events.subscribe = this.subscribe.bind(this);
		mp.events.subscribeToDefault = this.subscribeToDefault.bind(this);
		mp.events.reject = this.reject;

		this.trackPlayerEvents();
	}
}

export default new Events();
