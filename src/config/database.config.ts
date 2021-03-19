export interface DatabaseConfig {
  DB_PORT: number
  DB_HOST: string
  DB_NAME: string
  DB_USER?: string
  DB_PASSWORD?: string | number
}

const {
  DB_PORT: port,
  DB_HOST = 'localhost',
  DB_NAME = 'mexpost',
  DB_USER,
  DB_PASSWORD
} = process.env

const DB_PORT: number = Number(port) || 3306;

export const config: DatabaseConfig = {
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
}
