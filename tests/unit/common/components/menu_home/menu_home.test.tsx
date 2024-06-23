import { render, waitFor, fireEvent, renderHook, act } from '@testing-library/react'
import 'jest-styled-components'
import Menu from '@/common/components/menu_home'
import MenuOptions from '@/common/components/menu_home/sub_components/menu_options'
import useMenu from '@/common/components/menu_home/useMenu'
import { menuList } from '@/common/components/menu_home/menu.const'
import { theme } from '@/theme/theme'
import rgbToHex from '../../../../utils/rgbToHex'

describe('Menu home component - UI', () => {
  it('Should render menu top home with correct styles applied', async () => {
    const { getAllByText, getByTestId } = render(<Menu />)
    
    const menu = getByTestId('menu-home-id-test')
    const styles = window.getComputedStyle(menu)
    const backgroundColor = styles.getPropertyValue('background-color').trim()

    await waitFor(() => {
      menuList.forEach(({ title }) => expect(getAllByText(title).length).toBeGreaterThan(0))
      expect(rgbToHex(backgroundColor)).toBe(theme.color.tertiary)
    })
  })

  it('Should open and close menu siderbar home', async () => {
    const { getByTestId } = render(<Menu />)
        
    const menuSiderBar = getByTestId('menu-sidebar-id-test')
    const siderBarHiden = window.getComputedStyle(menuSiderBar)
    const displaySiderBarHiden = siderBarHiden.getPropertyValue('display')
    
    expect(displaySiderBarHiden).toBe('none')

    const navbarToggle = getByTestId('navbar-toggle-id-test')
    fireEvent.click(navbarToggle)

   await waitFor(() => {
      const siderBarOpen = window.getComputedStyle(menuSiderBar)
      const displaySiderBarOpen = siderBarOpen.getPropertyValue('display')
    
      expect(displaySiderBarOpen).toBe('flex')
    })

    
    fireEvent.click(navbarToggle)

    await waitFor(() => {
      const siderBarClose = window.getComputedStyle(menuSiderBar)
      const displaySiderBarClose = siderBarClose.getPropertyValue('display')
    
      expect(displaySiderBarClose).toBe('none')
    })
  })

  it('Should render menu options and function to change the title must be clickable', async () => {
    const mockChangeTitle = jest.fn()
    const { getAllByText, container } = render(<MenuOptions $changeTitle={mockChangeTitle} />)
    
    const [firstOption] = container.querySelectorAll('li')
    fireEvent.click(firstOption)

    await waitFor(() => {
      menuList.forEach(({ title }) => expect(getAllByText(title).length).toBeGreaterThan(0))
      expect(mockChangeTitle).toHaveBeenCalledTimes(1)
    })
  })  

  
  it('Should call the useMenu custom hook, and execute its functions', async () => {
    const { result } = renderHook(() => useMenu())
    const { changeTitle, showSideBar } = result.current

    expect(result.current.titleMenu).toBe(menuList[0].title)

    act(() => {
      changeTitle(menuList[1].title)
    })

    expect(result.current.titleMenu).toBe(menuList[1].title)
    expect(result.current.isOpen).toBe(false)

    act(() => {
      showSideBar()
    })
    expect(result.current.isOpen).toBe(true)
    
    act(() => {
      window.innerWidth = 800
      window.dispatchEvent(new Event('resize'))
    })
    
    expect(result.current.isOpen).toBe(false)
  })  
  
})
