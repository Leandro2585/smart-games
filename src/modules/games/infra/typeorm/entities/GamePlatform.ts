import { Platform } from '@modules/platforms/infra/typeorm/entities/Platform';
import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('game_platform')
export class GamePlatform {
  @PrimaryColumn()
  platform_id: string;

  @PrimaryColumn()
  game_id: string;
}
