import mariadb, { Pool, PoolConnection, PoolConfig } from 'mariadb'

const config: PoolConfig | string = {host: process.env.DB_HOST, user: process.env.DB_USER, connectionLimit: 5}
const pool: Pool = mariadb.createPool(config);

let conn: PoolConnection;

async function asyncFunction() {
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    // rows: [ {val: 1}, meta: ... ]

    const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
	  throw err;
  } finally {
	  if (conn) conn.release(); //release to pool
  }
}
