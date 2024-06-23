import { FloatButtonRoot } from './style'
import Button from '@/common/components/button'
import CounterDot from '@/common/components/counter_dot'
import { FloatButtonInterface } from './float_button.interface'
import useFloatButton from './useFloatButton'

const initialCount = 1

const FloatButton = ({ $type }: FloatButtonInterface) => {
  const { showButton, count, decreaseCount, increaseCount, action, isDisable, label } = useFloatButton({$type})

  return (
    <FloatButtonRoot id='float-button' $type={$type} $show={showButton}>
      {
        $type === 'price' && (
          <CounterDot.Root $isLarge>
            <CounterDot.Button $isLarge $disable={count === initialCount} $actionClick={decreaseCount}/>
            <CounterDot.Label $isLarge>{count}</CounterDot.Label>
            <CounterDot.Button $isLarge $isUpButton $actionClick={increaseCount}/>
          </CounterDot.Root>
        )
      }
      <Button $action={action} $disable={isDisable} >{label}</Button>
    </FloatButtonRoot>
  )
}

export default FloatButton