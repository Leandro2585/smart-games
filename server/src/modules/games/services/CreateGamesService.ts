import { injectable, inject } from 'tsyringe';
import { Service } from '@shared/protocols/Service';
import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { Game } from '../infra/typeorm/entities/Game';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { InvalidParamError } from '@shared/errors';

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
    platforms_id 
  }: ICreateGameDTO): Promise<Game> {
    const checkPlatformsExists = await this.platformsRepository.findByIds(platforms_id);
    if(!checkPlatformsExists) {
      throw new InvalidParamError('platforms_id')
    }
    
  }
}