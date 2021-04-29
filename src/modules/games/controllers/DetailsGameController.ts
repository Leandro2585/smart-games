import { container } from 'tsyringe';
import { badRequest, ok } from '@shared/helpers/http/HttpHelper';
import { Controller, HttpRequest, HttpResponse, Validation } from '@shared/protocols';
import { DetailsGameService } from '../services/DetailsGameService';

export class DetailsGameController implements Controller {
  constructor(
    private readonly validation: Validation
  ){}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params);
      if(error) {
        return badRequest(error);
      }
      const { id } = httpRequest.params;
      const detailsGame = container.resolve(DetailsGameService);
      const game = await detailsGame.execute(id)
      return ok(game);
    } catch (error) {
      return badRequest(error);
    }
  }
}