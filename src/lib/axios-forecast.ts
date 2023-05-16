import axios from 'axios'

const forecastClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
})

export { forecastClient }
