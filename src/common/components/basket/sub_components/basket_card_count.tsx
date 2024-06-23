import Card from '@/common/components/card'
import CounterDot from '@/common/components/counter_dot'
import { BasketCardCountInterface } from '../basket.interface'

const CardCount = ({ $name, $modifier, $count, $decrease, $increase, $price }: BasketCardCountInterface) => {
  return (
    <Card.RootCount>          
      <Card.ContainerDefault>
        <Card.DefaultContent>
          <Card.CardHeader $title={$name} $isNormal />
          {
            ($modifier?.name && $modifier?.price) && (
              <Card.PriceLabel $altColor>
                {$modifier.name} (+R$ {$modifier.price})
              </Card.PriceLabel>
            )
          }
          <CounterDot.Root>
            <CounterDot.Button $disable={$count === 0} $actionClick={$decrease} />
            <CounterDot.Label>{$count}</CounterDot.Label>
            <CounterDot.Button $actionClick={$increase} $isUpButton />
          </CounterDot.Root>
        </Card.DefaultContent>
        <Card.DefaultAside $initTop>
          <Card.PriceLabel $isSum $isBold>
            R$ {$price}
          </Card.PriceLabel>
        </Card.DefaultAside>
      </Card.ContainerDefault>
    </Card.RootCount>
  )
}

export default CardCount