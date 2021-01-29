import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';

import ShowCityService from './ShowCityService';

let fakeCitiesRepository: FakeCitiesRepository;
let showCities: ShowCityService;

describe('ShowCityByStateService', () => {
  beforeEach(() => {
    fakeCitiesRepository = new FakeCitiesRepository();

    showCities = new ShowCityService(fakeCitiesRepository);
  });

  it('should be able to list the cities of Santa Catarina', async () => {
    const city1 = await fakeCitiesRepository.create({
      name: 'Brusque',
      state: 'Santa Catarina',
    });

    const city2 = await fakeCitiesRepository.create({
      name: 'Nova Trento',
      state: 'Santa Catarina',
    });

    const cities = await showCities.execute({
      name: '',
      state: 'Santa Catarina',
    });

    expect(cities).toEqual([city1, city2]);
  });
});
