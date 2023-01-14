import { Box, styled, Text } from '@ignite-ui/react'
import { Calendar } from '../../../../../layout/components/Calendar'

export const Div = {
  container: styled(Box, {
    variants: {
      isTimePickerOpen: {
        true: {
          gridTemplateColumns: '1fr 280px',
          '@media(max-width: 900px)': {
            gridTemplateColumns: '1fr',
          },
        },
        false: {
          maxWidth: 540,
          gridTemplateColumns: '1fr',
        },
      },
    },
  }),

  timePicker: styled('div', {
    gridTemplateColumns: '1fr',
    '@media(max-width: 900px)': {
      gridTemplateColumns: '1fr 1fr',
    },

    button: {
      border: 0,
      backgroundColor: '$gray600',
      padding: '$2 0',
      cursor: 'pointer',
      color: '$gray100',
      borderRadius: '$sm',
      fontSize: '$sm',
      lineHeight: '$base',

      '&:last-child': {
        marginBottom: '$6',
      },

      '&:focus': {
        boxShadow: '0 0 0 2px $colors$gray100',
      },

      '&:disabled': {
        background: 'none',
        cursor: 'default',
        opacity: 0.4,
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$gray500',
      },
    },
  }),
}

export function CalendarStep() {
  const dateIsSelected = true

  return (
    <Div.container
      isTimePickerOpen={dateIsSelected}
      className="mt-6 mx-auto px-0 grid relative"
    >
      <Calendar />
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
