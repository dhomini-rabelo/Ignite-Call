import { Box, styled } from '@ignite-ui/react'

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
