import { container } from 'tsyringe';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';
import CitiesRepository from '@modules/cities/infra/typeorm/repositories/CitiesRepository';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository';

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);
