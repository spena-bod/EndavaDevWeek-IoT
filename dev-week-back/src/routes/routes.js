export class Routes {
  constructor(app, mqttClient, redisClient) {
    app.get('/sessions', this.getAllSessions);
    app.get('/session/:id/info', this.getSessionInfoById);
    app.post('/session', this.createNewSession);
    app.post('/session/start', this.startSession)
  }

  getAllSessions(req, res) {

  }
  
  getSessionInfoById(req, res) {
    
  }
  
  createNewSession(req, res) {

  }

  startSession(req, res) {

  }
}