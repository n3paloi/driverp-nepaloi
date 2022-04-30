export function getNearestVehicleInRange(position: Vector3Mp, range: number) {
	let currentVehicle: VehicleMp;
	let tempDist = 99999999;

	mp.vehicles.forEachInRange(position, range, (vehicle) => {
		const dist = vehicle.dist(position);

		if (dist < range && dist < tempDist) {
			currentVehicle = vehicle;
			tempDist = dist;
		}
	});

	return currentVehicle;
}

export function xyInFrontOfPos(position: Vector3Mp, heading: number, dist: number) {
	heading *= Math.PI / 180;

	position.x += dist * Math.sin(-heading);
	position.y += dist * Math.cos(-heading);

	return position;
}