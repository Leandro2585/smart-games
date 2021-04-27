import { ICreateGameDTO } from '@modules/games/dtos/ICreateGamesDTO';
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { Game } from '../entities/Game';

export class GamesRepository implements IGamesRepository {
  private ormRepository: Repository<Game>;
  constructor(){
    this.ormRepository = getRepository(Game);
  }

  async create(gameData: ICreateGameDTO): Promise<Game> {
    const game = await this.ormRepository.create(gameData);
    return game;
  }
  async save(game: Game): Promise<Game> {
    return this.ormRepository.save(game)
  }
  async findAllGames(): Promise<Game[]> {
    const games = await this.ormRepository.find();
    return games;
  }
}