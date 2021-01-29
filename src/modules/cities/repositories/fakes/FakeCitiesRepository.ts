import { uuid } from 'uuidv4';

import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';
import City from '@modules/cities/infra/typeorm/entities/City';
import ICitiesRepository from '../ICitiesRepository';

export default class FakeCitiesRepository implements ICitiesRepository {
  private cities: City[] = [];

  public async findByName(name: string): Promise<City | undefined> {
    const findCity = this.cities.find(city => city.name === name);

    return findCity;
  }

  public async findByState(state: string): Promise<City[] | undefined> {
    const cities = this.cities.filter(city => city.state === state);

    return cities;
  }

  public async find(): Promise<City[] | undefined> {
    const cities = this.cities;
    return cities;
  }

  public async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = new City();

    Object.assign(city, { id: uuid(), name, state });

    this.cities.push(city);

    return city;
  }
}
