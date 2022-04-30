import cameraHelper from '../../helpers/camera';

const initialState = {
	angle: 0,
	dist: 1,
	height: 0
};

class VehicleShopCamera {
	private state = initialState;

	private readonly position: Vector3Mp;

	private readonly point: Vector3Mp;

	private camera: CameraMp;

	constructor(position: Vector3Mp, point: Vector3Mp) {
		this.position = position;
		this.point = point;
		this.reset();

		mp.events.subscribe({
			'VehicleShopCamera-SetState': this.setState.bind(this)
		});
	}

	reset() {
		if (this.camera) return cameraHelper.reset();

		cameraHelper.set(this.position, new mp.Vector3(0, 0, 0), this.point, 50);
		this.camera = cameraHelper.entity;
	}

	private setState(prop: keyof typeof initialState, value: number) {
		if (typeof this.state[prop] !== 'number') return;

		this.state[prop] = value;
		const { x, y, z } = this.position;
		const { height, angle, dist } = this.state;

		const newPosition = cameraHelper.getOffset(
			new mp.Vector3(x, y, z + height),
			angle,
			dist
		);
		this.camera.setCoord(newPosition.x, newPosition.y, newPosition.z);
		this.camera.pointAtCoord(x, y, z + height);
	}
}

export default VehicleShopCamera;
