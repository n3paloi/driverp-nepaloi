import Building from '../../basic/building';

class SheriffBuilding extends Building {
	constructor() {
		const info = {
			name: 'Департамент шерифа',

			outPos: { x: -444.765, y: 6011.797, z: 31.716 },
			blipData: { model: 461, color: 16 }
		};
		super(info);
	}
}

const building = new SheriffBuilding();

export default building;
