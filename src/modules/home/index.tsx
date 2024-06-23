'use client'

import { HomeRoot } from './styles'
import { HomeInterface } from './home.interfaces'
import FloatButton from '@/common/components/float_button'
import Modal from '@/common/components/modal'
import useHome from './useHome'

const Home = ({data, children}: HomeInterface) => {
  const {showFloatButton, dataModal} = useHome(data)

  return (
    <HomeRoot>
      {showFloatButton && <FloatButton $type='basket' />}
      {dataModal.showModal && <Modal />}
      {children}
    </HomeRoot>
  )
}

export default Home

