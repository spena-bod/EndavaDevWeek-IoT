import aedesModule from 'aedes';
import { AedesListeners } from './server';
import net from 'net';

const aedes = aedesModule({
  id: 'BROKER_ENDAVA_1',
});
const server = net.createServer(aedes().handle);
const aedesListener = new AedesListeners(server, aedes);


