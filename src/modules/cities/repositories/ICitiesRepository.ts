import City from '../infra/typeorm/entities/City';
import ICreateCityDTO from '../dtos/ICreateCityDTO';

export default interface ICitiesRepository {
  create(data: ICreateCityDTO): Promise<City>;
  findByName(data: string): Promise<City | undefined>;
  findByState(data: string): Promise<City[] | undefined>;
  findByState(data: string): Promise<City[] | undefined>;
  find(): Promise<City[] | undefined>;
}
