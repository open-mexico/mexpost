import { PoolConfig } from 'mariadb'

const {
  DB_PORT,
  DB_HOST = 'localhost',
  DB_NAME = 'mexpost',
  DB_USER,
  DB_PASSWORD
} = process.env;

const port: number = Number(DB_PORT) || 3306;

export const config: PoolConfig = {
  port,
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD
};
