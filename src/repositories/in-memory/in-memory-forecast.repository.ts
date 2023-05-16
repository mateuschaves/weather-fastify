import { ForecastModel } from '@/models/forecast-model'
import { ForecastRepository } from '../forecast-repository'

export default class InMemoryForecastRepository implements ForecastRepository {
  async getForecast({
    latitude,
    longitude,
    currentWeather,
  }: {
    latitude: number
    longitude: number
    currentWeather: boolean
  }): Promise<ForecastModel> {
    return {
      latitude,
      longitude,
      generationtime_ms: 0.15091896057128906,
      utc_offset_seconds: 0,
      timezone: 'GMT',
      timezone_abbreviation: 'GMT',
      elevation: 5,
      current_weather: {
        temperature: 0,
        windspeed: 0,
        winddirection: 0,
        weathercode: 2,
        is_day: 1,
        time: new Date().toISOString(),
      },
    }
  }
}
