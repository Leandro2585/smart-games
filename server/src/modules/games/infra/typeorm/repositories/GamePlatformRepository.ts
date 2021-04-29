import { getRepository, Repository } from 'typeorm';
import { IGamePlatformRepository } from '../../../repositories/IGamePlatformRepository';
import { GamePlatform } from '../entities/GamePlatform';

export class GamePlatformRepository implements IGamePlatformRepository {
  private ormRepository: Repository<GamePlatform>
  constructor() {
    this.ormRepository = getRepository(GamePlatform)
  }
  async findByGameId(id: string): Promise<GamePlatform[]> {
    const gamePlatforms = await this.ormRepository.find({
      where: { game_id: id },
      select: ['platform_id']
    });
    return gamePlatforms;
  }

}