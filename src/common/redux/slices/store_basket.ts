import { createSlice } from '@reduxjs/toolkit'
import { StoreBasketInterface } from '@/common/interface/store_basket.interface'

const initialState: StoreBasketInterface[] = []

export const storeBasketSlice = createSlice({
  name: 'storeBasket',
  initialState: initialState,
  reducers: {
    updateStore: (_state, action) => [...action.payload],
  }
})

export const { updateStore } = storeBasketSlice.actions

export default storeBasketSlice.reducer