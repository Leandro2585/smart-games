import { FindPlatformsController } from '@modules/platforms/controllers/FindPlatformsController'
import { Controller } from '@shared/protocols';

export const makeFindPlatformsFactory = (): Controller => {
  return new FindPlatformsController();
}