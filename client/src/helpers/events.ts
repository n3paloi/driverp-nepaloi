import * as rpc from 'rage-rpc';
import { isArray } from 'lodash';

class Events {
	constructor() {
		mp.events.subscribe = this.subscribe;
		mp.events.subscribeToDefault = this.subscribeToDefault;
		mp.events.subscribeToData = this.subscribeToData;
	}

	subscribe(events: { [name: string]: (...args) => any }) {
		Object.entries(events).forEach(([name, callback]) =>
			rpc.register(name, (data: any[]) => {
				return isArray(data) ? callback(...data) : callback(data);
			})
		);
	}

	subscribeToDefault(events: { [name: string]: (...args) => void }) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.add(name, (...args: any[]) => callback(...args));
		});
	}

	subscribeToData(events: {
		[name: string]: (entity: EntityMp, data: any, oldData?: any) => void;
	}) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.addDataHandler(name, (entity: EntityMp, data: any, oldData) =>
				callback(entity, data, oldData)
			);
		});
	}
}

const events = new Events();
