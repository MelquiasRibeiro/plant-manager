import { Router } from 'express';

import PlantController from './app/controllers/PlantController';

const routes = new Router();

// plant-endPoints

routes.get('/plants', PlantController.index);
routes.get('/plants/:id', PlantController.show);
routes.post('/plants', PlantController.store);
routes.delete('/plants/:id', PlantController.delete);

// stock-endPoints

export default routes;
