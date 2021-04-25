import { ListGamesController } from '@modules/games/controllers/ListGamesController';
import { Controller } from '@shared/protocols';

export const makeListGamesFactory = (): Controller => {
  return new ListGamesController();
};
