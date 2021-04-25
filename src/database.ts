import { spawn } from 'child_process'
import path from 'path'
import mariadb, { Pool, PoolConnection, PoolConfig } from 'mariadb'
import { Express } from 'express';
import consola from 'consola'
import { db } from './config'

const config: PoolConfig | string = {
  ...db,
  connectionLimit: 5
};
const pool: Pool = mariadb.createPool(config);

let conn: PoolConnection;

async function DBConnection(app: Express) {
  try {
    conn = await pool.getConnection();
    consola.success('Conexión a base de datos ✅\n');
    await createTables();
    createData();
  } catch (error) {
    consola.error(error);
    throw new Error('Error al conectar con base de datos');
  } finally {
    app.set('db', conn);
  }
}

async function createTables() {
  try {
    await conn.query(`
      CREATE TABLE IF NOT EXISTS estados (
        id TINYINT(3) UNSIGNED NOT NULL,
        nombre VARCHAR(31) NOT NULL COLLATE utf8_spanish_ci,
        PRIMARY KEY (id) USING BTREE
      );
    `)
    consola.success('Tabla de ESTADOS creada ✔');

    await conn.query(`
      CREATE TABLE IF NOT EXISTS municipios (
        id SMALLINT(5) UNSIGNED NOT NULL,
        nombre VARCHAR(50) NOT NULL COLLATE utf8_spanish_ci,
        estado_id TINYINT(3) UNSIGNED NOT NULL,
        PRIMARY KEY (id, estado_id) USING BTREE,
        INDEX municipios_estados_id_foreign (estado_id) USING BTREE,
        CONSTRAINT municipios_estados_id_foreign FOREIGN KEY (estado_id) REFERENCES estados (id) ON UPDATE CASCADE ON DELETE CASCADE
      );
    `)
    consola.success('Tabla de MUNICIPIOS creada ✔');

    await conn.query(`
      CREATE TABLE IF NOT EXISTS codigos_postales (
        id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
        codigo CHAR(5) NOT NULL COLLATE utf8_spanish_ci,
        nombre VARCHAR(60) NOT NULL COLLATE utf8_spanish_ci,
        tipo VARCHAR(22) NOT NULL COLLATE utf8_spanish_ci,
        ciudad VARCHAR(50) NULL DEFAULT NULL COLLATE utf8_spanish_ci,
        zona VARCHAR(10) NOT NULL COLLATE utf8_spanish_ci,
        estado_id TINYINT(3) UNSIGNED NOT NULL,
        municipio_id SMALLINT(5) UNSIGNED NOT NULL,
        PRIMARY KEY (id) USING BTREE,
        INDEX codigo (codigo) USING BTREE,
        INDEX nombre (nombre) USING BTREE,
        CONSTRAINT codigos_estados_id_foreign FOREIGN KEY (estado_id) REFERENCES estados (id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT codigos_municipios_id_foreign FOREIGN KEY (municipio_id) REFERENCES municipios (id) ON UPDATE CASCADE ON DELETE CASCADE
      );
    `)
    consola.success('Tabla de CÓDIGOS POSTALES creada ✔');
    consola.log('🔥Tablas creadas correctamente🔥\n');
  } catch (error) {
    consola.error('Error creación de tablas \n', error);
    throw new Error('Error al crear las tablas');
  }
}

function createData() {
  const py = spawn('python', [
    path.join(__dirname, '../scripts/codigos_postales.py'),
  ]);

  py.stdout.on('data', (data) => {
    console.log(`data:${data}`);
  });
  py.stderr.on('data', (data) => {
    console.log(`error:${data}`);
  });
  py.stderr.on('close', () => {
    console.log("Closed");
  })
}

export default DBConnection;
