import type { HttpContext } from '@adonisjs/core/http'
import Postal from '#models/postal'
import {
  codigoPostalValidator
} from '#validators/postal'

export default class PostalsController {
  async codigo({ params, response }: HttpContext) {
    const { codigo } = await codigoPostalValidator.validate(params)

    const data = await Postal.query().whereLike('codigo', `%${codigo}%`)

    const payload = {
      values: data.length,
      data
    }

    response.json(payload)
  }

  async colonia({ request, response }: HttpContext) {
    const postal = await Postal.find(1)

    response.json(postal)
  }
}
