import { ForecastModel } from '@/models/forecast-model'
import { ForecastRepository } from '@/repositories/forecast-repository'

interface GetForecastRequest {
  latitude: number
  longitude: number
  currentWeather?: boolean
}

interface GetForercastResponse {
  forecast: ForecastModel
}

export class GetForecastUseCase {
  constructor(private readonly forecastRepository: ForecastRepository) {}

  async execute({
    latitude,
    longitude,
    currentWeather = true,
  }: GetForecastRequest): Promise<GetForercastResponse> {
    const forecast = await this.forecastRepository.getForecast({
      latitude,
      longitude,
      currentWeather,
    })

    return { forecast }
  }
}
