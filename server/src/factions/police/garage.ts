import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

export default new FactionGarage(
	'lspd',
	{ x: 458.185, y: -999.186, z: 25.699 },
	garageCoords.lspd,
	[
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA'],
		['towtruck', 'MTA', 'pol718'],
		['towtruck', 'MTA', 'pol718'],
		['towtruck', 'MTA', 'pol718', 'srtpol'],
		['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang'],
		['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang'],
		['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang', 'g55pol', 'riot'],
		[
			'towtruck',
			'MTA',
			'pol718',
			'srtpol',
			'2015polstang',
			'g55pol',
			'riot',
			'polmav'
		],
		[
			'towtruck',
			'MTA',
			'pol718',
			'srtpol',
			'2015polstang',
			'g55pol',
			'riot',
			'polmav',
			'polaventa'
		],
		[
			'towtruck',
			'MTA',
			'pol718',
			'srtpol',
			'2015polstang',
			'g55pol',
			'riot',
			'polmav',
			'polaventa'
		]
	],
	{
		paint: { primary: [0, 0, 0], secondary: [0, 0, 0], type: 0 },
		armour: 3,
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);