import { CounterButtonInterface } from '../counter_dot.interface'
import * as S from '../styles'
const CounterButton = ({ $isUpButton, $disable, $isLarge, $actionClick }: CounterButtonInterface): JSX.Element => {
  return (
    <S.CounterBurron 
      $disable={$disable} 
      $isLarge={$isLarge} 
      data-testid={`counter-button-id-test-${$isUpButton ? 'increase' : 'decrease' }`}
      onClick={$actionClick}
    >
      {
        $isUpButton && <div className='counter-dot-increase' />
      }
      {
        !$isUpButton && <div />
      }
    </S.CounterBurron>
  )
}

export default CounterButton