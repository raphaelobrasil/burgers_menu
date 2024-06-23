import Search from '@/common/components/search'
import Menu from './content_menu'
import Basket from './content_basket'

const Content = () => {
  return (
    <>
      <section className='field-search'>
        <Search />
      </section>
      <section className='field-content'>
        <Menu />
        <Basket />
      </section>
    </>
  )
}

export default Content

