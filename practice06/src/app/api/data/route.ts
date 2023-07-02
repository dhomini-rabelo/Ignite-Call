import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'

export async function GET(request: Request) {
  const [books, categories] = await Promise.all([
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
          },
        },
      },
    }),
    prisma.category.findMany(),
  ])
  return res.json({ data: { books, categories } })
}
