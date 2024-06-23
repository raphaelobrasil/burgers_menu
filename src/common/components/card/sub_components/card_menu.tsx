import { MenuRoot } from '../styles'
import { CardMenuInterface } from '../card.interfaces'

const CardMenu = ({ children, $onClick }: CardMenuInterface): JSX.Element => {
  return (
    <MenuRoot
      onClick={$onClick}
      data-testid='card-menu-id-test'
    >
      {children}
    </MenuRoot>
  )
}

export default CardMenu