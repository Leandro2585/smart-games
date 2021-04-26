import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateStores1619445700400 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'stores',
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
          name: 'latitude',
          type: 'decimal',
          scale: 6,
          precision: 8
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 6,
          precision: 8
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stores')
  }

}
