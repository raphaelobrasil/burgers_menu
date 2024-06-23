import { OnlyChildrenInterface } from '../card.interfaces'
import { GridDefault } from '../styles'

const CardGridDefault = ({ children }: OnlyChildrenInterface): JSX.Element => {
  return (
    <GridDefault>
      {children}
    </GridDefault>
  )
}

export default CardGridDefault