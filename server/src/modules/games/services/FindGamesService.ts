import { inject, injectable } from 'tsyringe';
import { Service } from '@shared/protocols';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { Game } from '../infra/typeorm/entities/Game';
import { IGamePlatformRepository } from '../repositories/IGamePlatformRepository';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';

@injectable()
export class FindGamesService implements Service {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,

    @inject('GamePlatformRepository')
    private gamePlatformRepository: IGamePlatformRepository,

    @inject('PlatformsRepository')
    private platformsRepository: IPlatformsRepository
  ){}
  async execute(): Promise<Game[]> {
    let games = await this.gamesRepository.findAll();
    for(let game of games) {
      const gamePlatform = await this.gamePlatformRepository.findByGameId(game.id)
      const platformIds = gamePlatform.map(({ platform_id }) => platform_id);
      const platforms = await this.platformsRepository.findByIds(platformIds);
      game.platforms = platforms;
    }
    return games;
  }
}
