import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export class AlterPlatformsFieldToPlatformsId1619290853822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'games',
      new TableColumn({
        name: 'platforms',
        type: 'uuid',
      }),
    );
    await queryRunner.createForeignKey(
      'games',
      new TableForeignKey({
        name: 'fk_games_platforms',
        referencedColumnNames: ['id'],
        referencedTableName: 'platforms',
        columnNames: ['platforms'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',

      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('games', 'fk_games_platforms');
    await queryRunner.dropColumn('games', 'platforms');
  }
}
