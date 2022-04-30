import Building from '../../basic/building';
import doors from '../../data/doors';

class PoliceBuilding extends Building {
  constructor() {
    const info = {
      name: 'Полицейский участок',

      outPos: { x: 441.09, y: -982.429, z: 30.69 },
      blipData: { model: 461, color: 3 },
    };
    super(info);

    this.createDoors();
  }

  createDoors() {
    doors.police.forEach((door) => this.createDoorShape(door));
  }
}

const building = new PoliceBuilding();

export default building;