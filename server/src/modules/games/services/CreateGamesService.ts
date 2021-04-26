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

  async execute({ 
    name, 
    price, 
    thumb, 
    description, 
    stores_id,
    platforms_id 
  }: ICreateGameDTO): Promise<Game> {
  }
}