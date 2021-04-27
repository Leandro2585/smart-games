import { container } from 'tsyringe';
import { badRequest, ok } from '@shared/helpers/http/HttpHelper';
import { Controller, HttpRequest, HttpResponse } from '@shared/protocols';
import { CreateGamesService } from '../services/CreateGamesService';
import { Validation } from '@shared/protocols/Validation';

export class CreateGamesController implements Controller {
  constructor(
    private readonly validation: Validation
  ){}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if(error) {
        return badRequest(error)
      }
      
      const { 
        name, 
        description, 
        thumb, 
        price,
        platforms_id
      } = await httpRequest.body
      
      const createGame = container.resolve(CreateGamesService)
      const game = await createGame.execute({
        name, 
        description, 
        thumb, 
        price,
        platforms_id
      })

      return ok(game)
    } catch (error) {
      return badRequest(error);
    }
  }
}
