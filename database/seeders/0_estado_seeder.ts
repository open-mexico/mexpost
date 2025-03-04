import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Estado from '#models/estado'

export default class extends BaseSeeder {
  async run() {
    await Estado.createMany([
      { nombre: 'Aguascalientes', id: 1},
      { nombre: 'Baja California', id: 2},
      { nombre: 'Baja California Sur', id: 3},
      { nombre: 'Campeche', id: 4},
      { nombre: 'Coahuila de Zaragoza', id: 5},
      { nombre: 'Colima', id: 6},
      { nombre: 'Chiapas', id: 7},
      { nombre: 'Chihuahua', id: 8},
      { nombre: 'Ciudad de México', id: 9},
      { nombre: 'Durango', id: 10},
      { nombre: 'Guanajuato', id: 11},
      { nombre: 'Guerrero', id: 12},
      { nombre: 'Hidalgo', id: 13},
      { nombre: 'Jalisco', id: 14},
      { nombre: 'México', id: 15},
      { nombre: 'Michoacán de Ocampo', id: 16},
      { nombre: 'Morelos', id: 17},
      { nombre: 'Nayarit', id: 18},
      { nombre: 'Nuevo León', id: 19},
      { nombre: 'Oaxaca', id: 20},
      { nombre: 'Puebla', id: 21},
      { nombre: 'Querétaro', id: 22},
      { nombre: 'Quintana Roo', id: 23},
      { nombre: 'San Luis Potosí', id: 24},
      { nombre: 'Sinaloa', id: 25},
      { nombre: 'Sonora', id: 26},
      { nombre: 'Tabasco', id: 27},
      { nombre: 'Tamaulipas', id: 28},
      { nombre: 'Tlaxcala', id: 29},
      { nombre: 'Veracruz de Ignacio de la Llave', id: 30},
      { nombre: 'Yucatán', id: 31},
      { nombre: 'Zacatecas', id: 32}
    ])
  }
}
