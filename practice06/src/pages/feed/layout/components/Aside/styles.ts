import { styled } from '@/layout/styles/stitches.config'

export const Div = {
  bar: styled('div', {
    position: 'absolute',
    width: '4px',
    height: '24px',
    left: '-20px',
    top: 'calc(50 % - 24px / 2)',
    background: 'linear - gradient(180deg, #7FD1CC 0 %, #9694F5 100 %)',
    'border- radius': '999px',
  }),
}
