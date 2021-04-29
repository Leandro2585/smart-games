import { Router } from 'express';
import { adaptRoute } from '../adapters/ExpressRouteAdapter';
import { makeCreateStoresFactory } from '../factories/CreateStoresFactory';

export default (router: Router): void => {
  router.post('/stores', adaptRoute(makeCreateStoresFactory()))
}