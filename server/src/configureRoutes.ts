import routes from '../../shared/routes';
import * as express from 'express';

function configureRoutes(app){
  app.use(express.static('public'));

  app.get('*', function(request, response){
    response.status(404).send('fuck you no content');
  });
}

export default configureRoutes;
