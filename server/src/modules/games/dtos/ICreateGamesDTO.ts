import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';

export interface ICreateGameDTO {
  name: string;
  description: string;
  thumb: string;
  price: number;
  platforms: Platform[];
}