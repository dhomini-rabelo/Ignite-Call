import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '../../../code/settings/backend'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { name, username }: { name: string; username: string } = req.body

  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (usernameExists) {
    return res.status(400).json({
      errors: {
        username: 'Username já cadastrado',
      },
    })
  }

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  })

  setCookie({ res }, '@ignite-call:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res.status(201).json(user)
}
