import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable().index()

      table.integer('estado_id').unsigned().references('id').inTable('estados')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
