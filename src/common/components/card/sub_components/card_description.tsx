import { OnlyChildrenInterface } from '../card.interfaces'
import { DescriptionStyled } from '../styles'

const CardDescription = ({ children }: OnlyChildrenInterface): JSX.Element => {
  return (
    <DescriptionStyled>
      {children}
    </DescriptionStyled>
  )
}

export default CardDescription