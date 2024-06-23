import * as S from '../styles'
import { CounterRootInterface } from '../counter_dot.interface'

const CounterRoot = ({ children, $isLarge }: CounterRootInterface): JSX.Element => {
  return (
    <S.CounterRoot $isLarge={$isLarge}>
      {children}
    </S.CounterRoot>
  )
}

export default CounterRoot