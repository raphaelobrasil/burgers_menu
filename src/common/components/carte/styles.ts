'use client'

import styled, { css } from 'styled-components'
import { theme } from '@/theme/theme'
import { CarteInterface } from './carte.interface'

export const CarteRoot = styled.article<Pick<CarteInterface, '$open'>>`
  display: flex;
  flex-direction: column;
  width: 100%;

  .header-carte {
    display: flex;
    justify-content: space-between;
    padding: 32px 16px 12px;

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 28.13px;
      color: ${theme.color.secondaryDark};
    }

    span {
      width: 24px;
      aspect-ratio: 1;
      box-sizing: border-box;
      cursor: pointer;

      ${({ $open }) => !$open && css`
        svg {
          transition-duration: 0.2s;
          transform: rotate(180deg);
          transform-origin: center;
        }
      `}

    }
  }

  .section-carte {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`