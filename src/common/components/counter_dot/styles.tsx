'use client'

import styled, { css } from 'styled-components'
import { CounterRootInterface, CounterButtonInterface, CounterLabelInterface } from './counter_dot.interface'
import { theme } from '@/theme/theme'

export const CounterRoot = styled.article<Pick<CounterRootInterface, '$isLarge'>>`
  max-width: ${({ $isLarge }) => $isLarge ? 144 : 78}px;
  display: flex;
  justify-content: space-between;
  column-gap: 4px;
`

export const CounterBurron = styled.div<Pick<CounterButtonInterface, '$disable' | '$isLarge'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $isLarge }) => $isLarge ? 32 : 20}px;
  min-height: ${({ $isLarge }) => $isLarge ? 32 : 20}px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${({ $disable }) => $disable ? theme.color.quaternary : theme.color.tertiary};
  position: relative;
  cursor: pointer;

  div {
    width: ${({ $isLarge }) => $isLarge ? 18 : 12}px;
    height: 3px;
    background-color: ${({ $disable }) => $disable ? theme.color.secondaryLightest : theme.color.primaryLight};
    border-radius: 4px;
  }
  
  .counter-dot-increase::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: ${({ $isLarge }) => $isLarge ? 18 : 12}px;
    background-color: ${({ $disable }) => $disable ? theme.color.secondaryLightest : theme.color.primaryLight};
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }

  ${({ $disable }) => $disable && css`
    cursor: not-allowed;
    pointer-events: none;

    background-color: ${theme.color.quaternary};
    color: ${theme.color.secondaryLightest};
  `}
`

export const CounterLabel = styled.span<Pick<CounterLabelInterface, '$isLarge'>>`
  text-align: center;
  color: ${theme.color.secondaryDark};
  ${({ $isLarge }) => 
    $isLarge
      ? css`
        width: 48px;
        font-weight: 600;
        font-size: 24px;
        line-height: 28.64px;
      `
      : css`
        width: 30px;
        font-weight: 700;
      ` 
  }
`