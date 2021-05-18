import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeMessageColumnForMessagesName1621262009583
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'messages',
      'message',
      new TableColumn({
        name: 'content',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'messages',
      'content',
      new TableColumn({
        name: 'message',
        type: 'varchar',
      })
    );
  }
}
