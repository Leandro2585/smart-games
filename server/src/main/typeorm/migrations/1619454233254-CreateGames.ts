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
					name: 'game_platforms_id',
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
			]
    }))
  }
    
  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('games')
	}
}
