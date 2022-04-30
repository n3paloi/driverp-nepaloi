class Headsack {
	public status = false;

	constructor() {
		mp.events.subscribeToDefault({
			render: this.draw.bind(this)
		});

		mp.events.subscribe({
			'Headsack-SetStatus': (status = false) => {
				this.status = status;
			}
		});
	}

	private draw() {
		if (!this.status) return;

		mp.game.graphics.drawRect(0.0, 0.0, 1.0, 1.0, 0, 0, 0, 253);
		mp.game.graphics.drawRect(0.0, 1.0, 1.0, 1.0, 0, 0, 0, 253);
		mp.game.graphics.drawRect(1.0, 0.0, 1.0, 1.0, 0, 0, 0, 253);
		mp.game.graphics.drawRect(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 253);
	}
}

export default new Headsack();
