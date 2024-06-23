'use client'

import { ContentMenu } from '../styles'
import MenuTab from '@/common/components/menu_tab'
import CarteList from './menu_carte_list'

const Menu = () => {
  return (
    <ContentMenu>
      <MenuTab />
      <CarteList />
    </ContentMenu>
  )
}

export default Menu