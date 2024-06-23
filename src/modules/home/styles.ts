'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const HomeRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.bgPrimary};

  
  .field-search, .field-content {
    width: 100%;
    max-width: 1024px;
    box-sizing: border-box;
  }

  .field-search {
    margin: 16px 0;
  }

  .field-content {
    display: flex;
    column-gap: 24px;
    background-color: ${theme.color.primaryDark};
    margin-bottom: 24px;
    padding: 32px 40px;
  }

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    background-color: ${theme.color.primaryLight};

    .field-search {
      margin: 0;
      padding: 16px;
    }

    .field-content {
      background-color: ${theme.color.primaryLight};
      padding: 0;
      margin: 0;
    }
  }
`

export const ContentMenu = styled.section`
  width: 100%;
  max-width: 600px;
  background-color: ${theme.color.primaryLight};
  box-shadow: 0px 2px 14px 0px #00000024;

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    all: unset;
    width: 100%;
  }
`

export const ContentBasket = styled.section`
  width: 100%;
  max-width: 320px;
  height: fit-content;
  background-color: ${theme.color.primaryLight};
  box-shadow: 0px 2px 14px 0px #00000026;

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    display: none;
  }
`