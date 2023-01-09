import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },

  'html, body': {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialised',
  },

  // '#__next': {
  //   maxWidth: '1264px',
  //   margin: '0 auto',
  // },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '.etc': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
