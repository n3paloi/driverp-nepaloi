import './events';
import './players';
import DialogHelper from './dialog';
import MoneyHelper from './money';
import playerHelper from './player';

function setPlayerHelpers(player: PlayerMp) {
	player.dialog = new DialogHelper(player);
	player.moneyHelper = new MoneyHelper(player);

	playerHelper.extend(player);
}

mp.events.add('playerJoin', (player) => setPlayerHelpers(player));
