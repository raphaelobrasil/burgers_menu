'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const SearchRoot = styled.section`
  display: flex;
  min-width: 360px;
  max-width: 1024px;
  min-height: 40px;
  max-height: 44px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: ${theme.color.primaryLight};
  border: 1px solid ${theme.color.quinary};
  border-radius: 8px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 42px;
    max-width: 48px;
    padding: 10px 12px;
    box-sizing: border-box;

    svg {
      width: 100%;
      min-width: 16px;
      max-width: 20px;

      aspect-ratio: 1;
    }
  }

  input {
    all: unset;
    width: 100%;
    padding-right: 10px;
    color: ${theme.color.secondaryDark};
  }
  
  input::placeholder {
    color: ${theme.color.quinary};
  }
`