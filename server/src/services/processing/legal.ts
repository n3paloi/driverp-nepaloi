import Processing from './index';

class LegalProcessing extends Processing {
	constructor() {
		const serviceData = {
			name: 'Переработка ресурсов',
			entities: [{ x: 980.209, y: -1705.758, z: 31.117 }],
			markerData: { radius: 0.75 },
			blipData: { model: 467, color: 71 }
		};

		const products = {
			'orange-juice': {
				type: 'food',
				need: {
					name: 'orange',
					count: 4
				}
			},
			'pineapple-juice': {
				type: 'food',
				need: {
					name: 'pineapple',
					count: 2
				}
			}
		};

		super(true, serviceData, products);
	}
}

export default new LegalProcessing();
