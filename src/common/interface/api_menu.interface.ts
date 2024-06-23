export interface ApiImgInterface {
  image: string
}

interface ApiModifiersItemsInterface {
  name: string
  price: number
  id: number
}
export interface ApiModifiersInterface {
  name: string
  maxChoices: number
  minChoices: number
  items: ApiModifiersItemsInterface[]
}

export interface ApiItemsInterface {
  id: number
  description: string
  name: string
  price: number
  images?: ApiImgInterface[]
  modifiers?: ApiModifiersInterface[]
}
interface ApiSelectionsInterface {
  name: string
  images: ApiImgInterface[]
  items: ApiItemsInterface[]
}

export interface ApiMenuInterface {
  sections: ApiSelectionsInterface[]
}
