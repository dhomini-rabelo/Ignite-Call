import { styled } from '@ignite-ui/react'

export const Div = {
  container: styled('div', {
    maxWidth: 'calc(100vw - (100vw - 1264px) / 2)',
    height: '100vh',

    '@media(max-width:600px)': {
      h1: {
        fontSize: '$6xl',
      },
      img: {
        display: 'none',
      },
    },
  }),
}
