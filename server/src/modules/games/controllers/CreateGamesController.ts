import { badRequest, ok } from '@shared/helpers/HttpHelper';
import { Controller, HttpRequest, HttpResponse } from '@shared/protocols';
import { container } from 'tsyringe';
import { CreateGamesService } from '../services/CreateGamesService';

export class CreateGamesController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { 
        name, 
        description, 
        thumb, 
        price,
        platforms,
        stores
      } = await httpRequest.body
      
      const createGame = container.resolve(CreateGamesService)
      const game = await createGame.execute({
        name, 
        description, 
        thumb, 
        price,
        platforms,
        stores
      })

      return ok(game)
    } catch (error) {
      return badRequest(error);
    }
  }
}
