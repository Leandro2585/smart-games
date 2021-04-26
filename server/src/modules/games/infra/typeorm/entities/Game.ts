import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';
import { Store } from '@modules/stores/infra/typeorm/entities/Store';
import {
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany
} from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  thumb: string;

  @Column()
  price: number;

  @Column({ type: 'uuid' })
  platforms_id: string;

  @Column({ type: 'uuid' })
  stores_id: string;

  @OneToMany(() => Platform, platform => platform.id)
  @JoinColumn({ name: 'platforms_id' })
  platforms: Platform[];

  @OneToMany(() => Store, store => store.id)
  @JoinColumn({ name: 'stores_id' })
  stores: Store[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
