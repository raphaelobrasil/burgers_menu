'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const MenuRoot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${theme.color.tertiary};

  a {
    all: unset;
  }

  ul {
    display: flex;
  }

  ul > li {    
    width: 232px;
    height: 52px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23.44px;
    border-bottom: 5px solid ${theme.color.tertiary};
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
      border-bottom-color: ${theme.color.primaryLight};
    }    
  }

  h1, li {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: ${theme.color.primaryLight};
    user-select: none; 
  }  
`

export const MenuTopRoot = styled.nav`
  .navbar-toggle, h1 {
    display: none;
  }

  .navbar-toggle {
    position: absolute;
    right: 22px;
    top: 22px;
    cursor: pointer;
  }

  .navbar-toggle > svg {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
  }

  h1 {
    width: 100%;
    height: 64px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
  }

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    .navbar-toggle, h1 {
      display: flex;
    }
    ul {
      display: none;
    }
  }
`

export const MenuSiderRoot = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => $show ? 'flex' : 'none'};
  position: absolute;
  z-index: 5;
  right: 0;
  top: 60px;
  width: 232px;
  height: calc(100vh - 60px);
  background-color: ${theme.color.tertiary};

  ul {
    flex-direction: column;
  }
` 