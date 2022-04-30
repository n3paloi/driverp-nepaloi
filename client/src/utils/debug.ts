import * as rpc from 'rage-rpc';

mp.console = (data: any) => {
 rpc.callServer('debug.log', data);
};