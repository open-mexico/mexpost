import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Estado extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string
}
