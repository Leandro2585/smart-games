import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CrateGamePlatforms1619464858439 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'game_platform',
			columns: [
				{
					name: 'platform_id',
					type: 'uuid'
				},
				{
					name: 'game_id',
					type: 'uuid'
				}
			]
		}))
	
		await queryRunner.createForeignKeys('game_platform', [
			new TableForeignKey(
				{
					name: 'fk_platform_game',
					columnNames: ['platform_id'],
					referencedTableName: 'platforms',
					referencedColumnNames: ['id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}		
			),
		new TableForeignKey(
			{
				name: 'fk_game_platform',
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
		await queryRunner.dropForeignKeys('game_platform', [])
		await queryRunner.dropTable('game_platform')
	}
}
