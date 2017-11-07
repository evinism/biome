import * as express from 'express';
import * as bodyParser from 'body-parser';
import configureRoutes from './configureRoutes';
//const initSockets = require('./socket.js');
//const {initDb} = require('./store.js');
//const initCron = require('./fake_cron.js');

/* main function */
function run(env) {
  console.log('biome-server starting');

  // Main app!
  var app = express();
  app.set('port', (env.PORT || 8083));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  configureRoutes(app);

  const server = app.listen(app.get('port'), function() {
    console.log('biome-server is listening on port', app.get('port'));
  });
  /*initDb().then(() => {
    const server = app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
  })*/
}

export default run;
