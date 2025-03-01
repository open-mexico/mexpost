import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')

      table.increments('id').unique().primary()
      table.string('nombre').notNullable().index()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
