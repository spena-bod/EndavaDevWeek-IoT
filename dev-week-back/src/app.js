import express from 'express';
import cors from 'cors';
import redis from 'redis';
import { Routes } from './routes/routes';


export class App {
  constructor() {
    this.app = express();
    this.connectRedis();
  }

  configExpressMiddlewares() {
    this.app.use(cors(
      {origin: '*'}
    ));
    this.app.use(express.json());
  }

  connectRedis() {
    this.redisClient = redis.createClient({
      host: '0.0.0.0',
    });
    this.redisClient.on('connect', () => {
      console.log('Redis up and running')
    })
  }

  initHttpServer(port) {
    const server = this.app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);
    });
  }

  initializeRoutes(mqttInstance) {
    new Routes(this.app, mqttInstance, this.redisClient);
  }


  get redisInstance() {
    return this.redisClient;
  }


}