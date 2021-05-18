import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class ChangeMessageAuthordForIsNullable1621253625069
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'messages',
      new TableColumn({
        name: 'authorId',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      'messages',
      'author',
      new TableColumn({
        name: 'author',
        type: 'varchar',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'messages',
      new TableForeignKey({
        name: 'messageAuthor',
        columnNames: ['authorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('messages', 'messageAuthor');

    await queryRunner.changeColumn(
      'messages',
      'author',
      new TableColumn({
        name: 'author',
        type: 'varchar',
        isNullable: false,
      })
    );

    await queryRunner.dropColumn('messages', 'authorId');
  }
}
