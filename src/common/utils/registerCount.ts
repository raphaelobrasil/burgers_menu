import { StoreDataInterface } from '@/common/interface/store_data.interface'
import deepClone from './deepClone'

const registerCount = (value: number, oldData: StoreDataInterface[], keyCarte: number, keyOption: number ) => {
  const newData = deepClone(oldData)

  if (newData[keyCarte]?.carte[keyOption]) {
    const oldTag = newData[keyCarte].carte[keyOption].countTag
    newData[keyCarte].carte[keyOption].countTag = !!oldTag ? oldTag + value : value 
  }
  
  return newData
}

export default registerCount