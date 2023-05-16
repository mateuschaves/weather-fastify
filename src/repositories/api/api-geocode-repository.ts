import { GeocodeModel } from '@/models/geocode-model'
import { GeocodeRepository } from '../geocode-repository'
import { AxiosInstance } from 'axios'

export class ApiGeocodeRepository implements GeocodeRepository {
  constructor(private readonly geocodeClient: AxiosInstance) {}

  async fetchGeocode(address: string): Promise<GeocodeModel[]> {
    const { data } = await this.geocodeClient.get<GeocodeModel[]>('/search', {
      params: {
        q: address,
      },
    })

    return data
  }
}
