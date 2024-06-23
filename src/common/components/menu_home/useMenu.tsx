import { useState } from 'react'
import useResize from '@/common/hooks/useResize'
import { theme } from '@/theme/theme'
import { menuList } from './menu.const'

const useMenu = () => {
  const [openSiderBar, setOpenSiderBar] = useState<boolean>(false)
  const [titleMenu, setTitleMenu] = useState<string>(menuList[0].title)

  const handleResize = () => {
    if (window.innerWidth > theme.breakpoint.mobile) {
      setOpenSiderBar(false)
    }
  }
  
  useResize(handleResize)

  const showSideBar = () => setOpenSiderBar(prev => !prev)
  const changeTitle = (title: string) => setTitleMenu(title)

  return {
    isOpen: openSiderBar,
    showSideBar,
    titleMenu,
    changeTitle
  }
}

export default useMenu