import { ICreateStoreDTO } from '../dtos/ICreateStoreDTO';
import { Store } from '../infra/typeorm/entities/Store';

export interface IStoresRepository {
  create(storeDTO: ICreateStoreDTO): Promise<Store>
  findAll(): Promise<Store[]>;
}