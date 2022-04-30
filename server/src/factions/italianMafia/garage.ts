import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

export default new FactionGarage(
	'italy',
	{ x: -2598.978, y: 1929.757, z: 167.311 },
	garageCoords.italy,
	[
		['dl2016'],
		['dl2016'],
		['dl2016', 'S63AMG'],
		['dl2016', 'S63AMG'],
		['dl2016', 'S63AMG'],
		['dl2016', 'S63AMG', 'bentayga17'],
		['dl2016', 'S63AMG', 'bentayga17'],
		['dl2016', 'S63AMG', 'bentayga17', 'svr16'],
		['dl2016', 'S63AMG', 'bentayga17', 'svr16'],
		['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus'],
		['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus'],
		['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus']
	],
	{
		paint: { primary: [240, 240, 240], secondary: [240, 240, 240], type: 0 },
		armour: 1,
		glasses: 1,
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);
