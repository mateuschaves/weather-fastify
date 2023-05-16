import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import InMemoryForecastRepository from '@/repositories/in-memory/in-memory-forecast.repository'
import { GetForecastUseCase } from '@/use-cases/get-forecast'

let inMemoryGetForecastRepository: InMemoryForecastRepository
let sut: GetForecastUseCase

describe('Get forecast use case', () => {
  beforeEach(() => {
    inMemoryGetForecastRepository = new InMemoryForecastRepository()
    sut = new GetForecastUseCase(inMemoryGetForecastRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return a forecast passing valid coordinates', async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0))

    const latitude = -8.2773429
    const longitude = -35.9697553

    const { forecast } = await sut.execute({ latitude, longitude })

    expect(forecast).toEqual(
      expect.objectContaining({
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
      }),
    )
  })
})
