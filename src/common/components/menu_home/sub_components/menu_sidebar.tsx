import { MenuSiderRoot } from '../styles'
import { MenuSiderBarInterface } from '../menu.interface'

const MenuSiderBar = ({ $openSideBar, children }: MenuSiderBarInterface): JSX.Element => {
  return (
    <MenuSiderRoot 
      $show={$openSideBar}
      data-testid='menu-sidebar-id-test'  
    >
      {children}
    </MenuSiderRoot>
  )
}

export default MenuSiderBar