import { Router } from 'express';

import PlantController from './app/controllers/PlantController';

const routes = new Router();

routes.get('/plants', PlantController.index);
routes.get('/plants/:id', PlantController.show);
routes.post('/plants', PlantController.store);

export default routes;
