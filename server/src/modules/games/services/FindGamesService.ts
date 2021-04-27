import { inject, injectable } from 'tsyringe';
import { Service } from '@shared/protocols';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { Game } from '../infra/typeorm/entities/Game';

@injectable()
export class FindGamesService implements Service {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ){}
  async execute(): Promise<Game[]> {
    const games = await this.gamesRepository.findAll()
    return games
  }
}