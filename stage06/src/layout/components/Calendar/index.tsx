import { Text } from '@ignite-ui/react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useMemo, useState } from 'react'
import { client } from '../../../code/settings/frontend'
import { Div, Table } from './styles'

interface IWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

type ICalendarWeeks = IWeek[]

interface CalendarProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
}

interface IBlockedWeekDays {
  blockedWeekDays: number[]
  blockedDates: number[]
}

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => dayjs().set('date', 1))
  const router = useRouter()
  const username = String(router.query.username)
  const { data: blockedDates } = useQuery<IBlockedWeekDays>(
    ['blocked-dates'],
    async () => {
      const response = await client.get(`users/${username}/blocked-dates`, {
        params: {
          year: currentDate.get('year'),
          month: String(currentDate.get('month') + 1).padStart(2, '0'),
        },
      })
      return response.data
    },
  )
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')
  const currentWeeks = useMemo(() => {
    if (!blockedDates) {
      return []
    }
    const daysInMonth = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => currentDate.set('date', i + 1))
    const firstWeekDayInMonth = currentDate.get('day')

    const fillDaysFromLastMonth = Array.from({
      length: firstWeekDayInMonth,
    })
      .map((_, i) => currentDate.subtract(i + 1, 'day'))
      .reverse()

    const lastDayInMonth = currentDate.set('date', currentDate.daysInMonth())
    const lastWeekDayInMonth = lastDayInMonth.get('day')

    const fillDaysFromNextMonth = Array.from({
      length: 7 - (lastWeekDayInMonth + 1),
    }).map((_, i) => lastDayInMonth.add(i + 1, 'day'))

    const calendarDays = [
      ...fillDaysFromLastMonth.map((date) => ({ date, disabled: true })),
      ...daysInMonth.map((date) => ({
        date,
        disabled:
          date.endOf('day').isBefore(new Date()) ||
          blockedDates.blockedWeekDays.includes(date.get('day')) ||
          blockedDates.blockedDates.includes(date.get('date')),
      })),
      ...fillDaysFromNextMonth.map((date) => ({ date, disabled: true })),
    ]

    const calendarWeeks = calendarDays.reduce<ICalendarWeeks>(
      (weeks, _, i, originalArray) => {
        const isFirstDayInWeek = i % 7 === 0

        if (isFirstDayInWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: originalArray.slice(i, i + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate, blockedDates])

  function handlePreviousMonth() {
    const previousMonth = currentDate.subtract(1, 'month')
    setCurrentDate(previousMonth)
  }

  function handleNextMonth() {
    const nextMonth = currentDate.add(1, 'month')
    setCurrentDate(nextMonth)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <Text size="md" className="capitalize">
          {currentMonth} <span className="text-Gray-200">{currentYear}</span>
        </Text>
        <Div.changeMonth className="flex gap-2 text-Gray-200">
          <button onClick={handlePreviousMonth} title="previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="next month">
            <CaretRight />
          </button>
        </Div.changeMonth>
      </div>
      <Table.calendar className="w-full border-spacing-1 table-fixed">
        <thead>
          <tr>
            <th>DOM.</th>
            <th>SEG.</th>
            <th>TER.</th>
            <th>QUA.</th>
            <th>QUI.</th>
            <th>SEX.</th>
            <th>SÁB.</th>
          </tr>
        </thead>
        <tbody>
          {currentWeeks.map(({ week, days }) => (
            <tr key={week}>
              {days.map(({ date, disabled }) => (
                <td
                  key={date.toString()}
                  onClick={() => onDateSelected(date.toDate())}
                >
                  <button disabled={disabled}>{date.get('date')}</button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table.calendar>
    </div>
  )
}
