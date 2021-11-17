import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class AlterUserDeleteUsername1634216712935
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Users', 'username');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Users',
      new TableColumn({
        name: 'username',
        type: 'varchar',
      }),
    );
  }
}
