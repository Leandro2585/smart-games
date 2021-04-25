import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { Game } from '../infra/typeorm/entities/Game';

export interface IGamesRepository {
  create(gameData: ICreateGameDTO): Promise<Game>; 
  findAllGames(): Promise<Game[]>;
}
