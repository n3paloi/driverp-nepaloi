import rpc from 'rage-rpc';
import { getLookingAtEntity } from '../../utils/player';
import browser from '../../utils/browser';

const localPlayer = mp.players.local;

class TargetMenu {
	private active = false;

	private target?: PlayerMp | VehicleMp;

	private distTimer?: NodeJS.Timeout;

	constructor() {
		mp.events.subscribeToDefault({ render: this.onRender.bind(this) });
		mp.events.subscribe({ 'TargetMenu-Close': this.toggleMenu.bind(this) });
		mp.keys.bind(75, false, this.toggleMenu.bind(this));

		mp.keys.bind(18, false, () => {
			if (mp.gui.cursor.visible) return;

			mp.game.ui.notifications.info(
				'Меню ТС теперь открывается через K, как и меню игрока!'
			);
		}); // временный уведом для ебланов
	}

	get player() {
		return this.target?.type === 'player' ? (this.target as PlayerMp) : null;
	}

	get vehicle() {
		return this.target?.type === 'vehicle' ? (this.target as VehicleMp) : null;
	}

	get visible() {
		return this.active;
	}

	set visible(status: boolean) {
		this.active = status;
		this.toggleDistTimer();
	}

	private async toggleMenu(hidePage = true) {
		if (!this.visible && mp.gui.cursor.visible) return;
		if (this.visible || localPlayer.isCuffed() || !hidePage) {
			this.visible = false;
			return hidePage && browser.hidePage();
		}

		const hasAccess =
			!this.vehicle || (await rpc.callServer('Vehicle-IsOwner', this.vehicle));
		if (!hasAccess) return;

		browser.showPage(
			this.vehicle ? 'vehicle' : 'player/menu',
			{
				playerId: this.target ? this.target.remoteId : -1
			},
			false
		);
		this.visible = true;
	}

	private toggleDistTimer() {
		if (!this.visible || !this.target) {
			if (this.distTimer) {
				clearInterval(this.distTimer);
				this.distTimer = null;
			}

			return;
		}

		this.distTimer = setInterval(() => {
			if (!this.target) return this.toggleDistTimer();

			const { position } = localPlayer;
			const { position: targetPosition } = this.target;

			const dist = mp.game.system.vdist(
				position.x,
				position.y,
				position.z,
				targetPosition.x,
				targetPosition.y,
				targetPosition.z
			);

			if (dist > 3.2) this.toggleMenu();
		}, 2500);
	}

	private onRender() {
		if (this.visible) return;

		this.target = localPlayer.isInAnyVehicle(false)
			? localPlayer.vehicle
			: (getLookingAtEntity() as any);

		if (this.target) this.highlightTarget();
	}

	private highlightTarget() {
		if (localPlayer.vehicle || !this.target || this.target.getVariable('invisible'))
			return;

		const { position } = this.target;

		mp.game.graphics.drawText('K', [position.x, position.y, position.z], {
			font: 4,
			color: [255, 255, 255, 200],
			scale: [0.4, 0.4],
			outline: true,
			centre: true
		});
	}
}

export default new TargetMenu();
