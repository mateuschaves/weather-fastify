import { GeocodeModel } from '@/models/geocode-model'

export interface GeocodeRepository {
  fetchGeocode(address: string): Promise<GeocodeModel[]>
}
