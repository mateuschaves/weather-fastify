import fastify from 'fastify'
import { ZodError } from 'zod'

import { env } from './env'
import { forecastRoutes } from './http/controllers/forecast/routes'

const app = fastify()

app.get('/', async () => ({ hello: 'world' }))

app.register(forecastRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  reply.status(500).send({ message: 'Internal server error' })
})

export default app
