import { BaseSeeder } from '@adonisjs/lucid/seeders'
import fs from 'fs'
import db from '@adonisjs/lucid/services/db'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export default class extends BaseSeeder {
  async run() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sqlFilePath = resolve(__dirname, 'sql/municipios.sql')
    const sql = await fs.promises.readFile(sqlFilePath, 'utf8')

    await db.rawQuery(sql)
  }
}
