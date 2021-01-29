import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';

import ShowCityService from './ShowCityService';

let fakeCitiesRepository: FakeCitiesRepository;
let showCities: ShowCityService;

describe('ShowCityService', () => {
  beforeEach(() => {
    fakeCitiesRepository = new FakeCitiesRepository();

    showCities = new ShowCityService(fakeCitiesRepository);
  });

  it('should be able to get the city with name Nova Trento', async () => {
    await fakeCitiesRepository.create({
      name: 'Brusque',
      state: 'Santa Catarina',
    });

    const city = await fakeCitiesRepository.create({
      name: 'Nova Trento',
      state: 'Santa Catarina',
    });

    const cities = await showCities.execute({
      name: 'Nova Trento',
      state: '',
    });

    expect(cities).toEqual(city);
  });
});
