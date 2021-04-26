import { container } from 'tsyringe';
import { badRequest, ok } from '@shared/helpers/HttpHelper';
import { Controller, HttpRequest, HttpResponse } from '@shared/protocols';
import { FindPlatformsService } from '../services/FindPlatformsService';

export class FindPlatformsController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const findPlatforms = container.resolve(FindPlatformsService)
      const platforms = await findPlatforms.execute()
      return ok(platforms)
    } catch (error) {
      return badRequest(error);
    }
  }
}
