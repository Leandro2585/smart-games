import { badRequest, ok } from '@shared/helpers/HttpHelper';
import { Controller, HttpRequest, HttpResponse } from '@shared/protocols';

export class ListGamesController implements Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return new Promise((resolve) => resolve());
    } catch (error) {
      return badRequest(error);
    }
  }
}
