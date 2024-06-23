'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'
import { CardHeaderInterface, CardPriceLabelInterface, CardDefaultAsideInterface } from './card.interfaces'

const CardRoot = styled.article`
  height: fit-content;
  box-sizing: border-box;
  background-color: ${theme.color.primaryLight};

  &:hover {
    background-color: ${theme.color.primaryDark};
  }
`
export const MenuRoot = styled(CardRoot)`
  padding: ${theme.space.medium};
  cursor: pointer;

  section {  
    min-height: 85px;
    max-height: 85px;
  }
`
export const OptionRoot = styled(CardRoot)`
  padding: ${theme.space.medium} ${theme.space.large};
`
export const CountRoot = styled(CardRoot)`
  padding: ${theme.space.small} ${theme.space.medium};
`
export const CardTitle = styled.header<Pick<CardHeaderInterface, '$isNormal'>>`
  display: flex;
  column-gap: 8px;

  h3 {
    height: 20px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: ${theme.color.secondaryDark};
    font-weight: ${({ $isNormal }) => $isNormal ? 400 : 500};
  }
`

export const GridFigure = styled.figure`
  display: flex;
  justify-content: space-between;
  min-height: 85px;
  max-height: 85px;
  column-gap: 16px;
  
  figcaption {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
  
  aside {
    position: relative;
    min-width: 128px;
    max-width: 128px;

    .imgMenu {
      border-radius: 4px;
      object-fit: cover;
      object-position: center;
    }
  }
`

export const GridDefault = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
`

export const PriceStyled = styled.output<Pick<CardPriceLabelInterface, '$altColor' | '$isBold' | '$isSum'>>`
  ${({ $isSum }) => $isSum && `color: ${theme.color.secondaryDark};`}
  ${({ $isSum, $altColor }) => (!$isSum && $altColor) && `color: ${theme.color.secondaryLightest};`}
  ${({ $isSum, $altColor }) => (!$isSum && !$altColor) && `color: ${theme.color.secondaryLight};`}
  font-weight: ${({ $isBold }) => $isBold ? 500 : 400};
`

export const DescriptionStyled = styled.p`
  display: -webkit-box;
  min-height: 38px;
  max-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 300;
  color: ${theme.color.secondaryLight};
`


export const GridDefaultContent = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`


export const GridDefaultAside = styled.section<Pick<CardDefaultAsideInterface, '$initTop'>>`
  display: flex;
  align-items: ${({ $initTop }) => $initTop ? 'start' : 'center'};
`