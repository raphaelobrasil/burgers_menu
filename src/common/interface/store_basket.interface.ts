import { StoreDataInterface } from '@/common/interface/store_data.interface'

export interface ModifierBasketInterface {
  name: string
  price: number
}

export interface StoreBasketInterface {
  price: number
  modifier?: ModifierBasketInterface
  count: number
  name: string
  id: number
  keyCarte: number
  keyOption: number
}

export type stateBasket = { storeBasket: StoreBasketInterface[] }

export interface UseStoreBasketInterface {
  addToBasket: (
    keyCarte: number, 
    keyOption: number, 
    count: number, 
    oldDataStore: StoreDataInterface[],  
    oldDataBasket: StoreBasketInterface[]
  ) => void
  dataBasket: StoreBasketInterface[]
  increaseToBasket: (
    key: number, 
    oldDataBasket: StoreBasketInterface[],
    oldDataStore: StoreDataInterface[]
  ) => void
  decreaseToBasket: (
    key: number, 
    oldDataBasket: StoreBasketInterface[],
    oldDataStore: StoreDataInterface[]
  ) => void
}