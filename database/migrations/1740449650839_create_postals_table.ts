import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codigos_postales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('codigo', 5).notNullable()
      table.string('nombre').notNullable()
      table.string('tipo').notNullable()
      table.string('ciudad').notNullable()
      table.string('zona').notNullable()

      table.integer('estado_id').unsigned().references('id').inTable('estados')

      /**
       * Add table indexes
       */
      // table.index(['codigo', 'estado_id'], 'user_name_index')
      // table.index(['nombre', 'estado_id'], 'user_name_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
