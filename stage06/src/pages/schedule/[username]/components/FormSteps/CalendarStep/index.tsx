import { Text } from '@ignite-ui/react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { client } from '../../../../../../code/settings/frontend'
import { Calendar } from '../../../../../../layout/components/Calendar'
import { Div } from './styles'

interface IAvailability {
  possibleHours: number[]
  availabilityHours: number[]
}

interface Props {
  onSelectDatetime: (date: Date) => void
}

export function CalendarStep({ onSelectDatetime }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const router = useRouter()
  const username = String(router.query.username)
  const dateIsSelected = selectedDate !== null
  const selectedDateAsString = dayjs(selectedDate).format('YYYY-MM-DD')
  const { data: availability } = useQuery<IAvailability>(
    ['availability', selectedDateAsString],
    async () => {
      const response = await client.get(`users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )

  const weekDayInfo = selectedDate && {
    name: dayjs(selectedDate).format('dddd'),
    dayDescription: dayjs(selectedDate).format('DD[ de ]MMMM'),
  }

  function handleSelectTime(hour: number) {
    const dateTime = dayjs(selectedDate).set('hour', hour).startOf('hour')
    onSelectDatetime(dateTime.toDate())
  }

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
                key={hour}
                onClick={() => handleSelectTime(hour)}
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
