import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class MessageRepositoryAddId1621212904027
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'messages',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('messages', 'id');
  }
}
