import React from 'react'
import * as S from '../styles'
import { OnlyChildrenInterface } from '../card.interfaces'

const GridDefaultContent = ({ children }: OnlyChildrenInterface): JSX.Element => {
  return (
    <S.GridDefaultContent>
      {children}
    </S.GridDefaultContent>
  )
}

export default GridDefaultContent