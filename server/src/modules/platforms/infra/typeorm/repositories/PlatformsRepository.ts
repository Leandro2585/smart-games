import { getRepository, In, Repository } from 'typeorm';
import { IPlatformsRepository } from '../../../repositories/IPlatformsRepository';
import { Platform } from '../entities/Platform';

export class PlatformsRepository implements IPlatformsRepository {
  private ormRepository: Repository<Platform>;
  constructor() {
    this.ormRepository = getRepository(Platform);
  }

  async findByName(name: string): Promise<Platform | undefined> {
    const platform = await this.ormRepository.findOne({
      where: { name }
    });
    
    return platform;
  }

  async findAll(): Promise<Platform[]> {
    const platforms = await this.ormRepository.find()
    return platforms
  }
}