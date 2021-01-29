import AppError from '@shared/errors/AppError';

import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';

import CreateCityService from './CreateCityService';

let fakeCitiesRepository: FakeCitiesRepository;
let createCities: CreateCityService;

describe('CreateCityService', () => {
  beforeEach(() => {
    fakeCitiesRepository = new FakeCitiesRepository();

    createCities = new CreateCityService(fakeCitiesRepository);
  });

  it('should be able to create a new city', async () => {
    const city = await createCities.execute({
      name: 'Nova Trento',
      state: 'Santa Catarina',
    });

    expect(city).toHaveProperty('id');
  });

  it('should not be able to create a new city with name from another', async () => {
    await createCities.execute({
      name: 'Brusque',
      state: 'Santa Catarina',
    });

    await expect(
      createCities.execute({
        name: 'Brusque',
        state: 'Santa Catarina',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
