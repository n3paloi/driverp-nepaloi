import * as rpc from 'rage-rpc';
import browser from '../utils/browser';
import peds, { PedData } from '../utils/peds';

const stripActions = {
	onEnter: () =>
		mp.events.call('SHOW_HELP', 'Нажмите ~INPUT_CONTEXT~ чтобы бросить 100$'),
	onKeyPress: () => rpc.callServer('NightClub-DropMoney')
};

const pedsList: PedData[] = [
	{
		model: 's_f_y_bartender_01',
		position: {
			x: 128.892,
			y: -1282.702,
			z: 29.272
		},
		heading: 134.203
	},
	{
		model: 's_f_y_stripper_01',
		position: {
			x: 105.274,
			y: -1293.652,
			z: 29.258
		},
		heading: 300.014,
		scenario: 'WORLD_HUMAN_PROSTITUTE_LOW_CLASS',
		actions: stripActions
	},
	{
		model: 's_f_y_stripper_02',
		position: {
			x: 103.429,
			y: -1289.979,
			z: 29.258
		},
		heading: 10.846,
		scenario: 'WORLD_HUMAN_PROSTITUTE_LOW_CLASS',
		actions: stripActions
	},
	{
		model: 'a_f_y_juggalo_01',
		position: {
			x: 109.067,
			y: -1289.222,
			z: 28.858
		},
		heading: 279.395,
		scenario: 'WORLD_HUMAN_PROSTITUTE_LOW_CLASS',
		actions: stripActions
	}
];

pedsList.forEach((item) => peds.create(item));

mp.events.subscribe({
	'NightClub-ShowBuyerMenu': (prices) => {
		browser.showPage('services/night_club', { prices });
	}
});
