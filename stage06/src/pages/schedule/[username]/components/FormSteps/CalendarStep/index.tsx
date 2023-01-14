import { Text } from '@ignite-ui/react'
import { useState } from 'react'
import { Calendar } from '../../../../../../layout/components/Calendar'
import { Div } from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const dateIsSelected = selectedDate !== null

  return (
    <Div.container
      isTimePickerOpen={dateIsSelected}
      className="mt-6 mx-auto px-0 grid relative"
    >
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {dateIsSelected && (
        <div className="border-l border-Gray-600 pt-6 px-6 overflow-y-scroll absolute top-0 bottom-0 right-0">
          <Text size="md">
            terça-feira <span className="text-Gray-200">20 de setembro</span>
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
