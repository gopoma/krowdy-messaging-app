import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './'

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer
  }
})
