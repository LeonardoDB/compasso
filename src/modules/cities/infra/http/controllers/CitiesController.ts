import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCityService from '@modules/cities/services/CreateCityService';
import ShowCityService from '@modules/cities/services/ShowCityService';

export default class CitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, state } = request.body;

    const createCity = container.resolve(CreateCityService);

    const city = await createCity.execute({
      name,
      state,
    });

    return response.json(city);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const name = request.query.name as string;
    const state = request.query.state as string;

    const showCity = container.resolve(ShowCityService);

    const cities = await showCity.execute({
      name,
      state,
    });

    return response.json(cities);
  }
}
