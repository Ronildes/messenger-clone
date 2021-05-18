import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeMessageAuthorColumn1621257159004
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'messages',
      'author',
      new TableColumn({
        name: 'authorName',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'messages',
      'authorName',
      new TableColumn({
        name: 'author',
        type: 'varchar',
        isNullable: true,
      })
    );
  }
}
