import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const client = axios.create({
  baseURL: '/api',
})

export const queryClient = new QueryClient()
