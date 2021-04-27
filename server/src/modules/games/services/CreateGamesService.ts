import { injectable, inject } from 'tsyringe';
import { Service } from '@shared/protocols/Service';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { Game } from '../infra/typeorm/entities/Game';
import { IPlatformsRepository } from '@modules/platforms/repositories/IPlatformsRepository';
import { InvalidParamError } from '@shared/errors';

interface IRequest {
  name: string;
  price: number; 
  thumb: string;
  description: string;
  platforms_id: string[];
}

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
    thumb,
    price,
    description,
    platforms_id
  }: IRequest): Promise<Game> {
    const checkPlatformsExists = await this.platformsRepository.findByIds(platforms_id);
    if(!checkPlatformsExists) {
      throw new InvalidParamError('platforms')
    }
    const game = await this.gamesRepository.create({
      name,
      thumb,
      price,
      description,
      platforms: checkPlatformsExists
    })
    return game;
  }
}