import rpc from 'rage-rpc';
import random from 'math-random';
import animations from '../../utils/animations';
import notifications from '../../helpers/notifications';
import objects from '../../helpers/objects';
import playerInventory from '../../basic/player/playerInventory';
import JobLevels from '../../jobs/levels';
import Service from '../service';
import { locations, levels, fishList } from './data';

class Fishing extends Service {
	private levels: JobLevels;

	constructor() {
		super('Рыбалка', locations, null, { model: 68, color: 30 });

		this.levels = new JobLevels(
			this.name,
			levels.map(({ points }) => ({ points, salary: 0 })),
			1
		);

		mp.events.subscribe({
			'Fishing-Success': this.takeFish.bind(this),
			'Fishing-Drop': this.stopFishing.bind(this)
		});
	}

	async pressedKeyOnMainShape(player: PlayerMp) {
		const canStart = await rpc.callClient(player, 'Phone-CanOpen');

		if (player.vehicle || !canStart) return;
		if (this.isAlreadyFishing(player)) {
			return notifications.error(player, 'Вы уже рыбачите');
		}

		const location = this.getCurrentLocation(player);
		const jobLevel = this.levels.getLevelNumber(this.levels.getCurrentLevel(player));

		if (location.level > jobLevel) {
			return notifications.error(
				player,
				`Для этого места нужен ${location.level}й уровень`
			);
		}

		const rod = player.inventory.find((item) => item.type === 'rod');
		if (!rod) return notifications.error(player, 'У вас нет удочки');

		const bait = player.inventory.find((item) => item.name === 'fish_bait');
		if (!bait?.count) return notifications.error(player, 'У вас нет наживки');

		await this.startFishing(player, rod, bait);
	}

	isAlreadyFishing(player: PlayerMp) {
		return objects.hasObject(player, 'rod');
	}

	getCurrentLocation(player: PlayerMp) {
		const index: number = mp.colshapes.at(player.colshapeId)?.customData;
		return locations[index];
	}

	protected enteredMainShape(player: PlayerMp) {
		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы закинуть удочку');
	}

	protected onExitShape(player: PlayerMp) {
		if (this.isAlreadyFishing(player)) {
			this.stopFishing(player);
			rpc.callClient(player, 'Fishing-HideMinigame');
		}
	}

	private async startFishing(player: PlayerMp, rod: InventoryItem, bait: InventoryItem) {
		await this.useTools(player, rod, bait);

		const waitTime = (Math.floor(random() * 10) + 20) * 1000;
		player.timeout(() => this.showMinigame(player), waitTime);
	}

	private showMinigame(player: PlayerMp) {
		if (!this.isAlreadyFishing(player)) return;

		animations.playOnServer(player, 'fishing_take');
		rpc.callClient(player, 'Fishing-ShowMinigame');
	}

	private stopFishing(player: PlayerMp) {
		animations.stopOnServer(player);
		objects.detach(player);
	}

	private async useTools(player: PlayerMp, rod: InventoryItem, bait: InventoryItem) {
		await playerInventory.decItemCount(player, player.inventory, bait);
		rod.capacity -= 1;

		if (rod.capacity <= 0) await playerInventory.removeItem(player.inventory, rod);
		else if (rod.capacity <= 3) {
			notifications.info(player, `Вашей удочки хватит ещё на ${rod.capacity} раз`);
		}

		animations.playOnServer(player, 'fishing_wait');
		objects.attach(player, 'rod');
	}

	private async takeFish(player: PlayerMp) {
		const location = this.getCurrentLocation(player);
		if (!location || !this.isAlreadyFishing(player)) return Promise.reject();

		const fish = this.getRandomFishByLevel(location.level);

		await player.addToInventory({ name: fish, type: 'fish', count: 1 });
		await this.levels.giveAward(player);

		const level = this.levels.getCurrentLevel(player);
		const points = this.levels.getCurrentPoints(player);
		const jobLevel = this.levels.getLevelNumber(level);

		notifications.info(
			player,
			`Вы вытащили рыбу "${fishList[fish]}". Текущий уровень: ${jobLevel}. Всего поймано: ${points}`
		);

		this.stopFishing(player);
	}

	private getRandomFishByLevel(level: number) {
		const randomValue = random();
		const items = Object.entries(levels[level - 1].fish).filter(
			([, chance]) => chance / 100 > randomValue
		);
		if (!items.length) return this.getRandomFishByLevel(level);

		const fish = items[Math.floor(random() * items.length)];
		return fish[0];
	}
}

const job = new Fishing();
