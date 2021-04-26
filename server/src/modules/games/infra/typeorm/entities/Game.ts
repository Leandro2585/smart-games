import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';
import { Store } from '@modules/stores/infra/typeorm/entities/Store';
import {
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToMany
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

  @Column()
  platforms_id: string;

  @ManyToMany(() => Platform, platform => platform.id)
  @JoinColumn({ name: 'platforms_id' })
  platforms: Platform[];

  @Column()
  stores_id: string;  

  @ManyToMany(() => Store, store => store.id)
  @JoinColumn({ name: 'stores_id' })
  stores: Store[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
