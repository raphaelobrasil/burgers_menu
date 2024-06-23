
import { StoreDataInterface } from '@/common/interface/store_data.interface'

const openCarteMenu = (key: number, oldData: StoreDataInterface[], value: boolean) => {
  const newData = oldData.map((newState, oldKey) => ({
    ...newState,
    showCarte: oldKey === key ? value : newState.showCarte
  }))
  return [...newData]
}

export default openCarteMenu