import { GeocodeRepository } from '../geocode-repository'
import { GeocodeModel } from '@/models/geocode-model'

export default class InMemoryGeocodeRepository implements GeocodeRepository {
  async fetchGeocode(address: string): Promise<GeocodeModel[]> {
    return [
      {
        place_id: 205376290,
        licence:
          'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
        osm_type: 'way',
        osm_id: 464104746,
        boundingbox: ['-8.2783553', '-8.2765479', '-35.9721277', '-35.9678556'],
        lat: '-8.2773429',
        lon: '-35.9697553',
        display_name:
          'Rua Padre Antônio Tomaz, Mauricio de Nassau, Caruaru, Região Geográfica Imediata de Caruaru, Região Geográfica Intermediária de Caruaru, Pernambuco, Região Nordeste, 55012-070, Brasil',
        class: 'highway',
        type: 'tertiary',
        importance: 0.5,
      },
    ]
  }
}
