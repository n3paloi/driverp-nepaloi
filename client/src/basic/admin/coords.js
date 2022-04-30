const controlsIds = {
	F6: 167,
	W: 32, // 232
	S: 33, // 31, 219, 233, 268, 269
	A: 34, // 234
	D: 35, // 30, 218, 235, 266, 267
	Space: 321,
	LCtrl: 326
};

const fly = {
	flying: false,
	f: 2.0,
	w: 2.0,
	h: 2.0,
	point_distance: 1000
};

const gameplayCam = mp.cameras.new('gameplay');

let direction = null;
let coords = null;

function pointingAt(distance) {
	const farAway = new mp.Vector3(
		direction.x * distance + coords.x,
		direction.y * distance + coords.y,
		direction.z * distance + coords.z
	);

	const result = mp.raycasting.testPointToPoint(coords, farAway, [1, 16]);
	if (result === undefined) {
		return 'undefined';
	}
	return result;
}

mp.events.add('AGM', () => {
	const player = mp.players.local;
	const adminLvl = player.getVariable('adminLvl');

	if (!adminLvl) return;

	const toggle = !mp.game.player.getInvincible();

	player.setInvincible(toggle);
	mp.game.ui.notifications.info(toggle ? 'GodMode: Включен' : 'GodMode: Выключен');
});

mp.events.add('render', () => {
	const { controls } = mp.game;

	direction = gameplayCam.getDirection();
	coords = gameplayCam.getCoord();

	if (controls.isControlJustPressed(0, controlsIds.F6)) {
		const player = mp.players.local;
		const adminLvl = player.getVariable('adminLvl');

		if (!adminLvl) return;

		fly.flying = !fly.flying;

		player.freezePosition(fly.flying);

		if (!fly.flying && !controls.isControlPressed(0, controlsIds.Space)) {
			const { position } = player;

			position.z = mp.game.gameplay.getGroundZFor3dCoord(
				position.x,
				position.y,
				position.z,
				0.0,
				false
			);
			player.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
		}

		mp.game.ui.notifications.info(fly.flying ? 'Полёт: Включен' : 'Полёт: Выключен');

	} else if (fly.flying) {
		let updated = false;
		const { position } = mp.players.local;

		if (controls.isControlPressed(0, controlsIds.W)) {
			if (fly.f < 8.0) {
				fly.f *= 1.025;
			}

			position.x += direction.x * fly.f;
			position.y += direction.y * fly.f;
			position.z += direction.z * fly.f;
			updated = true;
		} else if (controls.isControlPressed(0, controlsIds.S)) {
			if (fly.f < 8.0) {
				fly.f *= 1.025;
			}

			position.x -= direction.x * fly.f;
			position.y -= direction.y * fly.f;
			position.z -= direction.z * fly.f;
			updated = true;
		} else {
			fly.f = 2.0;
		}

		if (controls.isControlPressed(0, controlsIds.A)) {
			if (fly.l < 8.0) {
				fly.l *= 1.025;
			}

			position.x += -direction.y * fly.l;
			position.y += direction.x * fly.l;
			updated = true;
		} else if (controls.isControlPressed(0, controlsIds.D)) {
			if (fly.l < 8.0) {
				fly.l *= 1.05;
			}

			position.x -= -direction.y * fly.l;
			position.y -= direction.x * fly.l;
			updated = true;
		} else {
			fly.l = 2.0;
		}

		if (controls.isControlPressed(0, controlsIds.Space)) {
			if (fly.h < 8.0) {
				fly.h *= 1.025;
			}

			position.z += fly.h;
			updated = true;
		} else if (controls.isControlPressed(0, controlsIds.LCtrl)) {
			if (fly.h < 8.0) {
				fly.h *= 1.05;
			}

			position.z -= fly.h;
			updated = true;
		} else {
			fly.h = 2.0;
		}

		if (updated) {
			mp.players.local.setCoordsNoOffset(
				position.x,
				position.y,
				position.z,
				false,
				false,
				false
			);
		}
	}
});

mp.events.subscribe({
	getCamCoords: () => {
		const data = {
			position: coords,
			point: pointingAt(fly.point_distance).position
		};
		return data;
	}
});