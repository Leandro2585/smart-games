import { FindPlatformsController } from '@modules/platforms/controllers/FindPlatformsController'

export const makeFindPlatformsFactory = () => {
  return new FindPlatformsController();
}