import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '@modules/clients/services/CreateClientsService';
import ShowClientService from '@modules/clients/services/ShowClientsService';
import DeleteClientService from '@modules/clients/services/DeleteClientsService';
import UpdateClientService from '@modules/clients/services/UpdateClientsService';

export default class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, gender, birth, city_id } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({
      name,
      gender,
      birth,
      city_id,
    });

    return response.json(client);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.query;

    const showClient = container.resolve(ShowClientService);

    const clients = await showClient.execute({
      id: id as string,
      name: name as string,
    });

    return response.json(clients);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClient = container.resolve(DeleteClientService);

    await deleteClient.execute({
      id,
    });

    return response.status(204).send();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateClient = container.resolve(UpdateClientService);

    const client = await updateClient.execute({
      id,
      name,
    });

    return response.json(client);
  }
}
