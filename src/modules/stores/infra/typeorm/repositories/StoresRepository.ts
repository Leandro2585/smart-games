import { ICreateStoreDTO } from '@modules/stores/dtos/ICreateStoreDTO';
import { getRepository, Repository } from 'typeorm';
import { IStoresRepository } from '../../../repositories/IStoresRepository';
import { Store } from '../entities/Store';

export class StoresRepository implements IStoresRepository {
  private ormRepository: Repository<Store>
  constructor() {
    this.ormRepository = getRepository(Store)
  }
  async create(storeDTO: ICreateStoreDTO): Promise<Store> {
    const store = await this.ormRepository.create(storeDTO);
    return store;
  }

  async findAll(): Promise<Store[]> {
    const stores = await this.ormRepository.find()
    return stores
  }

}