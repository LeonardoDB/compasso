import ICreateClientDTO from '../dtos/ICreateClientDTO';
import Client from '../infra/typeorm/entities/Client';

export default interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findByName(data: string): Promise<Client | undefined>;
  findOne(data: string): Promise<Client | undefined>;
  delete(data: string): Promise<boolean>;
  save(data: Client): Promise<boolean>;
  find(): Promise<Client[] | undefined>;
}
