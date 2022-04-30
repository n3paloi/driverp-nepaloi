mp.keys.bind(69, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-E');
	mp.events.callRemote('playerKeyPress', 'E');
});

mp.keys.bind(73, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-I');
});

mp.keys.bind(77, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-M');
});

mp.keys.bind(85, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-U');
});

mp.keys.bind(89, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-Y');
});

mp.keys.bind(113, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-F2');
});

mp.keys.bind(115, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-F4');
});

mp.keys.bind(116, false, () => {
	if (mp.gui.cursor.visible) return;

	mp.events.callRemote('Keys-F5');
});
