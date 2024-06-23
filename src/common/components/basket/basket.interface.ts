export interface BasketInterface {
  $isModal?: boolean
}

export interface BasketCardCountInterface {
  $name: string
  $modifier?: {
    name?: string
    price?: number
  } 
  $count: number
  $decrease: () => void
  $increase: () => void
  $price: number
}