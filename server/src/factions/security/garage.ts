import { garageCoords } from '../../data/factions/coords';
import FactionGarage from '../garage';

export default new FactionGarage(
	'secure',
	{ x: 1417.192, y: 1115.393, z: 114.831 },
	garageCoords.secure,
	[
		['w140'],
		['w140'],
		['w140'],
		['w140', '16challenger'],
		['w140', '16challenger'],
		['w140', '16challenger', 'lx2018'],
		['w140', '16challenger', 'lx2018', 'g65amg'],
		['w140', '16challenger', 'lx2018', 'g65amg'],
		['w140', '16challenger', 'lx2018', 'g65amg', 'srt8'],
		['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90'],
		['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90', '18performante'],
		['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90', '18performante']
	],
	{
		paint: { primary: [0, 0, 0], secondary: [0, 0, 0], type: 0 },
		armour: 1,
		glasses: 1,
		engine: 3,
		turbo: 0,
		transmission: 2,
		brakes: 2
	}
);