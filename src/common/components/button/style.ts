'use client'

import styled, { css } from 'styled-components'
import { theme } from '@/theme/theme'
import { ButtonInterface } from './button.interface'

export const ButtonRoot = styled.button<Pick<ButtonInterface, '$disable'>>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  min-width: 100%;
  max-width: 432px;
  height: 48px;
  max-width: 48px;
  padding: 4px 24px;
  background-color: ${theme.color.tertiary};
  border-radius: 40px;

  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.09px;
  color: ${theme.color.primaryLight};

  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${theme.color.quaternary};
  }

  ${({ $disable }) => $disable && css`
    cursor: not-allowed;
    pointer-events: none;

    background-color: ${theme.color.quaternary};
    color: ${theme.color.secondaryLightest};
  `}
`
