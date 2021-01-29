import FakeClientRepository from '../repositories/fakes/FakeCitiesRepository';

import CreateClientService from './CreateClientsService';

let fakeClientRepository: FakeClientRepository;
let createClient: CreateClientService;

describe('CreateClientService', () => {
  beforeEach(() => {
    fakeClientRepository = new FakeClientRepository();

    createClient = new CreateClientService(fakeClientRepository);
  });

  it('should be able to create a new client', async () => {
    const client = await createClient.execute({
      name: 'Leonardo',
      gender: 'masculino',
      birth: '22/11/1998',
      city_id: 'city_id',
    });

    expect(client).toHaveProperty('id');
  });
});
