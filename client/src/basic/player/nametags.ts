import { isEmpty } from 'lodash';
import storage from '../../utils/storage';
import hud from '../hud';

const localPlayer = mp.players.local;

type Nametag = [PlayerMp, number, number, number];
type FactionData = {
	id: string;
	name: string;
	rank: string;
	government: boolean;
};

class PlayerNametags {
	private maxDistance: number;

	private width: number;

	private height: number;

	private border: number;

	constructor() {
		this.maxDistance = 300;
		this.width = 0.03;
		this.height = 0.006;
		this.border = 0.001;

		mp.nametags.enabled = false;

		mp.events.subscribeToDefault({
			render: this.render.bind(this)
		});
	}

	private drawRectangles(
		x: number,
		y: number,
		entity: number,
		health: number,
		armour: number
	) {
		const { graphics } = mp.game;

		if (mp.game.player.isFreeAimingAtEntity(entity)) {
			const y2 = y + 0.042;

			if (armour > 0) {
				let x2 = x - this.width / 2 - this.border / 2;

				graphics.drawRect(x2, y2, this.width + this.border * 2, 0.0085, 0, 0, 0, 200);
				graphics.drawRect(x2, y2, this.width, this.height, 150, 150, 150, 255);
				graphics.drawRect(
					x2 - (this.width / 2) * (1 - health),
					y2,
					this.width * health,
					this.height,
					255,
					255,
					255,
					200
				);

				x2 = x + this.width / 2 + this.border / 2;

				graphics.drawRect(
					x2,
					y2,
					this.width + this.border * 2,
					this.height + this.border * 2,
					0,
					0,
					0,
					200
				);
				graphics.drawRect(x2, y2, this.width, this.height, 41, 66, 78, 255);
				graphics.drawRect(
					x2 - (this.width / 2) * (1 - armour),
					y2,
					this.width * armour,
					this.height,
					48,
					108,
					135,
					200
				);
			} else {
				graphics.drawRect(
					x,
					y2,
					this.width + this.border * 2,
					this.height + this.border * 2,
					0,
					0,
					0,
					200
				);
				graphics.drawRect(x, y2, this.width, this.height, 150, 150, 150, 255);
				graphics.drawRect(
					x - (this.width / 2) * (1 - health),
					y2,
					this.width * health,
					this.height,
					255,
					255,
					255,
					200
				);
			}
		}
	}

	private render(nametags: Nametag[]) {
		const { graphics } = mp.game;
		const resolution = graphics.getScreenResolution(0, 0);

		if (!hud.isVisible) return;

		nametags.forEach((nametag) => {
			// eslint-disable-next-line prefer-const
			let [player, x, y, distance] = nametag;

			if (distance > this.maxDistance || player.getVariable('invisible')) return;

			const scale = distance / this.maxDistance < 0.6 ? 0.6 : distance / this.maxDistance;
			const health = (player.getHealth() - 100) / 100;
			const armour = player.getArmour() / 100;

			y -= scale * (0.005 * (resolution.y / 1080));

			const isDying = player.getVariable('isDying');
			const realName: string = player.getVariable('realName');
			const faction: FactionData = player.getVariable('faction');
			const gang: FactionData = player.getVariable('gang');
			const playerFaction: FactionData = localPlayer.getVariable('faction');
			const playerGang: FactionData = localPlayer.getVariable('gang');

			let name =
				storage.state.friends.includes(realName) && !player.getVariable('inMask')
					? `${realName} (${player.remoteId})`
					: player.name;

			if (
				!isEmpty(playerFaction) &&
				!isEmpty(faction) &&
				playerFaction?.id === faction?.id
			) {
				name = `[${faction.rank}]${realName} (${player.remoteId})`;
			} else if (!isEmpty(gang) && playerGang?.name === gang?.name) {
				name = `[${gang.rank || ''}]${realName} (${player.remoteId})`;
			} else if (playerFaction?.government && faction?.government) {
				name = `[${faction.id.toUpperCase()}]${name}`;
			}

			mp.game.graphics.drawText(name, [x, y], {
				font: 4,
				color: [255, 255, 255, 255],
				scale: [0.3, 0.3],
				outline: true,
				centre: true
			});
			graphics.drawText(`#${player.getVariable('uid')}`, [x, y + 0.02], {
				font: 4,
				color: [255, 255, 255, 255],
				scale: [0.25, 0.25],
				outline: true,
				centre: true
			});

			if (isDying || player.getVariable('adminNickname')) {
				graphics.drawText(isDying ? 'Без сознания' : 'Администратор', [x, y - 0.02], {
					font: 4,
					color: [255, 0, 0, 255],
					scale: [0.3, 0.3],
					outline: true,
					centre: true
				});
			}

			this.drawRectangles(x, y, player.handle, health, armour);
		});
	}
}

const nametags = new PlayerNametags();
