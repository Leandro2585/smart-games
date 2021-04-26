import { Router } from 'express'
import { adaptRoute } from '@main/adapters/ExpressRouteAdapter'
import { makeCreateGamesFactory } from '@main/factories/CreateGamesFactory'

export default (router: Router): void => {
  router.post('/games', adaptRoute(makeCreateGamesFactory()))
}