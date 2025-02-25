import type { HttpContext } from '@adonisjs/core/http'
import Postal from '#models/postal'
import {
  codigoPostalValidator,
  codigoPostalEstadoValidator
} from '#validators/postal'

import { getEstadoName } from '#utils/estados'

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

  async codigoEstado({ params, response }: HttpContext) {
    const { codigo, estado } = await codigoPostalEstadoValidator.validate(params)

    const estadoName = getEstadoName(estado)
    const data = await Postal.query().whereLike('codigo', `%${codigo}%`).where('estado_id', estado)

    const payload = {
      values: data.length,
      estado: estadoName.nombre,
      data
    }

    response.json(payload)
  }

  async colonia({ request, response }: HttpContext) {
    const postal = await Postal.find(1)

    response.json(postal)
  }
}
