import FakeClientRepository from '../repositories/fakes/FakeCitiesRepository';

import DeleteClientService from './DeleteClientsService';
import CreateClientsService from './CreateClientsService';
import ShowClientService from './ShowClientsService';

let fakeClientRepository: FakeClientRepository;
let deleteClient: DeleteClientService;
let createClient: CreateClientsService;
let showClient: ShowClientService;

describe('DeleteClientsService', () => {
  beforeEach(() => {
    fakeClientRepository = new FakeClientRepository();

    createClient = new CreateClientsService(fakeClientRepository);
    deleteClient = new DeleteClientService(fakeClientRepository);
    showClient = new ShowClientService(fakeClientRepository);
  });

  it('should be able to delete the client', async () => {
    const client = await createClient.execute({
      name: 'Leonardo',
      gender: 'masculino',
      birth: '22/11/1998',
      city_id: 'city_id',
    });

    await deleteClient.execute({
      id: client.id,
    });

    const clients = await showClient.execute({
      id: '',
      name: 'Leonardo',
    });

    expect(clients).toEqual(expect.not.stringContaining('Leonardo'));
  });
});
