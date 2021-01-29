import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import City from '../infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  name: string;
  state: string;
}

@injectable()
class ShowCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({
    name,
    state,
  }: IRequest): Promise<City[] | City | undefined> {
    if (name) {
      const city = await this.citiesRepository.findByName(name);

      if (!city) {
        throw new AppError('City not found.');
      }

      return city;
    } else if (state) {
      const cities = await this.citiesRepository.findByState(state);

      if (!cities) {
        throw new AppError('Cities not found.');
      }

      return cities;
    } else {
      const cities = await this.citiesRepository.find();

      return cities;
    }
  }
}

export default ShowCityService;
