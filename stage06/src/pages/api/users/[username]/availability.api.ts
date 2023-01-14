import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../code/settings/backend'
import dayjs from 'dayjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const date = req.query.date

  if (!date) {
    return res.status(400).json({
      message: "Date don't sended",
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

  const referenceDate = dayjs(String(date))
  const isPastDate = referenceDate.endOf('day').isBefore(new Date())

  if (isPastDate) {
    return res.status(200).json({
      availability: [],
    })
  }

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: referenceDate.get('day'),
    },
  })

  if (!userAvailability) {
    return res.status(200).json({
      availability: [],
    })
  }

  const { start_time_in_minutes, end_time_in_minutes } = userAvailability

  const startHour = start_time_in_minutes / 60
  const endHour = end_time_in_minutes / 60

  const possibleHours = Array.from({
    length: endHour - startHour,
  }).map((_, i) => startHour + i)

  const blockedTimes = await prisma.scheduling.findMany({
    select: {
      date: true,
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      },
    },
  })

  const blockedHours = blockedTimes.map((blockedTime) =>
    blockedTime.date.getHours(),
  )

  const availabilityHours = possibleHours.filter(
    (hour) => !blockedHours.includes(hour),
  )

  return res.status(200).json({
    // availability
    possibleHours,
    availabilityHours,
  })
}
