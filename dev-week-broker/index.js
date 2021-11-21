import aedesModule from 'aedes';
import { AedesListeners } from './server.js';
import net from 'net';

const aedes = aedesModule({
  id: 'BROKER_ENDAVA_1',
  heartbeatInterval: 1000 * 60 * 60 * 24,
});
const server = net.createServer(aedes.handle);
new AedesListeners(server, aedes);


