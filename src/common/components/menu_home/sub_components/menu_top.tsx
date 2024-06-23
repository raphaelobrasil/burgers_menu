import { MenuTopRoot } from '../styles'
import IconKebabs from '../icon'
import { MenuTopInterface } from '../menu.interface'

const MenuTop = ({ $showSideBar, children, $titleMenu }: MenuTopInterface): JSX.Element => {
  return (  
    <MenuTopRoot>
      <ul>
        {children}
      </ul>
      <h1>{$titleMenu}</h1>
      <div 
        className="navbar-toggle"
        onClick={$showSideBar}
        data-testid='navbar-toggle-id-test'
      >
        <IconKebabs />
      </div>
    </MenuTopRoot>
  )
}

export default MenuTop