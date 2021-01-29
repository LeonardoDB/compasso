import { getRepository, Repository } from 'typeorm';

import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

import Client from '../entities/Client';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findByName(name: string): Promise<Client | undefined> {
    const findClient = await this.ormRepository.findOne({
      where: { name },
    });

    return findClient || undefined;
  }

  public async findOne(id: string): Promise<Client | undefined> {
    const findClient = await this.ormRepository.findOne(id);
    return findClient || undefined;
  }

  public async delete(id: string): Promise<boolean> {
    await this.ormRepository.delete(id);
    return true;
  }

  public async save(client: Client): Promise<boolean> {
    await this.ormRepository.save(client);
    return true;
  }

  public async find(): Promise<Client[] | undefined> {
    const findClient = await this.ormRepository.find();
    return findClient || undefined;
  }

  public async create({
    name,
    gender,
    birth,
    age,
    city_id,
  }: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create({
      name,
      gender,
      birth,
      age,
      city_id,
    });

    await this.ormRepository.save(client);

    return client;
  }
}

export default ClientsRepository;
