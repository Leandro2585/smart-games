import { Service } from '@shared/protocols';
import { inject, injectable } from 'tsyringe';
import { Platform } from '../infra/typeorm/entities/Platform';
import { IPlatformsRepository } from '../repositories/IPlatformsRepository';

@injectable()
export class FindPlatformsService implements Service {
  constructor(
    @inject('PlatformsRepository')
    private readonly platformsRepository: IPlatformsRepository
  ){}
  async execute(): Promise<Platform[]> {
    const platforms = await this.platformsRepository.findAll()
    return platforms
  }

}