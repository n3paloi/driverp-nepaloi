import * as rpc from 'rage-rpc';

class Browser {
	private browser: BrowserMp;

	private freezed = false;

	constructor() {
		this.init();
	}

	showPage(page: string, data: any = {}, freeze = true, cursor = true) {
		if (this.freezed) return;

		mp.gui.cursor.show(true, cursor);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);

		rpc.callBrowser(this.browser, 'showPage', { page, data });

		this.freezed = freeze;
	}

	hidePage() {
		mp.gui.cursor.show(false, false);
		mp.gui.chat.show(true);
		mp.game.ui.displayRadar(true);

		rpc.callBrowser(this.browser, 'showPage', { page: 'hud' });

		this.freezed = false;
	}

	private init() {
		this.browser = mp.browsers.new(''); // Путь к вашему browser

		mp.gui.chat.show(false);

		this.browser.markAsChat();

		rpc.register('Browser-HidePage', this.hidePage.bind(this));
	}
}

export default new Browser();