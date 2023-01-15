import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../code/settings/backend'
import dayjs from 'dayjs'
import * as zod from 'zod'
import { getGoogleOAuthToken } from '../../../../code/settings/google'
import { google } from 'googleapis'

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

  const scheduling = await prisma.scheduling.create({
    data: {
      name,
      email,
      observations,
      date: schedulingDate.toDate(),
      user_id: user.id,
    },
  })

  const calendar = google.calendar({
    version: 'v3',
    auth: await getGoogleOAuthToken(user.id),
  })

  await calendar.events.insert({
    calendarId: 'primary',
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Ignite Call: ${name}`,
      description: observations,
      start: {
        dateTime: schedulingDate.format(),
      },
      end: {
        dateTime: schedulingDate.add(1, 'hour').format(),
      },
      attendees: [{ email, displayName: name }],
      conferenceData: {
        createRequest: {
          requestId: scheduling.id,
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
    },
  })

  return res.status(201).end()
}
