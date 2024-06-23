'use client'

import { useState, useEffect } from 'react'
import useStoreData from '@/common/hooks/useStoreData'
import useStoreModal from '@/common/hooks/useStoreModal'
import useResize from '@/common/hooks/useResize'
import { theme } from '@/theme/theme'
import { ApiMenuInterface } from '@/common/interface/api_menu.interface'
import useStoreBasket from '@/common/hooks/useStoreBasket'

const useHome = (data: ApiMenuInterface) => {
  const [showFloatButton, setShowFloatButton] = useState<boolean>(false)
  useStoreData(data)
  const { dataModal } = useStoreModal()
  const { dataBasket } = useStoreBasket()
  const handleResize = () => {
    const isMobile = window.innerWidth < theme.breakpoint.mobile
    setShowFloatButton(isMobile)
  }
  
  useResize(handleResize, dataBasket)

  useEffect(() => {
    const initPage = window.innerWidth < theme.breakpoint.mobile
    setShowFloatButton(initPage)
  }, [])

  return {
    dataModal,
    showFloatButton
  }
}

export default useHome