import { ApiMenuInterface } from '@/common/interface/api_menu.interface'

export interface AmountCardMenuInterface {
  name: string
  price: number
  description: string
  images?: {
    src: string
    alt: string
  }
  countTag?: number
  $onClick: () => void
}

export interface HomeInterface {
  data: ApiMenuInterface
  children: React.ReactNode
}