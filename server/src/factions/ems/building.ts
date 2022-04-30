import Building from '../../basic/building';

class EmsBuilding extends Building {
	constructor() {
		const info = {
			name: 'EMS',

			outPos: { x:311.2546, y:-592.4204, z:42.32737 },
			//inPos: { x:319.01153564453125, y:-559.0020751953125, z:28.743432998657227},
			markerData: { radius: 0.75, color: [58, 226, 206, 85] },
			blipData: { model: 61, color: 1 }
		};
		super(info);
	}
}

const building = new EmsBuilding();

export default building;
