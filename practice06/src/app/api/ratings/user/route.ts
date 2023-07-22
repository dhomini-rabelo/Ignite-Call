import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return res.json(
      { message: 'Email do usuário não informado' },
      { status: 400 },
    )
  }

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return res.json({ message: 'Usuário não encontrado' }, { status: 400 })
  }

  const ratings = await prisma.rating.findMany({
    where: {
      user,
    },
    include: {
      book: {
        select: {
          author: true,
          total_pages: true,
          name: true,
          cover_url: true,
          categories: {
            select: {
              category: true,
            },
          },
        },
      },
    },
  })

  return res.json({ data: { ratings, user } })
}
