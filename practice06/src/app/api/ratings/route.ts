import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'
import * as zod from 'zod'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const createRatingBodySchema = zod.object({
  rate: zod.number().int().min(1).max(5),
  description: zod.string().min(1),
  bookId: zod.string().min(1),
})

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  const body = await request.json()
  console.log({ body })

  if (session && session.user) {
    const rating = createRatingBodySchema.parse({ ...body })
    const user = await prisma.user.findFirstOrThrow({
      where: {
        email: session.user.email,
      },
    })
    const ratingWasEvaluated = await prisma.rating.findFirst({
      where: {
        book_id: rating.bookId,
        user_id: user.id,
      },
    })

    if (ratingWasEvaluated) {
      return res.json({ message: 'Livro já foi avaliado' }, { status: 400 })
    }

    const ratingDB = await prisma.rating.create({
      data: {
        book_id: rating.bookId,
        rate: rating.rate,
        user_id: user.id,
        description: rating.description,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    })

    return res.json(
      {
        id: ratingDB.id,
        created_at: ratingDB.created_at,
        rate: ratingDB.rate,
        description: ratingDB.description,
        user: ratingDB.user,
      },
      { status: 201 },
    )
  } else {
    return res.json(null, { status: 401 })
  }
}
