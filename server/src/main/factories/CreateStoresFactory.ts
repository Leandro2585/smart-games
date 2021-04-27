import { CreateStoreController } from '@modules/stores/controllers/CreateStoreController'
import { Controller } from '@shared/protocols'
import { makeCreateStoresValidation } from './validators/CreateStoresValidation'

export const makeCreateStoresFactory = (): Controller => {
  return new CreateStoreController(makeCreateStoresValidation())
}