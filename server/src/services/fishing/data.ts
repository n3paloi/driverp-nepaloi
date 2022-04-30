export type FishingLocation = PositionEx & {
	radius: number;
	level: number;
};

export const locations: FishingLocation[] = [
	{
		x: -1256.4078369140625,
		y: 4378.82373046875,
		z: 4.243556976318359,
		radius: 18,
		level: 1
	},
	{
		x: -1214.171142578125,
		y: 4392.4208984375,
		z: 8.165022850036621,
		radius: 18,
		level: 1
	},
	{
		x: -536.6519775390625,
		y: 2924.71533203125,
		z: 14.13345718383789,
		radius: 18,
		level: 1
	},
	{
		x: 2036.510498046875,
		y: 4222.33056640625,
		z: 97.13554382324219,
		radius: 150,
		level: 2
	},
	{
		x: 1195.7783203125,
		y: 3999.5146484375,
		z: 83.49668884277344,
		radius: 150,
		level: 2
	},
	{
		x: -1449.1395263671875,
		y: 5840.072265625,
		z: 3.423810005187988,
		radius: 350,
		level: 3
	},
	{
		x: 4292.72265625,
		y: 4810.630859375,
		z: 3.211575746536255,
		radius: 350,
		level: 3
	}
];

type FishingLevel = {
	points: number;
	fish: { [name: string]: number };
};

export const fishList: { [name: string]: string } = {
	perch: 'Окунь',
	eel: 'Угорь',
	pike: 'Щука',
	trout: 'Форель',
	salmon: 'Лосось',
	sturgeon: 'Осётр',
	zander: 'Судак',
	catfish: 'Сом',
	stingray: 'Морской скат',
	tuna: 'Тунец',
	fugu: 'Фугу'
};

export const levels: FishingLevel[] = [
	{
		points: 0,
		fish: {
			perch: 40,
			pike: 30,
			eel: 20,
			trout: 10
		}
	},
	{
		points: 1500,
		fish: {
			perch: 30,
			zander: 20,
			pike: 15,
			catfish: 15,
			trout: 10,
			sturgeon: 10
		}
	},
	{
		points: 5000,
		fish: {
			eel: 40,
			tuna: 30,
			salmon: 15,
			stingray: 10,
			fugu: 5
		}
	}
];
