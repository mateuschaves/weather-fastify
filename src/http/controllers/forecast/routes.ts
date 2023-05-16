import { FastifyInstance } from 'fastify'
import { get } from './get'

export async function forecastRoutes(app: FastifyInstance) {
  app.get('/forecast', get)
}
