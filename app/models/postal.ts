import { DateTime } from 'luxon'
import Estado from '#models/estado'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Postal extends BaseModel {
  static table = 'codigos_postales'

  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare codigo: string

  @column()
  declare tipo: string

  @column()
  declare ciudad: string

  @column()
  declare zona: string

  @column({ serializeAs: null })
  declare estadoId: number

  // @hasOne(() => Estado, {
  //   localKey: 'estado_id',
  // })
  // declare estado: HasOne<typeof Estado>

  @belongsTo(() => Estado)
  declare estado: BelongsTo<typeof Estado>
}
