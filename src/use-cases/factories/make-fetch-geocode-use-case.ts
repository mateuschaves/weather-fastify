import { geocodeClient } from '@/lib/axios-geocode'
import { ApiGeocodeRepository } from '@/repositories/api/api-geocode-repository'
import { FetchGeocodeUseCase } from '../fetch-geocode'
export function makeFetchGeocodeUseCase(): FetchGeocodeUseCase {
  const geocodeRepository = new ApiGeocodeRepository(geocodeClient)
  const fetchGeocodeUseCase = new FetchGeocodeUseCase(geocodeRepository)

  return fetchGeocodeUseCase
}
