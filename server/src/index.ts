import 'source-map-support/register';

import * as path from 'path';
import * as dotenv from 'dotenv';

import initDatabase from './utils/database';
import initUdpServer from './utils/udp';
import Mailer from './utils/mailer';
import './utils/logger';
import './utils/debug';
import './utils/anim';

import './helpers';
import './basic/auth';
import './basic/chat';
import './basic/voip';
import './basic/time';
import './basic/admin';
import './basic/phone';
import './basic/vehicle';
import './basic/cityhall';
import './basic/donation';
import './character/characterCreator';
import './character/clothes';
import './property';
import './jobs';
import './services';
import './factions';
import './gangs';

const config = dotenv.config({ debug: true });

console.log(`Node JS version: ${process.version}`);
console.log('//------------- Config loading --------------//');
console.log(`Path: ${path.resolve(process.cwd(), '.env')}`);

if (config.error) throw config.error;

console.log(config.parsed);
console.log('//-------------------------------------------//');

initDatabase();
initUdpServer();
Mailer.init();
