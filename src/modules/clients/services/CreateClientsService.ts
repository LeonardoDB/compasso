import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

interface IRequest {
  name: string;
  gender: string;
  birth: string;
  city_id: string;
}

@injectable()
class CreateClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    name,
    gender,
    birth,
    city_id,
  }: IRequest): Promise<Client> {
    if (!name) {
      throw new AppError('Invalid name.', 401);
    }

    if (!['masculino', 'feminino', 'outro'].includes(gender)) {
      throw new AppError('Invalid gender.', 401);
    }

    if (!birth) {
      throw new AppError('Invalid birth.', 401);
    }

    const findClientByName = await this.clientsRepository.findByName(name);

    if (findClientByName) {
      throw new AppError('This client is already registered.');
    }

    const birthFormated = formata_data_us(birth);
    const age = calculateAge(birthFormated);

    const client = this.clientsRepository.create({
      name,
      gender,
      birth: birthFormated,
      age,
      city_id,
    });

    return client;
  }
}

function formata_data_us(data: any) {
  const data_formatada =
    data.substr(6, 4) +
    '-' +
    data.substr(3, 2) +
    '-' +
    data.substr(0, 2) +
    ' 00:00:00';
  return new Date(data_formatada);
}

function calculateAge(birthday: Date) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default CreateClientsService;
