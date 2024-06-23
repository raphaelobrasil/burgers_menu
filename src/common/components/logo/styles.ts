'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const LogoRoot = styled.figure`
  position: relative;
  width: 100%;
  height: 150px;
  
  div {
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: 2;
    background: linear-gradient(90deg, #36231C 30.92%, rgba(54, 35, 28, 0) 50.56%, #36231C 66.88%);

    
    @media only screen and (min-width: ${theme.breakpoint.xlarge}px) {
      background: linear-gradient(90deg, #36231C 35.92%, rgba(54, 35, 28, 0) 50.56%, #36231C 60.88%);
    }
  
    
    @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
      background: linear-gradient(90deg, #36231C 2.92%, rgba(54, 35, 28, 0) 40.56%, #36231C 98.88%);
    }
  }

  .logo-burgers {
    inset: unset !important;
    max-width: 188px;
    max-height: 125px;
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .logo-banner {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 150px;
    background: url('/img/banner.jpeg') no-repeat;
    background-size: 901px 530px;
    background-position: 50% 57.5%; 
  }
`