import { OnlyChildrenInterface } from '../card.interfaces'
import { CountRoot } from '../styles'

const CardCount = ({ children }: OnlyChildrenInterface): JSX.Element => {
  return (
    <CountRoot>
      {children}
    </CountRoot>
  )
}

export default CardCount