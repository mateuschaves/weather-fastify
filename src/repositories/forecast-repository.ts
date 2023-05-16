import { ForecastModel } from '@/models/forecast-model'

export interface ForecastRepository {
  getForecast({
    latitude,
    longitude,
    currentWeather,
  }: {
    latitude: number
    longitude: number
    currentWeather: boolean
  }): Promise<ForecastModel>
}
