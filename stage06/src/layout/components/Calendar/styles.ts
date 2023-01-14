import { styled } from '@ignite-ui/react'

export const Div = {
  changeMonth: styled('div', {
    button: {
      all: 'unset',
      cursor: 'pointer',
      lineHeight: 0,
      borderRadius: '$sm',

      svg: {
        width: '$5',
        height: '$5',
      },

      '&:hover': {
        color: '$gray100',
      },

      '&:focus': {
        boxShadow: '0 0 0 2px $colors$gray100',
      },
    },
  }),
}

export const Table = {
  calendar: styled('table', {
    'tbody:before': {
      content: '.',
      lineHeight: '0.75rem',
      display: 'block',
      color: '$gray800',
    },

    'tbody td': {
      boxSizing: 'border-box',
    },

    'tbody td button': {
      all: 'unset',
      width: '100%',
      aspectRatio: '1/1',
      background: '$gray600',
      textAlign: 'center',
      cursor: 'pointer',
      borderRadius: '$sm',

      '&:disabled': {
        background: 'none',
        cursor: 'default',
        opacity: 0.4,
      },

      '&:not(:disabled):hover': {
        background: '$gray500',
      },

      '&:focus': {
        boxShadow: '0 0 0 1px $colors$gray100',
      },
    },
  }),
}
