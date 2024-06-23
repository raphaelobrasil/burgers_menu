'use client'

import { MenuRoot } from './styles'
import useMenu from './useMenu'
import MenuTop from './sub_components/menu_top'
import MenuOptions from './sub_components/menu_options'
import MenuSiderBar from './sub_components/menu_sidebar'

const MenuHome = () => {
  const { isOpen, showSideBar, titleMenu, changeTitle } = useMenu()

  return (
    <MenuRoot data-testid='menu-home-id-test' >      
      <MenuTop $showSideBar={showSideBar} $titleMenu={titleMenu} >
        <MenuOptions $changeTitle={changeTitle} />
      </MenuTop>
      <MenuSiderBar $openSideBar={isOpen}>
        <MenuOptions $changeTitle={changeTitle} />
      </MenuSiderBar>
    </MenuRoot>
  )
}

export default MenuHome