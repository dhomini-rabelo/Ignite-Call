import { styled } from '@ignite-ui/react'

export const Div = {
  intervals: styled('div', {
    'input::-webkit-calendar-picker-indicator': {
      filter: 'invert(100%) brightness(60%)',
    },
  }),
}
