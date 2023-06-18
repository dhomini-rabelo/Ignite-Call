import { styled } from '@/layout/styles/stitches.config'

export const Div = {
  container: styled('div', {
    'z-index': 1,
    minHeight: '100vh',
    minWidth: '100vw',
    background: 'rgba(0, 0, 0, 0.6)',
  }),
  popup: styled('div', {
    'box-shadow': '-4px 0px 30px rgba(0, 0, 0, 0.5)',
    'z-index': 2,
    width: '660px',
    top: '0px',
    right: '0px',
    minHeight: '100vh',
    background: '$Gray-800',
    padding: '1.5rem 3rem',

    '.x-content': {
      justifyContent: 'flex-end',
    },

    '.book': {
      padding: '1.5rem 2rem 1rem 2rem',
    },
    '.book-data': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  }),
}
