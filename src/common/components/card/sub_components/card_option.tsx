import { OnlyChildrenInterface } from '../card.interfaces'
import { OptionRoot } from '../styles'

const CardOption = ({ children }: OnlyChildrenInterface): JSX.Element => {
  return (
    <OptionRoot>
      {children}
    </OptionRoot>
  )
}

export default CardOption