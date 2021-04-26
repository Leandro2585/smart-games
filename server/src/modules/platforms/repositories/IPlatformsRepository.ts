import { IFindPlatformsDTO } from '../dtos/IFindPlatformsDTO';
import { Platform } from '../infra/typeorm/entities/Platform';

export interface IPlatformsRepository {
  findByName(name: string): Promise<Platform | undefined>;
  findAll(): Promise<Platform[]>;
}