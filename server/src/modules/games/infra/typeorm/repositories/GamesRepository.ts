import { ICreateGameDTO } from '../../../dtos/ICreateGamesDTO';
import { IGamesRepository } from '../../../repositories/IGamesRepository';
import { getRepository, In, Repository } from 'typeorm';
import { Game } from '../entities/Game';

export class GamesRepository implements IGamesRepository {
  private ormRepository: Repository<Game>;
  constructor(){
    this.ormRepository = getRepository(Game);
  }
  async findByIds(ids: string[]): Promise<Game[] | undefined> {
    const games = await this.ormRepository.find({
      id: In(ids)
    })
    return games
  }

  async create(gameDTO: ICreateGameDTO): Promise<Game> {
    const game = await this.ormRepository.create(gameDTO);
    await this.ormRepository.save(game);
    return game;
  }

  async findAllGames(): Promise<Game[]> {
    const games = await this.ormRepository.find();
    return games;
  }
}