import AppError from '@shared/errors/AppError';

import FakeClientRepository from '../repositories/fakes/FakeCitiesRepository';

import UpdateClientService from './UpdateClientsService';
import CreateClientService from './CreateClientsService';

let fakeClientRepository: FakeClientRepository;
let updateClient: UpdateClientService;
let createClient: CreateClientService;

describe('UpdateClientService', () => {
  beforeEach(() => {
    fakeClientRepository = new FakeClientRepository();

    createClient = new CreateClientService(fakeClientRepository);
    updateClient = new UpdateClientService(fakeClientRepository);
  });

  it('should be able to update the customers name', async () => {
    const client = await createClient.execute({
      name: 'Leonardo',
      gender: 'masculino',
      birth: '22/11/1998',
      city_id: 'city_id',
    });

    await updateClient.execute({
      id: client.id,
      name: 'João',
    });

    expect(client.name).toBe('João');
  });
});
