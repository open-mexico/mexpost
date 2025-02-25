import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Estado from '#models/estado'

export default class extends BaseSeeder {
  async run() {
    await Estado.createMany([
      { nombre: "Aguascalientes" },
      { nombre: "Baja California" },
      { nombre: "Baja California Sur" },
      { nombre: "Campeche" },
      { nombre: "Coahuila de Zaragoza" },
      { nombre: "Colima" },
      { nombre: "Chiapas" },
      { nombre: "Chihuahua" },
      { nombre: "Ciudad de México" },
      { nombre: "Durango" },
      { nombre: "Guanajuato" },
      { nombre: "Guerrero" },
      { nombre: "Hidalgo" },
      { nombre: "Jalisco" },
      { nombre: "México" },
      { nombre: "Michoacán de Ocampo" },
      { nombre: "Morelos" },
      { nombre: "Nayarit" },
      { nombre: "Nuevo León" },
      { nombre: "Oaxaca" },
      { nombre: "Puebla" },
      { nombre: "Querétaro" },
      { nombre: "Quintana Roo" },
      { nombre: "San Luis Potosí" },
      { nombre: "Sinaloa" },
      { nombre: "Sonora" },
      { nombre: "Tabasco" },
      { nombre: "Tamaulipas" },
      { nombre: "Tlaxcala" },
      { nombre: "Veracruz de Ignacio de la Llave" },
      { nombre: "Yucatán" },
      { nombre: "Zacatecas" }
    ])
  }
}
