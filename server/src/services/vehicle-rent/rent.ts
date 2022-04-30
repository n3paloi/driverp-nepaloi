import { random } from 'lodash';
import { xyInFrontOfPos } from '../../utils/vehicles';
import notifications from '../../helpers/notifications';
import vehicleManager from '../../basic/vehicle';
import vehicleTuning from '../../basic/vehicle/tuning';
import Service from '../service';

type RentItem = {
	timer?: NodeJS.Timeout;
	vehicle: VehicleMp;
};

class VehicleRent extends Service {
	private readonly model: string;

	private readonly price: number;

	private readonly dist: number;

	private readonly license?: string;

	private rented: Map<string, RentItem>;

	constructor(
		name: string,
		blip: { model: number; color: number },
		coords: PositionEx[],
		dist: number,
		model: string,
		price: number,
		license?: string
	) {
		super(name, coords, { radius: 0.75 }, blip);

		this.price = price;
		this.model = model;
		this.dist = dist;
		this.license = license;
		this.rented = new Map();

		mp.events.subscribeToDefault({
			playerQuit: this.terminateRent.bind(this),
			playerEnterVehicle: this.onEnterInVehicle.bind(this),
			playerExitVehicle: this.onExitFromVehicle.bind(this)
		});
	}

	pressedKeyOnMainShape(player: PlayerMp) {
		if (this.license && !player.isHasLicense(this.license)) {
			return notifications.error(player, 'У вас нет лицензии на данное ТС!');
		}

		return this.rentVehicle(player);
	}

	isAlreadyRented(player: PlayerMp) {
		return this.rented.has(player.dbId);
	}

	protected enteredMainShape(player: PlayerMp) {
		notifications.help(
			player,
			this.isAlreadyRented(player)
				? 'Нажмите ~INPUT_CONTEXT~ чтобы сдать арендованное ТС'
				: `Нажмите ~INPUT_CONTEXT~ для аренды транспорта за ${this.price}$`
		);
	}

	private async rentVehicle(player: PlayerMp) {
		if (this.isAlreadyRented(player)) {
			return this.terminateRent(player);
		}

		await player.moneyHelper.different(this.price);
		await this.spawnVehicle(player);
	}

	private terminateRent(player: PlayerMp) {
		const rent = this.rented.get(player.dbId);
		if (!rent) return;

		if (mp.vehicles.exists(rent.vehicle)) rent.vehicle.destroy();
		clearTimeout(rent.timer);
		this.rented.delete(player.dbId);
	}

	private async spawnVehicle(player: PlayerMp) {
		const position = xyInFrontOfPos(player.position, player.heading, this.dist);

		const vehicle = await vehicleManager.create(
			this.model,
			{ ...position, dimension: 0 },
			{ type: 'user', id: player.dbId },
			true
		);
		vehicleTuning.setPaint(vehicle, [random(0, 255), random(0, 255), random(0, 255)]);

		this.rented.set(player.dbId, { vehicle });
	}

	private onEnterInVehicle(player: PlayerMp, vehicle: VehicleMp) {
		if (vehicle.name === this.model) {
			const rent = this.rented.get(player.dbId);
			if (rent) clearTimeout(rent.timer);
		}
	}

	private onExitFromVehicle(player: PlayerMp, vehicle: VehicleMp) {
		if (vehicle.name === this.model) {
			const rent = this.rented.get(player.dbId);
			if (!rent) return;

			rent.timer = setTimeout(this.terminateRent.bind(this, player), 15 * 60 * 1000);
			notifications.info(
				player,
				'Через 15 минут аренда закончится, если вы не сядете в ТС'
			);
		}
	}
}

export default VehicleRent;
