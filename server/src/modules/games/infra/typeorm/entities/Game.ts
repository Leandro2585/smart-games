import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany,
} from 'typeorm';
import { Store } from '@modules/stores/infra/typeorm/entities/Store';
import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';

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

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => Platform, platform => platform.id)
  platforms: string[];

  @ManyToMany(() => Store, store => store.id)
  stores: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
