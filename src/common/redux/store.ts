import { configureStore } from '@reduxjs/toolkit'
import storeData from './slices/store_data'
import storeModal from './slices/store_modal'
import storeBasket from './slices/store_basket'

export default configureStore({
  reducer: {
    storeData,
    storeModal,
    storeBasket
  },
})
