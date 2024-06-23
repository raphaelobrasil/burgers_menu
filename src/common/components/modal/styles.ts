'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'
import { StyleModalContainerInterface } from './modal.interface'

export const ProviderStories = styled.div`
  #backgroundModal {
    position: relative;
  }
`

export const ModalRoot = styled.div`
  position: relative;
  z-index: 6;
  top: 0;
  left: 0;
`


export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
  box-sizing: border-box;

  background-color: ${theme.color.secondaryDark + theme.transparency.percent65};
`

export const ModalContainer = styled.div<StyleModalContainerInterface>`
  width: 480px;
  ${({ $emptyBg, $emptyOptions }) => (!$emptyBg && !$emptyOptions) && 'height: 85%;'}
  ${({ $emptyBg, $emptyOptions }) => ($emptyBg && !$emptyOptions) && 'height: 65%;'}
  ${({ $emptyBg, $emptyOptions }) => ($emptyBg && $emptyOptions) && 'height: 45%;'}
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${theme.color.primaryLight};

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    width: 100vw;
    height: ${({ $emptyBg }) => $emptyBg ? '40vh' : '100vh'};
    top: ${({ $emptyBg }) => $emptyBg ? 'calc(100% - 40vh)' : '0'};
  }
` 

export const ModalContentRoot = styled.article<StyleModalContainerInterface>`
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  #float-button {
    display: flex;
  }

  .modal-content-figure {
    width: 480px;
    position: relative;

    ${({ $emptyBg }) => $emptyBg && "padding-top: 64px;" }
    ${({ $emptyOptions }) => $emptyOptions && "padding-bottom: 122px;" }

    span {
      position: absolute;
      top: 48px;
      right: 16px;
      z-index: 1;

      ${({ $emptyBg }) => $emptyBg && "top: 18px;" }

      cursor: pointer;

      svg {
        width: 28px;
        height: 28px;        
      }
    }

    .modal-content-img {
      max-height: 320px;
      object-fit: cover;
      object-position: center;
      position: relative !important;
    }

    figcaption {
      min-height: 106px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      padding: 16px;
      box-sizing: border-box;

      h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28.13px;
        color: ${theme.color.secondaryDark};
      }

      p {
        font-weight: 400;
        color: ${theme.color.secondaryLight};
      }      
    }

    
    @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
      width: 100%;
    }
  }
`

export const ListCardOption = styled.article`  
  padding-bottom: 122px;

  .list-card-option-header {
    height: 68px;
    padding: 16px 24px;
    box-sizing: border-box;
    background-color: ${theme.color.primaryDark};

    h3 {
      font-weight: 700;
      font-size: 16px;
      color: ${theme.color.secondaryLight};
    }

    p {
      font-weight: 400;
      color: ${theme.color.secondaryLightest};
    }
  }
`