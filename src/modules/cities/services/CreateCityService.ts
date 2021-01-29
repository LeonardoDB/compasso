import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import City from '../infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  name: string;
  state: string;
}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, state }: IRequest): Promise<City> {
    if (!state) {
      throw new AppError('Invalid state.', 401);
    }

    if (!name) {
      throw new AppError('Invalid city.', 401);
    }

    const findCityByName = await this.citiesRepository.findByName(name);

    if (findCityByName) {
      throw new AppError('This city is already registered.');
    }

    const city = await this.citiesRepository.create({
      name,
      state,
    });

    return city;
  }
}

export default CreateCityService;
