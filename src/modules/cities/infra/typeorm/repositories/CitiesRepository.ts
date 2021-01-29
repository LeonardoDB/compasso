import { getRepository, Repository } from 'typeorm';

import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';

import City from '../entities/City';
import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async findByName(name: string): Promise<City | undefined> {
    const findCity = await this.ormRepository.findOne({
      where: { name },
    });

    return findCity || undefined;
  }

  public async findByState(state: string): Promise<City[] | undefined> {
    const findCity = await this.ormRepository.find({
      where: { state },
    });

    return findCity || undefined;
  }

  public async find(): Promise<City[] | undefined> {
    const findCity = await this.ormRepository.find();
    return findCity || undefined;
  }

  public async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = this.ormRepository.create({
      name,
      state,
    });

    await this.ormRepository.save(city);

    return city;
  }
}

export default CitiesRepository;
