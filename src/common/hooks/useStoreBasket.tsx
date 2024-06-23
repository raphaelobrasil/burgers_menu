import { useSelector, useDispatch } from 'react-redux'
import { updateStore } from '@/common/redux/slices/store_basket'
import { stateBasket, UseStoreBasketInterface, StoreBasketInterface } from '@/common/interface/store_basket.interface'
import { StoreDataInterface } from '@/common/interface/store_data.interface'
import findPriceOption from '@/common/utils/findPriceOption'
import registerCount from '@/common/utils/registerCount'
import findModifier from '@/common/utils/findModifier'
import useStoreData from '@/common/hooks/useStoreData'
import deepClone from '@/common/utils/deepClone'

const useStoreBasket = (): UseStoreBasketInterface => {
  const dataBasket = useSelector((state: stateBasket) => state.storeBasket)
  const { updateValue } = useStoreData()
  const dispatch = useDispatch()

  const updateBasket = (data: StoreBasketInterface[]) => {
    dispatch(updateStore([...data]))
  }

  const addToBasket = (
    keyCarte: number, 
    keyOption: number, 
    count: number, 
    oldDataStore: StoreDataInterface[],  
    oldDataBasket: StoreBasketInterface[]
  ) => {
    const option = oldDataStore[keyCarte]?.carte[keyOption]
    const store = {
      price: findPriceOption(option) * count,
      modifier: findModifier(option),
      count, 
      name: option.name,
      id: dataBasket.length + 1,
      keyCarte,
      keyOption,
    } as StoreBasketInterface
    updateBasket([...oldDataBasket, store])
    updateValue(registerCount(1, oldDataStore, keyCarte, keyOption))
  }

  const increaseToBasket = (
    key: number, 
    oldDataBasket: StoreBasketInterface[],
    oldDataStore: StoreDataInterface[]
  ) => {
    const newData = deepClone(oldDataBasket)

    if(newData[key].count === 0) {
      const newStore = deepClone(oldDataStore)
      newStore[newData[key].keyCarte].carte[newData[key].keyOption].countTag = 1
      updateValue([...newStore])
    }

    newData[key].count = newData[key].count + 1
    if (newData[key].modifier?.price !== undefined) {
      newData[key].price = (newData[key].modifier?.price ?? 0) * newData[key].count
    } else {
      newData[key].price = oldDataStore[newData[key].keyCarte].carte[newData[key].keyOption].price * newData[key].count
    }
    updateBasket([...newData])
  }

  
  const decreaseToBasket = (
    key: number, 
    oldDataBasket: StoreBasketInterface[],
    oldDataStore: StoreDataInterface[]
  ) => {
    const newData = deepClone(oldDataBasket)

    if (newData[key].count === 1) {
      const newStore = deepClone(oldDataStore)
      const oldCount = newStore[newData[key].keyCarte].carte[newData[key].keyOption].countTag ?? 1
      newStore[newData[key].keyCarte].carte[newData[key].keyOption].countTag =  oldCount === 1 ? undefined : oldCount - 1
      updateValue([...newStore])
    } 

    newData[key].count = newData[key].count - 1
    if (newData[key].modifier?.price !== undefined) {
      newData[key].price = (newData[key].modifier?.price ?? 0) * newData[key].count
    } else {
      newData[key].price = oldDataStore[newData[key].keyCarte].carte[newData[key].keyOption].price * newData[key].count
    }
    updateBasket([...newData])
  }

  return {
    dataBasket,
    addToBasket,
    decreaseToBasket,
    increaseToBasket    
  }
}

export default useStoreBasket