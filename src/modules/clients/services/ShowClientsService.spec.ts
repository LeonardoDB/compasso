import FakeClientRepository from '../repositories/fakes/FakeCitiesRepository';

import showClientService from './ShowClientsService';

let fakeClientRepository: FakeClientRepository;
let showClient: showClientService;

describe('ShowClientsService', () => {
  beforeEach(() => {
    fakeClientRepository = new FakeClientRepository();

    showClient = new showClientService(fakeClientRepository);
  });

  it('should be able to get the client with name Alecsandra', async () => {
    const date = formata_data_us('30/01/2000');

    const client1 = await fakeClientRepository.create({
      name: 'Alecsandra',
      gender: 'feminino',
      birth: date,
      age: 20,
      city_id: 'city_id',
    });

    const client2 = await fakeClientRepository.create({
      name: 'Leonardo',
      gender: 'masculino',
      birth: date,
      age: 20,
      city_id: 'city_id',
    });

    const clients = await showClient.execute({
      id: '',
      name: 'Alecsandra',
    });

    expect(clients).toEqual(client1);

    function formata_data_us(data: any) {
      const data_formatada =
        data.substr(6, 4) +
        '-' +
        data.substr(3, 2) +
        '-' +
        data.substr(0, 2) +
        ' 00:00:00';
      return new Date(data_formatada);
    }
  });
});
