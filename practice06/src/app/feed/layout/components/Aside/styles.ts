import { styled } from '@/layout/styles/stitches.config'
import Link from 'next/link'

export const A = {
  NavLink: styled(Link, {
    variants: {
      active: {
        false: {
          color: '$Gray-400',
          '&:hover': {
            color: '$Gray-100',
          },
          '.bar': {
            display: 'none',
          },
        },
        true: {
          color: '$Gray-100',
          '.bar': {
            position: 'absolute',
            width: '4px',
            height: '24px',
            left: '-20px',
            top: 'calc(50% - 24px/2)',
            background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
            'border-radius': '999px',
          },
        },
      },
    },
  }),
}
