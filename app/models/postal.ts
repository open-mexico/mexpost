import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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

  @column({ serializeAs: null})
  declare estado_id: string
}
