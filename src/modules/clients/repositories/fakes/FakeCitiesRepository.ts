import { uuid } from 'uuidv4';

import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';
import Client from '@modules/clients/infra/typeorm/entities/Client';
import IClientsRepository from '../IClientsRepository';

export default class FakeClientRepository implements IClientsRepository {
  private clients: Client[] = [];

  public async findByName(name: string): Promise<Client | undefined> {
    const client = this.clients.find(client => client.name === name);

    return client;
  }

  public async findOne(id: string): Promise<Client | undefined> {
    const client = this.clients.find(client => client.id === id);

    return client;
  }

  public async find(): Promise<Client[] | undefined> {
    const clients = this.clients;
    return clients;
  }

  public async delete(id: string): Promise<boolean> {
    const clients = this.clients.filter(client => client.id !== id);
    return true;
  }

  public async save(client: Client): Promise<boolean> {
    return true;
  }

  public async create({
    name,
    gender,
    birth,
    age,
    city_id,
  }: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, { id: uuid(), name, gender, birth, age, city_id });

    this.clients.push(client);

    return client;
  }
}
