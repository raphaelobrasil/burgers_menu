'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  appearance: none;
  border: 3.5px solid ${theme.color.secondaryLightest};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    position: relative;
    border-color: ${theme.color.tertiary};
    background-color: ${theme.color.tertiary};

    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background-color: ${theme.color.primaryLight};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;