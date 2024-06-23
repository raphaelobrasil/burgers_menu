import { createSlice } from '@reduxjs/toolkit'
import { StoreModalInterface } from '@/common/interface/store_modal.interface'

const initialState: StoreModalInterface = {
  showModal: false,
  keyCarte: 0,
  keyOption: 0,
  type: 'option'
}

export const storeModalSlice = createSlice({
  name: 'storeModal',
  initialState: initialState,
  reducers: {
    updateStore: (_state, action) => action.payload,
  }
})

export const { updateStore } = storeModalSlice.actions

export default storeModalSlice.reducer