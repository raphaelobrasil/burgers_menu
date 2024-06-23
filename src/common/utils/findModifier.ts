import { CarteItemsInterface } from '@/common/interface/store_data.interface'
import { ModifierBasketInterface } from '@/common/interface/store_basket.interface'

const findModifier = (option: CarteItemsInterface): ModifierBasketInterface | undefined => {
  let item: ModifierBasketInterface | undefined = undefined

  option?.modifiers?.forEach(modifier => {
    if (modifier.selectsKeyItem !== undefined) {
      item = {
        name: modifier.items[modifier.selectsKeyItem].name,
        price: modifier.items[modifier.selectsKeyItem].price
      }
    }
  })

  return item 
}

export default findModifier