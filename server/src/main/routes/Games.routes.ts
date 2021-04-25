import { Router } from 'express';
import { adaptRoute } from '../adapters/ExpressRouteAdapter';
import { makeListGamesFactory } from '../factories/ListGamesFactory';
import { makeCreateGamesFactory } from '../factories/CreateGamesFactory';

export default (router: Router): void => {
  router.post('/games', adaptRoute(makeCreateGamesFactory()));
  router.get('/games', adaptRoute(makeListGamesFactory()));
};
