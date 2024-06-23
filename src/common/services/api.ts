import axios from 'axios'

export const api = axios.create({
  headers: {
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Requested-With': 'XMLHttpRequest',
  },
  baseURL: process.env.API_BASE_URL ?? ''
})