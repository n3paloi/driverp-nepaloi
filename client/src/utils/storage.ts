class Storage {
	private initialState: StorageState;

	private storage: StorageMp;

	constructor() {
		this.initialState = {
			login: null,
			HUD: {
				radar: true,
				keys: true,
				nametags: true,
				chat: true
			},
			friends: []
		};

		this.storage = mp.storage;

		this.setInitialState();
	}

	get state() {
		return this.storage.data;
	}

	addFriend(name: string) {
		this.storage.data.friends.push(name);

		this.storage.flush();
	}

	saveLogin(login: string) {
		this.storage.data.login = login;

		this.storage.flush();
	}

	private setInitialState() {
		if (Object.keys(this.storage.data).length >= 3) return;

		Object.assign(this.storage.data, this.initialState);

		this.storage.flush();
	}
}

export default new Storage();
