import { HeaderRoot } from './styles'
import Menu from '@/common/components/menu_home'
import Logo from '@/common/components/logo'

const Header = () => {
  return (
    <HeaderRoot> 
      <Menu />
      <Logo />
    </HeaderRoot>
  )
}

export default Header