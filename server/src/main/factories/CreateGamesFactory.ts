import { CreateGameController } from '@modules/games/controllers/CreateGameController';
import { Controller } from '@shared/protocols';
import { makeCreateGamesValidation } from './validators/CreateGamesValidation';

export const makeCreateGamesFactory = (): Controller => {
  return new CreateGameController(makeCreateGamesValidation());
};
