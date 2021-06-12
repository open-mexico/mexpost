import config from './config'
import fastify, { FastifyInstance } from 'fastify'

const { IS_DEV } = config

let app: FastifyInstance = fastify({
    logger: IS_DEV
})

app.get('/', async function (request, reply) {
    return { hello: 'world' }
})

export default app
