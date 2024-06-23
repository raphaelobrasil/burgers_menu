'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const FooterRoot = styled.footer`
  display: none;
  width: 100%;
  height: 148px;
  background-color: ${theme.color.primaryDark};

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    display: flex;
  }
`

export const AllergyRoot = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  border-top: 1px solid ${theme.color.bgPrimary}; 
  border-bottom: 1px solid ${theme.color.bgPrimary}; 
  padding: 24px;
  
  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20px;
    background-color: ${theme.color.primaryLight};
    border-radius: 8px;
    
    color: ${theme.color.tertiary};
    font-weight: 700;
    text-decoration: underline; 

    cursor: pointer;
  }
`