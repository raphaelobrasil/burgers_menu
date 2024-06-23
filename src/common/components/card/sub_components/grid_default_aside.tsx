import { CardDefaultAsideInterface } from '../card.interfaces'
import * as S from '../styles'

const GridDefaultAside = ({ children, $initTop }: CardDefaultAsideInterface): JSX.Element => {
  return (
    <S.GridDefaultAside 
      $initTop={$initTop}
      data-testid='card-default-aside-id-test'
    >
      {children}
    </S.GridDefaultAside>
  )
}

export default GridDefaultAside