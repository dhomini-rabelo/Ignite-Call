import { Text } from '@ignite-ui/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Calendar } from '../../../../../../layout/components/Calendar'
import { Div } from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const dateIsSelected = selectedDate !== null

  const weekDayInfo = selectedDate && {
    name: dayjs(selectedDate).format('dddd'),
    dayDescription: dayjs(selectedDate).format('DD[ de ]MMMM'),
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
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
            <button>08:00h</button>
          </Div.timePicker>
        </div>
      )}
    </Div.container>
  )
}
