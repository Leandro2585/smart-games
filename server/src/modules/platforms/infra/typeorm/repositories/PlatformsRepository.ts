import { getRepository, In, Repository } from 'typeorm';
import { IPlatformsRepository } from '../../../repositories/IPlatformsRepository';
import { Platform } from '../entities/Platform';

export class PlatformsRepository implements IPlatformsRepository {
  private ormRepository: Repository<Platform>;
  constructor() {
    this.ormRepository = getRepository(Platform);
  }
  async findByIds(ids: string[]): Promise<Platform[]> {
    const platforms = await this.ormRepository.find({
      id: In(ids)
    })
    return platforms
  }

  async findAll(): Promise<Platform[]> {
    const platforms = await this.ormRepository.find()
    return platforms
  }
}