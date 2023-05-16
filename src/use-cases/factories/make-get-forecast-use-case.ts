import { ApiForecastRepository } from '@/repositories/api/api-forecast-repository'
import { GetForecastUseCase } from '../get-forecast'
import { forecastClient } from '@/lib/axios-forecast'

export function makeGetForecastUseCase() {
  const forecastRepository = new ApiForecastRepository(forecastClient)
  const getForecastUseCase = new GetForecastUseCase(forecastRepository)
  return getForecastUseCase
}
