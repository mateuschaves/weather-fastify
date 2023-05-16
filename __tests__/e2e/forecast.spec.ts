import { afterAll, beforeAll, describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '@/app'
describe('Forecast e2e', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to fetch forecast from a valid address', async () => {
    const response = await request(app.server)
      .get('/forecast')
      .query({
        address: 'Rua Padre Antônio Tomaz Caruaru',
      })
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('forecast')
    expect(response.body).toHaveProperty('geocode')
    expect(response.body.forecast).toHaveProperty('latitude', -8.25)
    expect(response.body.forecast).toHaveProperty('longitude', -36)
  })

  it('should not be able to fetch forecast from an invalid address', async () => {
    const response = await request(app.server)
      .get('/forecast')
      .query({
        address: 'INVALID_ADDRESS',
      })
      .send()

    expect(response.status).toBe(404)
  })
})
