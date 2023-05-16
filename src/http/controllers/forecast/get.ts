import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetForecastUseCase } from '@/use-cases/factories/make-get-forecast-use-case'
import { makeFetchGeocodeUseCase } from '@/use-cases/factories/make-fetch-geocode-use-case'
import { GeocodeNotFound } from '@/use-cases/erros/geocode-not-found'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getForecastParamsSchema = z.object({
      address: z.string(),
    })

    const { address } = getForecastParamsSchema.parse(request.query)

    const fetchGeocodeUseCase = makeFetchGeocodeUseCase()

    const { geocodes } = await fetchGeocodeUseCase.execute({ address })

    const geocode = geocodes[0]

    if (!geocode?.lat && !geocode?.lon) {
      throw new GeocodeNotFound()
    }

    const { lat, lon } = geocode

    const getForecastUseCase = makeGetForecastUseCase()

    const { forecast } = await getForecastUseCase.execute({
      latitude: Number(lat),
      longitude: Number(lon),
    })

    return reply.status(200).send({
      forecast,
      geocode,
    })
  } catch (error) {
    if (error instanceof GeocodeNotFound) {
      return reply.status(404).send({
        message: error.message,
      })
    }
  }
}
