class ObjectCleaner {
	private isInventoryItem(shape: ColshapeMp) {
		return !!shape.thing;
	}

	clear() {
		mp.colshapes.forEach((item) => {
			try {
				if (!this.isInventoryItem(item)) return;

				const { shape, object, label } = item.thing.obj;

				const shapeItem = mp.colshapes.at(shape);
				const labelItem = mp.labels.at(label);
				const objectItem = mp.objects.at(object);

				if (shapeItem) shapeItem.destroy();
				if (labelItem) labelItem.destroy();
				if (objectItem) objectItem.destroy();
			} catch (err) {
				console.log(err, 'object cleaner err');
			}
		});
	}
}

export default new ObjectCleaner();
