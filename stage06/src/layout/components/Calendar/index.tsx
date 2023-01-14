import { Text } from '@ignite-ui/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { Div, Table } from './styles'

export function Calendar() {
  return (
    <div className="flex flex-col gap-6 p-6 col-span-1">
      <div className="flex items-center justify-between">
        <Text size="md">
          Dezembro <span className="text-Gray-200">2022</span>
        </Text>
        <Div.changeMonth className="flex gap-2 text-Gray-200">
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </Div.changeMonth>
      </div>
      <Table.calendar className="w-full border-spacing-1 table-fixed">
        <thead className="text-Gray-200 font-medium">
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
