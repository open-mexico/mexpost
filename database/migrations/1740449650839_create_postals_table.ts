import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codigos_postales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')

      table.increments('id')

      table.string('codigo', 5).notNullable()
      table.string('nombre').notNullable()
      table.string('tipo').nullable()
      table.string('ciudad').nullable()
      table.string('zona').nullable()

      table.integer('estado_id').unsigned().references('id').inTable('estados').notNullable()
      table.integer('municipio_id').unsigned().references('id').inTable('municipios').notNullable()

      /**
       * Add table indexes
       */
      table.index(['codigo', 'estado_id'], 'codigo_estado_index')
      table.index(['nombre', 'estado_id'], 'nombre_codigo_estado_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
