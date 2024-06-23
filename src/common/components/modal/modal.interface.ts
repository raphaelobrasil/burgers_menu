import { CarteItemsInterface } from "@/common/interface/store_data.interface"

export interface CardOptionModalInterface {
  $keyItem: number
  $nameItem: string
  $price: number
  $title: string
  $action: (value: string) => void
}

export interface ModalContentHeaderInterface {
  $src: string
  $alt: string
  $title: string
  $description: string
  $hasImg: boolean
}

export interface ListCardOptionsInterface {
  option: CarteItemsInterface
  $action: (value: string, keyModifier: number) => void
}

export interface StyleModalContainerInterface { 
  $emptyBg?: boolean
  $emptyOptions?: boolean
}