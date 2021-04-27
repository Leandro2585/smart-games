import { IFindPlatformsDTO } from '../dtos/IFindPlatformsDTO';
import { Platform } from '../infra/typeorm/entities/Platform';

export interface IPlatformsRepository {
  findByIds(ids: string[]): Promise<Platform[]>;
  findAll(): Promise<Platform[]>;
}