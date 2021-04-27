import { CreateGamesController } from '@modules/games/controllers/CreateGamesController';
import { Controller } from '@shared/protocols';
import { makeCreateGamesValidation } from './validators/CreateGamesValidation';

export const makeCreateGamesFactory = (): Controller => {
  return new CreateGamesController(makeCreateGamesValidation());
};
