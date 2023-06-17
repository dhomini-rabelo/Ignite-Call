import { styled } from '@/layout/styles/stitches.config'

export const Button = {
  category: styled('button', {
    variants: {
      active: {
        true: {
          background: '$Purple-200',
          color: '$Gray-100',
          border: '1px solid $Purple-200',
        },
        false: {
          background: 'transparent',
          color: '$Purple-100',
          border: '1px solid $Purple-100',
        },
      },
    },
  }),
}
