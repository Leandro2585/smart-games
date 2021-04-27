import { container } from 'tsyringe';
import { badRequest, ok } from '@shared/helpers/http/HttpHelper';
import { Controller, HttpRequest, HttpResponse, Validation } from '@shared/protocols';
import { CreateStoreService } from '../services/CreateStoreService';

export class CreateStoreController implements Controller {
  constructor(
    private readonly validation: Validation
  ){}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if(error) {
        return badRequest(error);
      }
      const { name, latitude, longitude, games_id } = httpRequest.body;       
      
      const createStore = container.resolve(CreateStoreService);

      const store = await createStore.execute({ name, latitude, longitude, games_id });
    
      return ok(store);
    } catch (error) {
      return badRequest(error);
    }
  }
}