import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codigos_postales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('postal_code', 10).notNullable().unique()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
