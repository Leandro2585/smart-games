import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export class AddStoresFieldToGames1619291498113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('games', new TableColumn({
      name: 'stores',
      type: 'uuid',
    }));

    await queryRunner.createForeignKey(
      'games',
      new TableForeignKey({
        name: 'fk_games_stores',
        columnNames: ['stores'],
        referencedTableName: 'stores',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('games', 'fk_games_stores');
    await queryRunner.dropColumn('games', 'stores');
  }
}
