import { App } from "./src/app.js";
import { MqttHandler } from "./src/mqttHandler.js";

const app = new App();
const redisInstance = app.redisInstance;
const mqttHandler = new MqttHandler(redisInstance);
app.initializeRoutes(mqttHandler);
app.initHttpServer(3000);