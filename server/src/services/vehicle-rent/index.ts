import scooterCoords from '../../data/services/scooterRental';
import boatCoords from '../../data/services/boatRental';
import VehicleRent from './rent';

type RentPoint = {
	name: string;
	blip: { model: number; color: number };
	coords: PositionEx[];
	vehicleModel: string;
	price: number;
	dist: number;
	license?: string;
};

const points: RentPoint[] = [
	{
		name: 'Аренда скутеров',
		blip: { model: 522, color: 4 },
		coords: scooterCoords,
		vehicleModel: 'faggio2',
		price: 150,
		dist: 2
	},
	{
		name: 'Аренда лодок',
		blip: { model: 780, color: 4 },
		coords: boatCoords,
		vehicleModel: 'dinghy',
		price: 2500,
		dist: 5,
		license: 'boat'
	}
];

points.forEach((point) => {
	const { name, blip, coords, vehicleModel, price, dist, license } = point;
	return new VehicleRent(name, blip, coords, dist, vehicleModel, price, license);
});
