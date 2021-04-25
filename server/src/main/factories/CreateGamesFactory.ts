import { CreateGamesController } from '@modules/games/controllers/CreateGamesController';
import { Controller } from '@shared/protocols';

export const makeCreateGamesFactory = (): Controller => {
  return new CreateGamesController();
};
