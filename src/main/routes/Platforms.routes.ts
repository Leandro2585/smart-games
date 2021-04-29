import { Router } from 'express';
import { adaptRoute } from '../adapters/ExpressRouteAdapter';
import { makeFindPlatformsFactory } from '../factories/FindPlatformsFactory';

export default (router: Router): void => {
  router.get('/platforms', adaptRoute(makeFindPlatformsFactory()));
};
