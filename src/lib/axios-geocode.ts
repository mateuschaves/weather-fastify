import axios from 'axios'

const geocodeClient = axios.create({
  baseURL: 'https://geocode.maps.co',
})

export { geocodeClient }
