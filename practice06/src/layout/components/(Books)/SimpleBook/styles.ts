import { styled } from '@stitches/react'

export const Strong = {
  bookTitle: styled('strong', {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'initial',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  }),
}
