import SellPoint from './index';

class LegalSelling extends SellPoint {
	constructor() {
		const serviceData = {
			name: 'Продажа ресурсов',
			entities: [
				{ x: -1079.415, y: -2138.506, z: 13.395 },
				{ x: 1963.115, y: 5184.533, z: 47.979 }
			],
			markerData: { radius: 0.75 },
			blipData: { model: 514, color: 25 }
		};

		const prices = {
			orange: [60, 122, 144, 200, 130, 174, 100, 88, 70],
			pineapple: [80, 102, 167, 201, 200, 63, 270, 150, 40],
			gold: [180, 463, 247, 420, 500, 300, 280, 650],
			coral: [522, 360, 580, 250, 628, 723, 444],
			'orange-juice': [144, 245, 800, 750, 240, 160, 600, 320, 400],
			'pineapple-juice': [200, 550, 380, 245, 450, 190, 100, 400]
		};

		super(true, serviceData, prices);
	}
}

export default new LegalSelling();
