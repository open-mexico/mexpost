import app from './app'
import config from './config'
import database from './database'

import consola from 'consola'

const { PORT, MEXPOST } = config

async function bootstrap(): Promise<void> {
  try {
    await database(app);
    app.listen(PORT)
  } catch (error) {
    throw new Error(error)
  }
}

bootstrap()
  .then(() => {
    console.log('\x1b[35m', MEXPOST)
    consola.ready(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
  .catch((err) => {
    consola.error(err)
    process.exit()
  })
