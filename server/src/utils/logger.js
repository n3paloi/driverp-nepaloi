import log4js from 'log4js';

log4js.configure({
	appenders: { ban: { type: 'file', filename: 'logs/ban.log' } },
	categories: { default: { appenders: ['ban'], level: 'info' } }
});

log4js.configure({
	appenders: { money: { type: 'file', filename: 'logs/money.log' } },
	categories: { default: { appenders: ['money'], level: 'info' } }
});

log4js.configure({
	appenders: { adminLvl: { type: 'file', filename: 'logs/adminlvl.log' } },
	categories: { default: { appenders: ['adminLvl'], level: 'info' } }
});