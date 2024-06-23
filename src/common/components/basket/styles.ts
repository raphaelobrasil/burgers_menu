import styled, { css } from 'styled-components'
import { theme } from '@/theme/theme'
import { BasketInterface } from './basket.interface'

export const BasketRoot = styled.article<Pick<BasketInterface, '$isModal'>>`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${theme.color.primaryDark};
  position: relative;

  .basket-empty {
    height: 64px;
    box-sizing: border-box;
    padding: 24px;

    background-color: ${theme.color.primaryLight};

    font-weight: 400px;
    color: ${theme.color.secondaryLight};
  }

  .basket-header {
    height: 64px;
    padding: 14px 16px;
    box-sizing: border-box;


    position: relative;

    ${({ $isModal }) => $isModal && css`
      background-color: ${theme.color.primaryLight};
      border-bottom: 1px solid ${theme.color.quaternary};
    `};

    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);

      cursor: pointer;

      svg {
        width: 28px;
        height: 28px;
      }
    }

    h2 {
      display: flex;
      justify-content: ${({ $isModal }) => $isModal ? 'center' : 'start'};
      align-items: center;
      width: 100%;
      height: 100%;

      font-size: 18px;
      font-weight: 500;
      line-height: 21.09px;

      color: ${theme.color.secondaryDark};
    }
  }

  .basket-subtotal, .basket-total {
    display: flex;
    justify-content: space-between;
    color: ${theme.color.secondaryDark};
    border-top: 1px solid ${theme.color.bgPrimary};
  }

  .basket-subtotal {
    padding: 8px 16px;
    box-sizing: border-box;

    span {
      font-weight: 400;
    }

    output {
      font-weight: 500;
    }
  }

  .basket-total {
    font-size: 24px;
    line-height: 28.13px;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    span {
      font-weight: 300;
    }

    output {
      font-weight: 700;
    }
    
    ${({ $isModal }) => !$isModal && css`
      width: 100%;
      padding: 8px 16px 90px;
      box-sizing: border-box;
    `}

    ${({ $isModal }) => $isModal && css`
      width: calc(100% - 32px);
      padding: 8px 0 122px;
    `}
  }
`