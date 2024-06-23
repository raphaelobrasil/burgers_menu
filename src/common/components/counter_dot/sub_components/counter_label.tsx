import { CounterLabelInterface } from '../counter_dot.interface'
import * as S from '../styles'
const CounterLabel = ({ children, $isLarge }: CounterLabelInterface): JSX.Element => {
  return (
    <S.CounterLabel $isLarge={$isLarge}>
      {children}
    </S.CounterLabel>
  )
}

export default CounterLabel