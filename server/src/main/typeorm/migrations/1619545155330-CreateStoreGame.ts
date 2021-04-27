import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateStoreGame1619545155330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'store_game',
			columns: [
				{
					name: 'store_id',
					type: 'uuid'
				},
				{
					name: 'game_id',
					type: 'uuid'
				}
			]
		}))
	
		await queryRunner.createForeignKeys('store_game', [
			new TableForeignKey(
				{
					name: 'fk_store_game',
					columnNames: ['store_id'],
					referencedTableName: 'stores',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}		
			),
			new TableForeignKey(
				{
					name: 'fk_game_store',
					columnNames: ['game_id'],
					referencedTableName: 'games',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}	
		)
		])
	}
	
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKeys('store_game', [])
		await queryRunner.dropTable('store_game')
	}
}
