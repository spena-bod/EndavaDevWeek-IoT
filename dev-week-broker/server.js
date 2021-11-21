export class AedesListeners {
  constructor(server, aedes) {
    this.initializeServer(server);
    this.clientConnection(aedes);
    this.clientDisconnection(aedes);
    this.clientSubscription(aedes);
    this.clientUnsubscription(aedes);
    this.messagePublication(aedes);
  }

  initializeServer(server) {
    const port = 1883;
    server.listen(port, () => {
      console.log(`Aedes server listening on port: ${port}`);
    });
  }

  clientConnection(aedes) {
    aedes.on('client', (client) => {
      console.log(`MQTT client ${client ? client.id : 'undisclosed'} 
      \x1b[0m has connected to le broker numéro ${aedes.id}`);
    });
  }

  clientDisconnection(aedes) {
    aedes.on('clientDisconnect', (client) => {
      console.log(`MQTT client ${client ? client.id : 'undisclosed'} 
      \x1b[0m has disconnected to le broker numéro ${aedes.id}`);
    });
  }

  clientSubscription(aedes) {
    aedes.on('subscribe', (subscriptions, client) => {
      console.log(`MQTT client ${client ? client.id : 'undisclosed'} 
      \x1b[0m has subscribed to topics ${subscriptions.map(s => s.topic).join('\n')} 
        from le broker numéro ${aedes.id}`);
    });
  }

  clientUnsubscription(aedes) {
    aedes.on('unsubscribe', (subscriptions, client) => {
      console.log(`MQTT client ${client ? client.id : 'undisclosed'}
      \x1b[0m has unsubscribed to topics ${subscriptions.join('\n')}
      from le broker numéro ${aedes.id}`)
    });
  }

  messagePublication(aedes) {
    aedes.on('publish', (packet, client) => {
      console.log(`MQTT client ${client ? client.id : 'undisclosed'}
      \x1b[0m has published ${packet.payload.toString()}
      on the topic ${packet.topic}`)
    });
  }

}