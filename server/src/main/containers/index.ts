import { container } from 'tsyringe'
import { GamesRepository } from '@modules/games/infra/typeorm/repositories/GamesRepository'
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository'

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository
)