import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

interface IRequest {
  id: string | undefined;
  name: string | undefined;
}

@injectable()
class ShowClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    id,
    name,
  }: IRequest): Promise<Client[] | Client | undefined> {
    if (name) {
      const client = await this.clientsRepository.findByName(name);
      return client;
    } else if (id) {
      const client = await this.clientsRepository.findOne(id);
      return client;
    } else {
      const clients = await this.clientsRepository.find();
      return clients;
    }
  }
}

export default ShowClientsService;
