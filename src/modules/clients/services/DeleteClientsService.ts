import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IClientsRepository from '../repositories/IClientsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const client = await this.clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('This client id is invalid.');
    }

    this.clientsRepository.delete(id);
  }
}

export default DeleteClientsService;
