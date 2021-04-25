import { ICreateGameDTO } from '@modules/games/dtos/ICreateGamesDTO';
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
import { getRepository, Repository } from 'typeorm';
import { Game } from '../entities/Game';

export class GamesRepository implements IGamesRepository {
  private ormRepository: Repository<Game>;
  constructor(){
    this.ormRepository = getRepository(Game);
  }

  async create(gameData: ICreateGameDTO): Promise<Game> {
    const game = await this.ormRepository.create(gameData);
    await this.ormRepository.save(game);
    return game;
  }
  async findAllGames(): Promise<Game[]> {
    const games = await this.ormRepository.find();
    return games;
  }
}