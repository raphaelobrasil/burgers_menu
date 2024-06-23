'use client'

import styled from 'styled-components'

export const MenuTabRoot = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 16px 24px;

  a, li {
    all: unset;
  }

  ul {
    display: flex;
  }
  
  a {
    cursor: pointer;
  }
`
