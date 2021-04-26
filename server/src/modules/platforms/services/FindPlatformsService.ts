import { inject, injectable } from 'tsyringe';
import { Service } from '@shared/protocols/Service';
import { Platform } from '../infra/typeorm/entities/Platform';
import { IPlatformsRepository } from '../repositories/IPlatformsRepository';

@injectable()
export class FindPlatformsService implements Service {
  constructor(
    @inject('PlatformsRepository')
    private platformsRepository: IPlatformsRepository
  ){}
  async execute(): Promise<Platform[]> {
    const platforms = await this.platformsRepository.findAll();
    return platforms;
  }
}