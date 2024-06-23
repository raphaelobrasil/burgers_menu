import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStore } from '@/common/redux/slices/store_data'
import { stateType, StoreDataInterface, UseStoreDataInterface } from '@/common/interface/store_data.interface'
import { ApiMenuInterface } from '@/common/interface/api_menu.interface'
import formatData from '@/common/utils/formatData'

const useStoreData = (apiData?: ApiMenuInterface): UseStoreDataInterface => {
  const data = useSelector((state: stateType) => state.storeData)
  const dispatch = useDispatch()

  const updateValue = (data: StoreDataInterface[]) => dispatch(updateStore(data))
  
  useEffect(() => {
    if (!!apiData) {
      const newData = formatData(apiData)
      updateValue(newData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return {
    updateValue,
    data
  }
}

export default useStoreData