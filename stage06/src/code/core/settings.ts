import { PrismaClient } from '@prisma/client'
import axios from 'axios'

export const prisma = new PrismaClient()

export const client = axios.create({
  baseURL: '/api',
})
