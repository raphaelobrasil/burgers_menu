import { CardPriceLabelInterface } from '../card.interfaces'
import { PriceStyled } from '../styles'

const CardPriceLabel = ({ children, $altColor, $isBold, $isSum }: CardPriceLabelInterface): JSX.Element => {
  return (
    <PriceStyled
      $altColor={$altColor}
      $isBold={$isBold}
      $isSum={$isSum}
      data-testid='card-label-price-id-test'
    >
      {children}
    </PriceStyled>
  )
}

export default CardPriceLabel