import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateGames1619454233254 implements MigrationInterface {
    
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
			name: 'games',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'uuid'
				},
				{
					name: 'name',
					type: 'varchar'
				},
				{
					name: 'description',
					type: 'text'
				},
				{
					name: 'thumb',
					type: 'varchar'
				},
				{
					name: 'price',
					type: 'numeric',
					precision: 10,
					scale: 2
				},
				{
					name: 'platforms_id',
					type: 'uuid'
				},
				{
					name: 'stores_id',
					type: 'uuid'
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()'
				},
				{
					name: 'updated_at',
					type: 'timestamp',
					default: 'now()'
				}
			],
			foreignKeys: [
				{
					name: 'fk_games_platforms',
					columnNames: ['platforms_id'],
					referencedTableName: 'platforms',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				},
				{
					name: 'fk_games_stores',
					columnNames: ['stores_id'],
					referencedTableName: 'stores',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}
			]
    }))
  }
    
  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('games', 'fk_games_platforms')
		await queryRunner.dropForeignKey('games', 'fk_games_stores')
		await queryRunner.dropTable('games')
	}
    
}
