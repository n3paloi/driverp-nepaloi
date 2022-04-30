import objectsList from '../data/objects';

class Objects {
	hasObject(entity: EntityMp, name: string) {
		const data = objectsList[name];
		const object = entity.getVariable('attachedObject');

		return data && object?.model === data.model;
	}

	attach(entity: EntityMp, name: string) {
		const object = objectsList[name];
		if (!object || !entity) return;

		entity.setVariable('attachedObject', object);
		mp.players.call('attachObject', [entity]);
	}

	detach(entity: EntityMp) {
		if (!entity) return;

		entity.setVariable('attachedObject', null);
		mp.players.call('detachObject', [entity]);
	}
}

export default new Objects();
