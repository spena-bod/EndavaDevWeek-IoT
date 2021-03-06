import mqtt from 'mqtt';

export class MqttHandler {
  constructor(redisInstance) {
    this.mqttClient = null;
    this.redisInstance = redisInstance;
    this.createMqttConnection();
  }

  createMqttConnection() {
    this.mqttClient = mqtt.connect('mqtt://0.0.0.0:1883');
    this.mqttClient.on('connect', () => {
      console.log('mqtt client connected');
    });
    
    this.mqttClient.subscribe('clientConnection');
  }

  messageListener() {
    this.mqttClient.on('message', (topic, message) => {
      switch (topic) {
        case 'microcontrollerConnection':
          
          break;
      
        default:
          break;
      }
    });
  }

  publishMessage(topic, message) {
    this.mqttClient.publish(topic, message);
  }

  get mqttInstance() {
    return this.mqttClient;
  }


}