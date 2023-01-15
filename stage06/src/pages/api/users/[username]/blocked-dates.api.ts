import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../code/settings/backend'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { month, year } = req.query

  if (!month || !year) {
    return res.status(400).json({
      message: "Year or month don't sended",
    })
  }

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

  const userAvailability = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const daysWithoutAvailability = [0, 1, 2, 3, 4, 5, 6].filter(
    (weekDay) =>
      !userAvailability.some(
        (timeAvailability) => timeAvailability.week_day === weekDay,
      ),
  )

  return res.status(200).json({
    blockedWeekDays: daysWithoutAvailability,
  })
}
