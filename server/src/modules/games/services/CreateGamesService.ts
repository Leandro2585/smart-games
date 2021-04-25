import { injectable, inject } from 'tsyringe';
import { Service } from '@shared/protocols/Service';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { Game } from '../infra/typeorm/entities/Game';

@injectable()
export class CreateGamesService implements Service {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ){}

  async execute(gameData: ICreateGameDTO): Promise<Game> {
    const game = await this.gamesRepository.create(gameData)
    return game
  }
}