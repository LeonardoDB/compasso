import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class UpdateClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ id, name }: IRequest): Promise<Client> {
    if (!name) {
      throw new AppError('Invalid name.', 401);
    }

    const client = await this.clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('This client id is invalid.');
    }

    client.name = name;

    await this.clientsRepository.save(client);

    return client;
  }
}

export default UpdateClientsService;
