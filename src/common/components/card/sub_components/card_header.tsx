import { CardTitle } from '../styles'
import { CardHeaderInterface } from '../card.interfaces'

const CardHeader = ({children, $title, $isNormal}: CardHeaderInterface ): JSX.Element => {
  return (
    <CardTitle
      $isNormal={$isNormal}
      data-testid='card-header-id-test'
    >
      {children}
      <h3>{$title}</h3>
    </CardTitle>
  )
}

export default CardHeader