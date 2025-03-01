import type { HttpContext } from '@adonisjs/core/http'
import Postal from '#models/postal'
import db from '@adonisjs/lucid/services/db'
import {
  codigoPostalValidator,
  codigoPostalEstadoValidator,
  coloniaEstadoValidator
} from '#validators/postal_validator'

import { getEstadoName } from '#utils/estados'

export default class PostalsController {
  async codigo({ params, response }: HttpContext) {
    const { codigo } = await codigoPostalValidator.validate(params)

    const data = await Postal.query().whereRaw(`codigo like '%${codigo}%'`).preload('estado')

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

  async colonia({ params, request, response }: HttpContext) {
    const { colonia, estado } = await coloniaEstadoValidator.validate(params)

    const newColonia = decodeURIComponent(colonia)
    const page = request.input('page', 1)
    const limit = 10

    // TODO: Hacer que se pueda buscar por acentos y sin ellos
    const estadoName = getEstadoName(estado)
    // const data = await db.rawQuery(
    //   "SELECT * " +
    //   "FROM codigos_postales " +
    //   "WHERE nombre LIKE :colonia " +
    //   "AND estado_id = :estado",
    //   {
    //     colonia: newColonia,
    //     estado
    //   }
    // )
    const data = await Postal.query().whereLike('nombre', `%${newColonia}%`).where('estado_id', estado).paginate(page, limit)

    const payload = {
      // values: data.length,
      estado: estadoName.nombre,
      data
    }

    response.json(data)
  }
}
