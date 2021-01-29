import { Router } from 'express';

import cityRouter from '@modules/cities/infra/http/routes/cities.routes';
import clientsRouter from '@modules/clients/infra/http/routes/clients.routes';

const routes = Router();

routes.use('/cities', cityRouter);
routes.use('/clients', clientsRouter);

export default routes;
