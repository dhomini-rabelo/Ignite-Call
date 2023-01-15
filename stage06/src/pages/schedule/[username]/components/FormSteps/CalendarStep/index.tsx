import { Text } from '@ignite-ui/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { client } from '../../../../../../code/settings/frontend'
import { Calendar } from '../../../../../../layout/components/Calendar'
import { Div } from './styles'

interface IAvailability {
  possibleHours: number[]
  availabilityHours: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState<IAvailability | null>(null)
  const router = useRouter()
  const username = String(router.query.username)
  const dateIsSelected = selectedDate !== null

  const weekDayInfo = selectedDate && {
    name: dayjs(selectedDate).format('dddd'),
    dayDescription: dayjs(selectedDate).format('DD[ de ]MMMM'),
  }

  useEffect(() => {
    if (selectedDate) {
      client
        .get(`users/${username}/availability`, {
          params: {
            date: dayjs(selectedDate).format('YYYY-MM-DD'),
          },
        })
        .then((response) => setAvailability(response.data))
    }
  }, [selectedDate, username])

  return (
    <Div.container
      isTimePickerOpen={dateIsSelected}
      className="mt-6 mx-auto px-0 grid relative"
    >
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {dateIsSelected && (
        <div className="border-l border-Gray-600 pt-6 px-6 overflow-y-scroll absolute top-0 bottom-0 right-0 w-[280px]">
          <Text size="md">
            {weekDayInfo!.name}{' '}
            <span className="text-Gray-200">{weekDayInfo!.dayDescription}</span>
          </Text>
          <Div.timePicker className="mt-3 grid gap-2">
            {availability?.possibleHours.map((hour) => (
              <button
                type="button"
                key="hour"
                disabled={!availability.availabilityHours.includes(hour)}
              >
                {String(hour).padStart(2, '0')}:00h
              </button>
            ))}
          </Div.timePicker>
        </div>
      )}
    </Div.container>
  )
}
