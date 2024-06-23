import Card from '@/common/components/card'
import Radio from '@/common/components/radio'
import { CardOptionModalInterface } from '../modal.interface'

const CardOption = ({ $action, $keyItem, $nameItem, $price, $title }: CardOptionModalInterface) => {
  return (
    <Card.RootOption>
      <Card.ContainerDefault>
        <Card.DefaultContent>
          <Card.CardHeader $title={$nameItem} />
          <Card.PriceLabel>
            R$ {$price}
          </Card.PriceLabel>
        </Card.DefaultContent>
        <Card.DefaultAside>
          <Radio 
            $id={`radio-id-${$title}`} 
            $name={`radio-name-${$title}`} 
            $value={`${$keyItem}`}
            $findOptionSelected={$action} 
          />
        </Card.DefaultAside>
      </Card.ContainerDefault>
    </Card.RootOption>
  )
}

export default CardOption