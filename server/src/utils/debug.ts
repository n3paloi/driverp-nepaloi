import * as rpc from 'rage-rpc';

rpc.register('debug.log', (data: any, { environment }) => {
	console.log(`data: ${data}, env:  ${environment}`);
});