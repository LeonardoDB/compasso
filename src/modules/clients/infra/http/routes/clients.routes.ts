import { Router } from 'express';

import ClientsController from '../controllers/ClientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', clientsController.create);
clientsRouter.get('/', clientsController.show);
clientsRouter.delete('/:id', clientsController.delete);
clientsRouter.put('/:id', clientsController.update);

export default clientsRouter;
