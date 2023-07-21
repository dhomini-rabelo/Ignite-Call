import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'

export async function GET(request: Request) {
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
  })

  return res.json({ data: { ratings } })
}
