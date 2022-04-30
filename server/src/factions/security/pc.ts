import * as rpc from 'rage-rpc';
import { random, isNumber } from 'lodash';
import User from '../../models/User';
import Police from '../police';
import Security from '.';
import prison from '../../basic/prison';
import colshapeManager from '../../helpers/colshapes';
import animations from '../../utils/animations';
import notifications from '../../helpers/notifications';

class SecurityPС {
	private name: string;

	private weaponsBox: any;

	private prices: any;

	private mainCoords: { x: number; y: number; z: number };

	private orderPoints: Array<{ x: number; y: number; z: number }>;

	private orderTimeout: number;

	constructor() {
		this.name = 'ЧОП';

		this.prices = {
			melee: 3000,
			handguns: 14000,
			smgs: 20000,
			shotguns: 27000,
			rifles: 34000,
			ammo: {
				handguns: 10,
				rifles: 15,
				shotguns: 50
			},
			others: 250
		};

		this.mainCoords = {
			x: 1394.1397705078125,
			y: 1160.2906494140625,
			z: 114.37232971191406
		}; // Заказ оружия
		this.orderPoints = [
			{ x: 1497.5262451171875, y: 6630.33203125, z: 2.594790458679199 }
		];

		this.orderTimeout = 5;

		this.createEntities();
	}

	createEntities() {
		const { x, y, z } = this.mainCoords;

		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			color: [83, 119, 83, 150],
			visible: true
		});

		colshapeManager.create(this.mainCoords, 0.75, {
			onEnter: this.enteredMainShape.bind(this),
			onKeyPress: this.openMenu.bind(this),
			keyName: 'E'
		});
	}

	enteredMainShape(player: PlayerMp) {
		if (player.faction.name !== this.name) return;

		notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
	}

	openMenu(player: PlayerMp) {
		if (!player.faction.working) {
			return notifications.error(player, 'Переоденьтесь во фракционную одежду');
		}

		if (player.faction.rank < 10 || player.faction.name !== this.name) {
			return notifications.error(player, 'У тебя недостаточно полномочий');
		}

		rpc.callClient(player, 'Security-ShowPС', [
			this.prices,
			Security.getFactionMoney(),
			Security.getMembers()
		]);
	}

	getFinalPrice({ weapons, ammo }) {
		let finalPrice = 0;

		Object.keys(weapons).forEach((weapon) => {
			if (!this.prices[weapons[weapon]]) return;

			finalPrice += this.prices[weapons[weapon]];
		});

		Object.keys(ammo).forEach((name) => {
			if (!ammo[name] || ammo[name] <= 0 || !this.prices.ammo[name]) return;

			finalPrice += this.prices.ammo[name] * ammo[name];
		});

		return finalPrice;
	}

	spawnWeaponsBox(weapons: any) {
		const position = this.orderPoints[random(0, this.orderPoints.length - 1)];

		colshapeManager.create(position, 0.75, {
			onEnter: (player) =>
				notifications.help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы обыскать ящик'),
			onKeyPress: this.getLootFromWeaponsBox.bind(this),
			keyName: 'E'
		});

		this.weaponsBox = mp.objects.new(
			'prop_box_ammo03a_set2',
			new mp.Vector3(position.x, position.y, position.z - 1),
			{
				rotation: new mp.Vector3(0, 0, 0),
				alpha: 255,
				dimension: 0
			}
		);
		this.weaponsBox.loot = weapons;

		const offset = random(10.5, 20.5);

		Security.implementForMembers((member) => {
			member.call('createBlip', [587, 'Товар', 25, position]);

			notifications.info(member, 'Товар прибыл, местоположение отмечено на карте');
		});

		Police.implementForMembers((member) => {
			member.call('createRadiusBlip', [
				'weapons',
				3,
				{ x: position.x + offset, y: position.y + offset, z: position.z }
			]);

			notifications.info(
				member,
				'В городе новое преступление! Территория отмечена на карте'
			);
		});
	}

	removeWeaponsBox() {
		this.weaponsBox.destroy();

		this.weaponsBox = null;

		Security.implementForMembers((member) => member.call('removeBlip', ['Товар']));
		Police.implementForMembers((member) => member.call('removeRadiusBlip', ['weapons']));
	}

	async orderWeapons(player: PlayerMp, weapons: any) {
		try {
			if (this.weaponsBox) return;

			const cost = this.getFinalPrice(weapons);
			await player.moneyHelper.different(cost, 'secure weapons');

			setTimeout(() => this.spawnWeaponsBox(weapons), this.orderTimeout * 60 * 1000);

			notifications.info(
				player,
				`Ожидайте прибытие товара (примерно ${this.orderTimeout} мин)`
			);

			prison.addViolation(player, 1.6);
		} catch (err) {
			return Promise.reject();
		}
	}

	getLootFromWeaponsBox(player: PlayerMp) {
		if (!this.weaponsBox || !player.faction.name) return;

		const { loot } = this.weaponsBox;

		animations.playOnServer(player, 'pickup', 2000);

		Object.keys(loot.weapons).forEach((weapon) => {
			const category = loot.weapons[weapon];

			if (category === 'others') {
				player.addToInventory({
					type: category,
					name: weapon,
					count: 1
				});
			} else if (category) {
				player.addToInventory({
					category,
					name: weapon,
					type: 'weapons',
					count: 1
				});
			}
		});

		Object.keys(loot.ammo).forEach((name) => {
			if (!loot.ammo[name] || loot.ammo[name] <= 0) return;

			player.addToInventory({ name, type: 'ammo', count: loot.ammo[name] });
		});

		this.removeWeaponsBox();
	}

	async giveFactionMoney(player: PlayerMp, memberGuid: string, value: any) {
		if (!Security.isMainLeader(player)) return Promise.reject();

		const member = Security.getFactionMember(memberGuid);
		const sum = parseInt(value, 10);

		if (!member || sum <= 0) return Promise.reject();

		const money = await Security.changeFactionMoney(-sum);

		if (!isNumber(money)) return Promise.reject();

		if (isNumber(member.id)) {
			await mp.players.at(member.id).moneyHelper.change(sum, 'bank', 'secure money');
		} else {
			await User.findByIdAndUpdate(memberGuid, { $inc: { 'money.bank': sum } });
		}

		notifications.info(player, 'Операция успешна!');

		return money;
	}
}

const securityPC = new SecurityPС();

mp.events.subscribe({
	'Security-OrderWeapons': (player, data) => securityPC.orderWeapons(player, data),
	'Security-GiveMoney': (player, dbId, value) =>
		securityPC.giveFactionMoney(player, dbId, value)
});
