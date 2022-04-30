import { sortBy } from 'lodash';

export function getPlayerByDbId(dbId: string) {
	if (!dbId) return;

	const player = mp.players
		.toArray()
		.find((item) => item.dbId && item.dbId.toString() === dbId.toString());

	return player;
}

export function getStreamedPlayers(position: Vector3Mp) {
	const players: PlayerMp[] = [];

	mp.players.forEachInRange(position, mp.config['stream-distance'], (player) =>
		players.push(player)
	);

	return players;
}

export function getNearestPlayerInRange(position: Vector3Mp, range: number) {
	const playersInRange: PlayerMp[] = [];

	mp.players.forEachInRange(position, range, (player) => {
		playersInRange.push(player);
	});

	let nearestPlayer;

	playersInRange.forEach((player, index) => {
		const dist = player.dist(position);

		if (dist && (!nearestPlayer || dist < playersInRange[nearestPlayer].dist(position))) {
			nearestPlayer = index;
		}
	});

	return playersInRange[nearestPlayer];
}

export function getNearestPosition(player: PlayerMp, positions: PositionEx[]) {
	return sortBy(positions, ({ x, y, z }) => player.dist(new mp.Vector3(x, y, z)))[0];
}