import { container } from 'tsyringe';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { PlatformsRepository } from '@modules/platforms/infra/typeorm/repositories/PlatformsRepository';
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
import { GamesRepository } from '@modules/games/infra/typeorm/repositories/GamesRepository';
import { IStoresRepository } from '@modules/stores/repositories/IStoresRepository';
import { StoresRepository } from '@modules/stores/infra/typeorm/repositories/StoresRepository';

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository
);

container.registerSingleton<IPlatformsRepository>(
  'PlatformsRepository',
  PlatformsRepository
);

container.registerSingleton<IStoresRepository>(
  'StoresRepository',
  StoresRepository
)