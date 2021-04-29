import { DetailsGameController } from '@modules/games/controllers/DetailsGameController'
import { Controller } from '@shared/protocols'
import { makeDetailsGameValidation } from './validators/DetailsGameValidation'

export const makeDetailsGameFactory = (): Controller => {
  return new DetailsGameController(makeDetailsGameValidation())
}