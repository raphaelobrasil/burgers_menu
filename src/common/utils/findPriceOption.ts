import { CarteItemsInterface } from '@/common/interface/store_data.interface'

const findOptions = (carte: CarteItemsInterface) => carte.modifiers?.map((option, key) => ({
  optionKey: option.selectsKeyItem,
  modifierKey: key
}))

const findPriceOption = (carte?: CarteItemsInterface): number => {
  if (carte) {
    const options = findOptions(carte)
    let price = 0

    options?.forEach(({ modifierKey, optionKey }) => {
      if (optionKey !== undefined) {
        const newPrice = carte.modifiers?.[modifierKey]?.items[optionKey].price ?? 0
        price = price + newPrice
      }
    })

    price = price === 0 ? carte.price : price
    return price
  }
  return 0
}

export default findPriceOption