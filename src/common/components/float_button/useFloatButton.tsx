import { useState } from 'react'
import useStoreModal from '@/common/hooks/useStoreModal'
import useStoreData from '@/common/hooks/useStoreData'
import useStoreBasket from '@/common/hooks/useStoreBasket'
import { FloatButtonInterface } from './float_button.interface'
import findPriceOption from '@/common/utils/findPriceOption'

const initialCount = 1

const useFloatButton = ({ $type }: FloatButtonInterface) => {
  const [count, setCount] = useState<number>(initialCount)
  const { dataModal, closeModal, openModalBasket } = useStoreModal()
  const { data } = useStoreData()
  const { dataBasket, addToBasket } = useStoreBasket()
  const option = data[dataModal.keyCarte]?.carte[dataModal.keyOption]
  const isDisable = 
    option?.modifiers !== undefined && 
    option?.modifiers.every(item => item.selectsKeyItem === undefined) &&
    $type === 'price'

  const showButton = $type === 'basket' ? !!dataBasket[0] : true

  const actionPrice = () => {
    addToBasket(dataModal.keyCarte, dataModal.keyOption, count, data, dataBasket)
    closeModal()
  }
  
  const increaseCount = () => setCount(prev => ++prev)
  const decreaseCount = () => setCount(prev => --prev)

  const label = {
    price: `Add to order • R$ ${(findPriceOption(option) * count).toFixed(2)}`,
    basket: `Your basket • ${dataBasket.length === 1 ? `1 item` : `${dataBasket.length} items`}`,
    checkout: 'Checkout now'
  }

  const actions = {
    price: actionPrice,
    basket: openModalBasket,
    checkout: () => console.log('checkout now')
  }
  return {
    showButton, 
    count, 
    decreaseCount, 
    increaseCount, 
    action: actions[$type],
    isDisable, 
    label: label[$type]
  }
}

export default useFloatButton