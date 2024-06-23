'use client'

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`

  * {
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        width: 2px;
      }

      ::-webkit-scrollbar-track {
        background: ${theme.color.bgPrimary};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.color.tertiary};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.color.tertiary};
      }
  }

  body {
    background-color: ${theme.color.primaryLight};
    color: ${theme.secondaryDark};
    font-size: 16px;
    line-height: 18.75px;
    margin: 0;
    padding: 0;

    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, figure, ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle