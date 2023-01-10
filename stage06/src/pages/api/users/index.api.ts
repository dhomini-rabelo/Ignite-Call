import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../code/core/settings'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { name, username }: { name: string; username: string } = req.body

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  })

  return res.status(201).json(user)
}
