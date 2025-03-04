import type { HttpContext } from '@adonisjs/core/http'
import Postal from '#models/postal'

import {
  codigoPostalValidator,
  codigoPostalEstadoValidator,
  coloniaEstadoValidator
} from '#validators/postal_validator'

import { getEstadoName } from '#utils/estados'

export default class PostalsController {
  /**
   * Retrieves postal data based on the provided codigo.
   * @param {HttpContext} ctx - The HTTP context object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   */
  async codigo({ params, request, response }: HttpContext) {
    const { codigo } = await codigoPostalValidator.validate(params)

    const { wc } = request.qs()
    const busqueda = wc ? `'%${codigo}%'` : `'${codigo}%'`
    const data = await Postal.query().whereRaw(`codigo like ${busqueda}`).preload('estado')

    const payload = {
      values: data.length,
      data
    }

    response.json(payload)
  }

  async codigoEstado({ request, params, response }: HttpContext) {
    const { codigo, estado } = await codigoPostalEstadoValidator.validate(params)

    const estadoName = getEstadoName(estado)

    const { wc } = request.qs()
    const busqueda = wc ? `'%${codigo}%'` : `'${codigo}%'`
    const data = await Postal.query().whereRaw(`codigo like ${busqueda}`).where('estado_id', estado).preload('estado').preload('municipio', q => q.where('estado_id', estado))

    const payload = {
      values: data.length,
      estado: estadoName.nombre,
      data
    }

    response.json(payload)
  }

  async colonia({ params, request, response }: HttpContext) {
    const { colonia, estado } = await coloniaEstadoValidator.validate(params)

    const newColonia = decodeURIComponent(colonia)
    const page = request.input('page', 1)
    const limit = 15

    const data = await Postal.query().whereRaw(`nombre like '%${newColonia}%'`).where('estado_id', estado).preload('municipio', q => q.where('estado_id', estado)).paginate(page, limit)

    response.json(data)
  }
}
