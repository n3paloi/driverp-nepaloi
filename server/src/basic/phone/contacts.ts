import * as validator from 'validator';
import notifications from '../../helpers/notifications';
import User, { IContact } from '../../models/User';

class PhoneContacts {
	constructor() {
		this.subscribeToEvents();
	}

	private getContact(player: PlayerMp, phoneNumber: string) {
		return player.phone.contacts.find(({ phone }) => phone === phoneNumber);
	}

	private async addContact(player: PlayerMp, data: IContact) {
		if (!player.phone.number || !validator.isLength(data.phone, { min: 6, max: 6 })) {
			return Promise.reject();
		}

		if (this.getContact(player, data.phone)) {
			notifications.error(player, 'Контакт с таким номером уже существует!');

			return Promise.reject();
		}

		await User.findByIdAndUpdate(player.dbId, { $push: { 'phone.contacts': data } });

		player.phone.contacts.push(data);
	}

	private async editContact(player: PlayerMp, data: IContact) {
		if (!player.phone.number || !validator.isLength(data.phone, { min: 6, max: 6 })) {
			return Promise.reject();
		}

		if (this.getContact(player, data.phone)) {
			notifications.error(player, 'Контакт с таким номером уже существует!');

			return Promise.reject();
		}

		await User.findOneAndUpdate(
			{ _id: player.dbId, 'phone.contacts.phone': data.phone },
			{ $set: { 'phone.contacts.$': data } }
		);

		player.phone.contacts[
			player.phone.contacts.findIndex((item) => item.phone === data.phone)
		] = data;
	}

	private async deleteContact(player: PlayerMp, phoneNumber: string) {
		const index = player.phone.contacts.findIndex((contact) => {
			return contact.phone === phoneNumber;
		});

		if (index < 0) return Promise.reject();

		await User.findByIdAndUpdate(player.dbId, {
			$pull: { 'phone.contacts': { phone: phoneNumber } }
		});

		player.phone.contacts.splice(index, 1);
	}

	async unblockContact(player: PlayerMp, phoneNumber: string) {
		const index = player.phone.blackList.indexOf(phoneNumber);

		if (index < 0) return Promise.reject();

		await User.findByIdAndUpdate(player.dbId, {
			$pull: { 'phone.blackList': phoneNumber }
		});

		player.phone.blackList.splice(index, 1);
	}

	async blockContact(player: PlayerMp, phoneNumber: string) {
		const index = player.phone.blackList.indexOf(phoneNumber);

		if (index >= 0) return Promise.reject();

		await User.findByIdAndUpdate(player.dbId, {
			$push: { 'phone.blackList': phoneNumber }
		});

		player.phone.blackList.push(phoneNumber);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Phone-AddContact': this.addContact.bind(this),
			'Phone-EditContact': this.editContact.bind(this),
			'Phone-DeleteContact': this.deleteContact.bind(this),
			'Phone-BlockContact': this.blockContact.bind(this),
			'Phone-UnblockContact': this.unblockContact.bind(this)
		});
	}
}

export default new PhoneContacts();
