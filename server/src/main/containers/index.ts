import { container } from 'tsyringe';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { PlatformsRepository } from '@modules/platforms/infra/typeorm/repositories/PlatformsRepository';
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
import { GamesRepository } from '@modules/games/infra/typeorm/repositories/GamesRepository';
import { IGamePlatformRepository } from '@modules/games/repositories/IGamePlatformRepository';
import { GamePlatformRepository } from '@modules/games/infra/typeorm/repositories/GamePlatformRepository';

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository
);

container.registerSingleton<IPlatformsRepository>(
  'PlatformsRepository',
  PlatformsRepository
);