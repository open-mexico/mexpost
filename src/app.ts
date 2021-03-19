import app from './server'
import config from './config'
import consola from 'consola'

const { PORT, MEXPOST } = config

async function bootstrap(): Promise<void> {
  try {
    app.listen(PORT)
  } catch (error) {
    throw new Error(error)
  }
}

bootstrap()
  .then(() => {
    console.log('\x1b[34m', MEXPOST)
    consola.ready(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
  .catch((err) => {
    consola.error(err)
    process.exit()
  })
