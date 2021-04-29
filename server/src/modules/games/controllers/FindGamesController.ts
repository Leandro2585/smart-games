import { container } from 'tsyringe';
import { badRequest, ok } from '@shared/helpers/http/HttpHelper';
import { Controller, HttpRequest, HttpResponse } from '@shared/protocols';
import { FindGamesService } from '../services/FindGamesService';

export class FindGamesController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const findGames = container.resolve(FindGamesService);
      const games = await findGames.execute();
      return ok(games);
    } catch (error) {
      return badRequest(error);
    }
  }

}