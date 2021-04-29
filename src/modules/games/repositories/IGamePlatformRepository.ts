import { GamePlatform } from '../infra/typeorm/entities/GamePlatform';

export interface IGamePlatformRepository {
  findByGameId(id: string): Promise<GamePlatform[]>
}