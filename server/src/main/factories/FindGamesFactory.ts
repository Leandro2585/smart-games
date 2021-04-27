import { FindGamesController } from '@modules/games/controllers/FindGamesController'
import { Controller } from '@shared/protocols';

export const makeFindGamesFactory = (): Controller => {
  return new FindGamesController();
}