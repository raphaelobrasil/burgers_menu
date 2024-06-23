import { createSlice } from '@reduxjs/toolkit'
import { StoreDataInterface } from '@/common/interface/store_data.interface'

const initialState: StoreDataInterface[] = []

export const storeDataSlice = createSlice({
  name: 'storeData',
  initialState: initialState,
  reducers: {
    updateStore: (_state, action) => [...action.payload],
  }
})

export const { updateStore } = storeDataSlice.actions

export default storeDataSlice.reducer