import { Game } from '@modules/games/infra/typeorm/entities/Game';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, JoinTable } from 'typeorm'

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany(() => Game, game => game.id)
  @JoinTable({
    name: 'store_game',
    joinColumns: [{ name: 'store_id'}],
    inverseJoinColumns: [{ name: 'game_id'}]
  })
  games: Game[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}