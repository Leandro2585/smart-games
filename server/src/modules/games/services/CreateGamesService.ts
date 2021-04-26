import { injectable, inject } from 'tsyringe';
import { Service } from '@shared/protocols/Service';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { Game } from '../infra/typeorm/entities/Game';

@injectable()
export class CreateGamesService implements Service {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,

    @inject('PlatformsRepository')
    private platformsRepository: IPlatformsRepository
  ){}

  async execute(gameData: ICreateGameDTO): Promise<Game> {
    const game = await this.gamesRepository.create(gameData)
    return game
  }
}