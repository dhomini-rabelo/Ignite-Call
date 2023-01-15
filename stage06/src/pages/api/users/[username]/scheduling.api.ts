import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../code/settings/backend'
import dayjs from 'dayjs'
import * as zod from 'zod'

export const timerIntervalsSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  observations: zod.string(),
  date: zod.string().datetime(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    })
  }

  const { name, email, observations, date } = timerIntervalsSchema.parse(
    req.body,
  )
  const schedulingDate = dayjs(date).startOf('hour')

  if (schedulingDate.isBefore(new Date())) {
    return res.status(400).json({
      message: 'invalid date',
    })
  }

  const conflictingScheduling = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })

  if (conflictingScheduling) {
    return res.status(400).json({
      message: 'Scheduling date is occupied',
    })
  }

  await prisma.scheduling.create({
    data: {
      name,
      email,
      observations,
      date: schedulingDate.toDate(),
      user_id: user.id,
    },
  })

  return res.status(201).end()
}
