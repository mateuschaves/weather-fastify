import { GeocodeModel } from '@/models/geocode-model'
import { GeocodeRepository } from '@/repositories/geocode-repository'

interface FetchGeocodeRequest {
  address: string
}

interface FetchGeocodeResponse {
  geocodes: GeocodeModel[]
}

export class FetchGeocodeUseCase {
  constructor(private readonly geocodeRepository: GeocodeRepository) {}

  async execute(request: FetchGeocodeRequest): Promise<FetchGeocodeResponse> {
    const { address } = request
    const geocodes = await this.geocodeRepository.fetchGeocode(address)
    return { geocodes }
  }
}
