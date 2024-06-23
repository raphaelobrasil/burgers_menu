import { StoreDataInterface, ModifiersInterface } from '@/common/interface/store_data.interface'
import deepClone from './deepClone'


const newModifiers = (id: number, value: number, modifiers?: ModifiersInterface[]) => modifiers?.map((modifier, key) => {
  if (key === id) return { ...modifier, selectsKeyItem: value }
  return modifier
})


const updateModifier = (value: string, modifiersId: number, oldData: StoreDataInterface[], keyCarte: number, keyOption: number) => {
  let newData = deepClone(oldData)

  newData[keyCarte].carte[keyOption] = {
    ...newData[keyCarte].carte[keyOption],
    modifiers: newModifiers(modifiersId, Number(value), newData[keyCarte].carte[keyOption].modifiers)
  }

  return newData
}

export default updateModifier