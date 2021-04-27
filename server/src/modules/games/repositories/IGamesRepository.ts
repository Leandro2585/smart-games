import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { Game } from '../infra/typeorm/entities/Game';

export interface IGamesRepository {
  create(gameDTO: ICreateGameDTO): Promise<Game>;
  findByIds(ids: string[]): Promise<Game[] | undefined>;  
  findAllGames(): Promise<Game[]>;
}
