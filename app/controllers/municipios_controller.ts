import type { HttpContext } from '@adonisjs/core/http'
import Municipio from '#models/municipio'

import {
  searchByMunicipioValidator
} from '#validators/municipio_validator'

export default class MunicipiosController {
  /**
   * Retrieves municipio data based on the provided estado and municipio.
   * @param {HttpContext} ctx - The HTTP context object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   */
  async municipio({ params, request, response }: HttpContext) {
    const { municipio:  munUrl , estado } = await searchByMunicipioValidator.validate(params)

    const municipio = decodeURIComponent(munUrl)
    const page = request.input('page', 1)
    const limit = 15

    const data = await Municipio.query().whereRaw(`nombre like '%${municipio}%'`).where('estado_id', estado).paginate(page, limit)

    response.json(data)
  }
}
