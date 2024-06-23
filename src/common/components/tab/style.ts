'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const TagRoot = styled.figure`
  width: 104px;
  height: 146px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  aside {    
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 74px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-sizing: border-box;

    .imgTab {
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
  
  figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    box-sizing: border-box;
    padding: 16px 0 8px;
    font-weight: 600;
  }

  transition-duration: 0.2s;
  &:hover {
    aside {
      border: 2px solid ${theme.color.tertiary};

      .imgTab {
        max-width: 70px;
        max-height: 70px;
        transform: translate(0.4px, 0.4px);
      }
    }

    figcaption {
      overflow: hidden;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 96px;
        height: 2px;
        background-color: ${theme.color.tertiary};
      }
    }
  }
`