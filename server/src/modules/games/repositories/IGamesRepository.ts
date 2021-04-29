import { ICreateGameDTO } from '../dtos/ICreateGamesDTO';
import { Game } from '../infra/typeorm/entities/Game';

export interface IGamesRepository {
  create(gameDTO: ICreateGameDTO): Promise<Game>;
  findById(id: string): Promise<Game | undefined>;
  findByIds(ids: string[]): Promise<Game[]>;  
  findAll(): Promise<Game[]>;
}
