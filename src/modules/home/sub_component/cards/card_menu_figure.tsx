import { AmountCardMenuInterface } from '../../home.interfaces'
import Card from '@/common/components/card'
import Tag from '@/common/components/tag'

const CardFigure = ({ description, name, $onClick, price, countTag, images  }: AmountCardMenuInterface) => {
  return ( 
    <Card.RootMenu $onClick={$onClick}>
      <Card.ContainerFigure
        $src={images?.src ?? ''}
        $alt={images?.alt ?? ''}
      >
        <Card.CardHeader $title={name} >
          {
            countTag && <Tag>{countTag}</Tag>
          }
        </Card.CardHeader>
        {
          !!description && (
            <Card.CardDescription>
              {description}
            </Card.CardDescription>
          )
        }
        <Card.PriceLabel $isBold>
          R$ {price}
        </Card.PriceLabel>
      </Card.ContainerFigure>
    </Card.RootMenu>
  )
}

export default CardFigure