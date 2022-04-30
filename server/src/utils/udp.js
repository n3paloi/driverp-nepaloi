import dgram from 'dgram';

const server = dgram.createSocket('udp4');

mp.events.add({
	playerJoin: () => {
		const current = mp.players.toArray().length;
		const max = mp.config.maxplayers;

		const data = JSON.stringify({ current, max });

		server.send(
			data,
			0,
			data.length,
			process.env.SITE_UDP_PORT,
			process.env.SITE_IP,
			(err) => {
				if (err) throw err;
			}
		);
	}
});

export default function initUdpServer() {
	server.on('message', (data) => {
		const { productName, id: userId, ...info } = JSON.parse(data);

		const player = mp.players.at(
			mp.players.toArray().find((item) => item.loggedIn && item.dbId === userId).id
		);

		if (!player || !mp.players.exists(player)) return;

		switch (productName) {
			case 'drivepoints':
				player.money.drivepoints = info.drivepoints;
				player.moneyHelper.updateMoney();
				break;
			case 'money':
				player.money.bank = info.money;
				player.moneyHelper.updateMoney();
				break;
			case 'nickname':
				player.firstName = info.name.firstName;
				player.lastName = info.name.lastName;

				player.updateName();
				break;
			default:
				break;
		}
	});

	server.on('listening', () => {
		const address = server.address();

		console.log(`Server listening UDP: ${address.port}`);
	});

	server.bind(process.env.UDP_PORT);
}