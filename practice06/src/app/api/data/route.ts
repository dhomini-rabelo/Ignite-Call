import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'

export async function GET(request: Request) {
  const [books, categories, users] = await Promise.all([
    prisma.book.findMany({
      include: {
        categories: {
          select: {
            categoryId: true,
          },
        },
        ratings: {
          select: {
            description: true,
            rate: true,
            created_at: true,
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    }),
    prisma.category.findMany(),
    prisma.user.findMany(),
  ])
  return res.json({ data: { books, categories, users } })
}
