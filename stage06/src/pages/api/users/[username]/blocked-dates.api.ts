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

  const weekDayAvailability = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter(
    (weekDay) =>
      !weekDayAvailability.some(
        (timeAvailability) => timeAvailability.week_day === weekDay,
      ),
  )

  const blockedDatesRaw: {
    date: number
    amount: number
    size: number
  }[] = await prisma.$queryRaw`
    SELECT
      EXTRACT(DAY FROM S.DATE) AS date,
      COUNT(S.date) AS amount,
      ((UTI.end_time_in_minutes - UTI.start_time_in_minutes) / 60) AS size
    FROM schedulings S
    LEFT JOIN user_time_intervals UTI
      ON UTI.week_day = WEEKDAY(DATE_ADD(S.date, INTERVAL 1 DAY))
    WHERE S.user_id = ${user.id}
      AND DATE_FORMAT(S.date, "%Y-%m") = ${`${year}-${month}`}
    GROUP BY EXTRACT(DAY FROM S.DATE),
      ((UTI.end_time_in_minutes - UTI.start_time_in_minutes) / 60)
    HAVING amount >= size
  `

  const blockedDates = blockedDatesRaw.map((item) => item.date)

  return res.status(200).json({
    blockedWeekDays,
    blockedDates,
  })
}
