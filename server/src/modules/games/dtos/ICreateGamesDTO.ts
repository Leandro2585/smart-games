import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';
import { Store } from '@modules/stores/infra/typeorm/entities/Store';

export interface ICreateGameDTO {
  name: string;
  description: string;
  thumb: string;
  price: number;
  platforms_id: string;
  stores_id: string;
}