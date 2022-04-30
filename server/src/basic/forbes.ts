import User from '../models/User';

class Forbes {
	private readonly members: string[];

	constructor() {
		this.members = [];

		this.subscribeToEvents();
	}

	private async loadMembers() {
		const users = await User.find({ adminLvl: 0 })
			.sort({ 'money.bank': -1 })
			.limit(5)
			.select({ firstName: 1, lastName: 1, _id: 0 });

		users.forEach((user) => {
			const member = `${user.firstName} ${user.lastName}`;
			this.members.push(member);
		});
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({ databaseConnected: this.loadMembers.bind(this) });
		mp.events.subscribe({ 'Forbes-GetMembers': () => this.members });
	}
}

export default new Forbes();
