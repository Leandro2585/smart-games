import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';
import { platform } from 'os';
import {
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
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

  @ManyToMany(() => Platform)
  @JoinTable({
    name: 'game_platform',
    joinColumns: [{ name: 'game_id'}],
    inverseJoinColumns: [{ name: 'platform_id'}]
  })
  platforms: Platform[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
