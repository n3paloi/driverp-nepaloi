import actions from './actions';

const localPlayer = mp.players.local;

class Forefinger {
	private active = false;

	private lastSent = 0;

	private gameplayCam = mp.cameras.new('gameplay');

	private interval: NodeJS.Timeout;

	start() {
		if (
			this.active ||
			mp.gui.cursor.visible ||
			localPlayer.vehicle ||
			localPlayer.isBeingStunned(0) ||
			localPlayer.isUpsidedown() ||
			localPlayer.isCuffed() ||
			localPlayer.isFalling() ||
			localPlayer.isGettingUp() ||
			localPlayer.getVariable('isPlayingAnim') ||
			localPlayer.getVariable('animation')
		)
			return;

		this.active = true;

		this.setAnimation(localPlayer);

		this.interval = setInterval(this.process.bind(this), 0);
	}

	stop() {
		if (!this.active) return;

		clearInterval(this.interval);

		this.interval = null;
		this.active = false;

		mp.game.invoke('0xd01015c7316ae176', localPlayer.handle, 'Stop');

		if (!localPlayer.isInAnyVehicle(true)) {
			mp.game.invoke('0x0725a4ccfded9a70', localPlayer.handle, 1, 1, 1, 1);
		}

		localPlayer.setConfigFlag(36, false);

		if (
			!localPlayer.vehicle &&
			!actions.isActive &&
			!localPlayer.getVariable('isPlayingAnim')
		) {
			localPlayer.clearTasksImmediately();
		}
	}

	getRelativePitch() {
		const camRot = this.gameplayCam.getRot(2);

		return camRot.x - localPlayer.getPitch();
	}

	process() {
		if (!this.active) return;

		mp.game.invoke('0x921ce12c489c4c41', localPlayer.handle);

		let camPitch = this.getRelativePitch();

		if (camPitch < -70) camPitch = -70;
		else if (camPitch > 42) camPitch = 42;

		camPitch = (camPitch + 70) / 112;

		let camHeading = mp.game.cam.getGameplayCamRelativeHeading();

		const cosCamHeading = mp.game.system.cos(camHeading);
		const sinCamHeading = mp.game.system.sin(camHeading);

		if (camHeading < -180) camHeading = -180;
		else if (camHeading > 180) camHeading = 180;

		camHeading = (camHeading + 180) / 360;

		const coords = localPlayer.getOffsetFromGivenWorldCoords(
			cosCamHeading * -0.2 - sinCamHeading * (0.4 * camHeading + 0.3),
			sinCamHeading * -0.2 + cosCamHeading * (0.4 * camHeading + 0.3),
			0.6
		);

		const blocked =
			typeof (mp.raycasting.testPointToPoint as any)(
				[coords.x, coords.y, coords.z - 0.2],
				[coords.x, coords.y, coords.z + 0.2],
				localPlayer.handle,
				7
			) !== 'undefined';

		mp.game.invoke('0xd5bb4025ae449a4e', localPlayer.handle, 'Pitch', camPitch);
		mp.game.invoke(
			'0xd5bb4025ae449a4e',
			localPlayer.handle,
			'Heading',
			camHeading * -1.0 + 1.0
		);
		mp.game.invoke('0xb0a6cfd2c69c1088', localPlayer.handle, 'isBlocked', blocked);
		mp.game.invoke(
			'0xb0a6cfd2c69c1088',
			localPlayer.handle,
			'isFirstPerson',
			mp.game.invoke('0xee778f8c7e1142e2', mp.game.invoke('0x19cafa3c87f7c2ff')) === 4
		);

		if (Date.now() - this.lastSent > 100) {
			this.lastSent = Date.now();

			mp.events.callRemote('fpsync.update', camPitch, camHeading);
		}
	}

	setAnimation(player: PlayerMp) {
		mp.game.streaming.requestAnimDict('anim@mp_point');

		while (!mp.game.streaming.hasAnimDictLoaded('anim@mp_point')) mp.game.wait(0);

		mp.game.invoke('0x0725a4ccfded9a70', player.handle, 0, 1, 1, 1);

		player.setConfigFlag(36, true);
		player.taskMoveNetwork('task_mp_pointing', 0.5, false, 'anim@mp_point', 24);

		mp.game.streaming.removeAnimDict('anim@mp_point');
	}
}

const forefinger = new Forefinger();

mp.keys.bind(66, true, () => forefinger.start());
mp.keys.bind(66, false, () => forefinger.stop());

mp.events.add('fpsync.update', (id: number, camPitch: number, camHeading: number) => {
	const player = mp.players.atRemoteId(id);

	if (!player || player === localPlayer) return;

	player.lastReceivedPointing = Date.now();

	if (!player.pointingInterval) {
		player.pointingInterval = setInterval(() => {
			if (Date.now() - player.lastReceivedPointing <= 1000) return;

			clearInterval(player.pointingInterval);

			player.lastReceivedPointing = null;
			player.pointingInterval = null;

			mp.game.invoke('0xd01015c7316ae176', player.handle, 'Stop');

			if (!player.isInAnyVehicle(true)) {
				mp.game.invoke('0x0725a4ccfded9a70', player.handle, 1, 1, 1, 1);
			}

			player.setConfigFlag(36, false);
		}, 500);

		forefinger.setAnimation(player);
	}

	mp.game.invoke('0xd5bb4025ae449a4e', player.handle, 'Pitch', camPitch);
	mp.game.invoke('0xd5bb4025ae449a4e', player.handle, 'Heading', camHeading * -1.0 + 1.0);
	mp.game.invoke('0xb0a6cfd2c69c1088', player.handle, 'isBlocked', 0);
	mp.game.invoke('0xb0a6cfd2c69c1088', player.handle, 'isFirstPerson', 0);
});
