import { ApiModifiersInterface } from '@/common/interface/api_menu.interface'

export interface ModifiersInterface extends ApiModifiersInterface {
  selectsKeyItem?: number
}

export interface CarteItemsInterface {
  name: string
  price: number
  description: string
  images?: {
    src: string
    alt: string
  }
  id: number
  modifiers?: ModifiersInterface[]
  countTag?: number
}

export interface StoreDataInterface {
  titleGroup: string
  showCarte?: boolean
  src: string
  carte: CarteItemsInterface[]
}

export type stateType = { storeData: StoreDataInterface[] }

export interface UseStoreDataInterface {
  updateValue: (data: StoreDataInterface[]) => void
  data: StoreDataInterface[]
}