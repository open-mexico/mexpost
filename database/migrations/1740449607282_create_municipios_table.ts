import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'municipios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')

      table.integer('id').unsigned()

      table.string('nombre').notNullable()

      table.integer('estado_id').unsigned().references('id').inTable('estados')

      table.index(['id', 'estado_id'], 'municipios_id_estado_id_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
