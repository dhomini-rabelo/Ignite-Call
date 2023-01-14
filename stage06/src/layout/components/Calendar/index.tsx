import { Text } from '@ignite-ui/react'
import dayjs from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { Div, Table } from './styles'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => dayjs().set('date', 1))
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

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
          <tr>
            <td>
              <button>1</button>
            </td>
            <td>
              <button>2</button>
            </td>
            <td>
              <button>3</button>
            </td>
            <td>
              <button>4</button>
            </td>
            <td>
              <button>5</button>
            </td>
            <td>
              <button>6</button>
            </td>
            <td>
              <button>7</button>
            </td>
          </tr>
        </tbody>
      </Table.calendar>
    </div>
  )
}
