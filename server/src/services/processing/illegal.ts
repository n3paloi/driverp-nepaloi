import Processing from './index';

class IllegalProcessing extends Processing {
	constructor() {
		const serviceData = {
			name: 'Переработка наркотиков',
			entities: [{ x: 1390.273, y: 3607.683, z: 38.941 }],
			markerData: { radius: 0.75 },
			blipData: { model: 140, color: 66 }
		};

		const products = {
			joint: {
				type: 'resources',
				need: {
					name: 'weed',
					count: 4
				}
			}
		};

		super(false, serviceData, products);
	}
}

export default new IllegalProcessing();
