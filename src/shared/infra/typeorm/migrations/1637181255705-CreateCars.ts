import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCars1637181255705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'daily_rate',
            type: 'numeric',
          },
          {
            name: 'available',
            type: 'boolean',
            default: true,
          },
          {
            name: 'license_plate',
            type: 'varchar',
          },
          {
            name: 'fine_amount',
            type: 'numeric',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCategoryCar', // Nome não conflitante com nenhum outro
            referencedTableName: 'categories', // Nome da tabela de origem
            referencedColumnNames: ['id'], // nome da coluna referenciada
            columnNames: ['category_id'], // nome da coluna da tabela atual
            onDelete: 'SET NULL', // " Quando meu pai sofrer alguma alteração, o que você quer que eu faça se for uma deleçao?"
            // set_null caso a categoria seja removida, a tabela atual vai ficar com valor nulo
            onUpdate: 'SET NULL', // Mesmo para atualização
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
