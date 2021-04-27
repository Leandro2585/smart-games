import { inject, injectable } from 'tsyringe';
import { Service } from '@shared/protocols';
import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
import { IStoresRepository } from '../repositories/IStoresRepository';
import { Store } from '../infra/typeorm/entities/Store';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  games_id: string[];
}

@injectable()
export class CreateStoreService implements Service {
  constructor(
    @inject('StoresRepository')
    private storesRepository: IStoresRepository,

    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ) {}
  async execute({ 
    name, 
    latitude, 
    longitude, 
    games_id 
  }: IRequest): Promise<Store> {
    const checkGamesExists = await this.gamesRepository.findByIds(games_id);
    if(!checkGamesExists) {
      throw new AppError('Platform ids not exist!');
    }
    const store = await this.storesRepository.create({
      name, 
      latitude,
      longitude,
      games: checkGamesExists 
    });

    return store;
  }
}