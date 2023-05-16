import { ForecastModel } from '@/models/forecast-model'
import { ForecastRepository } from '../forecast-repository'
import { AxiosInstance } from 'axios'

export class ApiForecastRepository implements ForecastRepository {
  constructor(private readonly forecastInstance: AxiosInstance) {}

  async getForecast({
    latitude,
    longitude,
    currentWeather,
  }: {
    latitude: number
    longitude: number
    currentWeather: boolean
  }): Promise<ForecastModel> {
    const { data } = await this.forecastInstance.get<ForecastModel>(
      '/forecast',
      {
        params: {
          latitude,
          longitude,
          current_weather: currentWeather,
        },
      },
    )

    return data
  }
}
