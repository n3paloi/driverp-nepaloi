import colshapes from '../../helpers/colshapes';
import notifications from '../../helpers/notifications';
import Service from '../service';
import './slots';

const exitPosition = { x: 935.596, y: 46.284, z: 81.095 };

class Casino extends Service {
	private interiorPosition: PositionEx;

	constructor() {
		const info = {
			name: 'Казино',
			entities: [exitPosition],
			markerData: { radius: 0.75 },
			blipData: { model: 617, color: 50 }
		};
		super(info.name, info.entities, info.markerData, info.blipData);

		this.interiorPosition = { x: 1089.586, y: 207.081, z: -48.99 };

		this.createExit();
	}

	async pressedKeyOnMainShape(player: PlayerMp) {
		try {
			player.tp(this.interiorPosition);
		} catch (err) {
			return Promise.reject();
		}
	}

	enteredMainShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
	}

	private createExit() {
		colshapes.create(this.interiorPosition, 0.75, {
			onEnter: (player: PlayerMp) => {
				notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
			},
			onKeyPress: (player: PlayerMp) => player.tp(exitPosition),
			keyName: 'E'
		});

		mp.markers.new(
			1,
			new mp.Vector3(
				this.interiorPosition.x,
				this.interiorPosition.y,
				this.interiorPosition.z - 1.2
			),
			0.75,
			{
				color: [0, 255, 0, 60],
				visible: true
			}
		);
	}
}

const casino = new Casino();
