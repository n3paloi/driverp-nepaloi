import * as fs from 'fs';

class ClothesPrice {
	private data = {
		masks: [],
		hats: [],
		glasses: [],
		jewerly: [],
		watches: [],
		legs: [],
		shoes: [],
		underwears: [],
		tops: []
	};

	constructor() {
		mp.events.subscribe({
			'Clothes-SavePrice': this.prepareData.bind(this)
		});
	}

	private prepareData(player: PlayerMp, type: string, style: number, value: any) {
		const price = parseInt(value, 10);
		const index = this.data[type].findIndex((item) => item[0] === style);

		if (index >= 0) {
			this.data[type][index] = [style, price];
		} else {
			this.data[type].push([style, price]);
		}

		this.saveToFile();
	}

	private saveToFile() {
		fs.writeFile('prices.json', JSON.stringify(this.data), (err) => {
			if (!err) console.log('success saved prices');
		});
	}
}

const prices = new ClothesPrice();
