import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

export default new FactionGarage(
	'lssd',
	{ x: -447.472, y: 5990.538, z: 31.341 },
	garageCoords.lssd,
	[
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA', '2015polstang'],
		['towtruck', 'MTA', '2015polstang'],
		['towtruck', 'MTA', '2015polstang'],
		['towtruck', 'MTA', '2015polstang', 'g55pol'],
		['towtruck', 'MTA', '2015polstang', 'g55pol'],
		['towtruck', 'MTA', '2015polstang', 'g55pol'],
		['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot'],
		['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot'],
		['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot']
	],
	{
		paint: { primary: [249, 246, 240], secondary: [249, 246, 240], type: 0 },
		armour: 3,
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);