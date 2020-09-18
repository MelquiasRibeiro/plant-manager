import { Router } from 'express';

import multer from 'multer';
import PlantController from './app/controllers/PlantController';
import StockController from './app/controllers/StockController';
import SalesController from './app/controllers/SalesController';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);
// plant-endPoints

routes.get('/plants', PlantController.index);
routes.get('/plants/:id', PlantController.show);
routes.post('/plants', upload.single('image'), PlantController.store);
routes.put('/plants/:id', PlantController.update);
routes.delete('/plants/:id', PlantController.delete);

// stock-endPoints

routes.put('/stock/:id', StockController.update);

// sale-endPoints

routes.get('/sale', SalesController.index);
routes.post('/sale', SalesController.store);
routes.get('/sale/:id', SalesController.show);
routes.put('/sale/:id', SalesController.update);
routes.delete('/sale/:id', SalesController.delete);

export default routes;
