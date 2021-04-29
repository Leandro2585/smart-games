import { Game } from '@modules/games/infra/typeorm/entities/Game';

export interface ICreateStoreDTO {
  name: string;
  latitude: number;
  longitude: number;
  games: Game[];
}