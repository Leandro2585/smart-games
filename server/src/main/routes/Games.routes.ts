import { Router } from 'express';
import { adaptRoute } from '@main/adapters/ExpressRouteAdapter';
import { makeCreateGamesFactory } from '@main/factories/CreateGamesFactory';
import { makeFindGamesFactory } from '@main/factories/FindGamesFactory';

export default (router: Router): void => {
  router.post('/games', adaptRoute(makeCreateGamesFactory()))
  router.get('/games', adaptRoute(makeFindGamesFactory()))
}