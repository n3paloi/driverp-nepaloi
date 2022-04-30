import SellPoint from './index';

class IllegalSelling extends SellPoint {
	constructor() {
		const serviceData = {
			name: 'Сбыт наркотиков',
			entities: [{ x: 2484.767, y: 3446.91, z: 51.065 }],
			markerData: { radius: 0.75 },
			blipData: { model: 480, color: 1 }
		};

		const prices = {
			weed: [210, 80, 156, 180, 288, 400, 350, 329, 104],
			joint: [1600, 1000, 800, 1200, 1500, 900, 600]
		};

		super(false, serviceData, prices);
	}
}

export default new IllegalSelling();
