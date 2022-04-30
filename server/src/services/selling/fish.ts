import SellPoint from './index';

class FishSelling extends SellPoint {
	constructor() {
		const serviceData = {
			name: 'Продажа рыбы',
			entities: [{ x: -2195.029, y: 4289.911, z: 49.174 }],
			markerData: { radius: 0.75 }
		};

		const prices = {
			perch: [950],
			eel: [1300],
			pike: [1050],
			trout: [1900],
			zander: [1300],
			catfish: [2500],
			salmon: [4000],
			sturgeon: [3000],
			stingray: [7000],
			tuna: [1500],
			fugu: [20000]
		};

		super(true, serviceData, prices);
	}
}

export default new FishSelling();
