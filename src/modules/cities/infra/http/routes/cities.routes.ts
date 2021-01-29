import { Router } from 'express';

import CitiesController from '../controllers/CitiesController';

const citiesRouter = Router();
const citiesController = new CitiesController();

citiesRouter.post('/', citiesController.create);
citiesRouter.get('/', citiesController.show);

export default citiesRouter;
