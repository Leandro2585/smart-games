import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { Service } from '@shared/protocols';
import { inject, injectable } from 'tsyringe';
import { IGamePlatformRepository } from '../repositories/IGamePlatformRepository';
import { IGamesRepository } from '../repositories/IGamesRepository';

@injectable()
export class DetailsGameService implements Service {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
    
    @inject('GamePlatformRepository')
    private gamePlatformRepository: IGamePlatformRepository,

    @inject('PlatformsRepository')
    private platformsRepository: IPlatformsRepository
  ) {}
  async execute(id: string): Promise<any> {
    const gamePlatforms = await this.gamePlatformRepository.findByGameId(id)
    const platformsIds = gamePlatforms.map(({ platform_id }) => platform_id)
    const platforms = await this.platformsRepository.findByIds(platformsIds);  
    const game = await this.gamesRepository.findById(id)
    return {
      ...game,
      platforms: platforms
    }
  }
}