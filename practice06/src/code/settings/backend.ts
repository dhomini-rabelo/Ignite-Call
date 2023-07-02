import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const USER_ID_COOKIE_NAME = '@ignite-book-wise:userId'
