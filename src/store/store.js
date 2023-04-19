import { configureStore } from '@reduxjs/toolkit'
import { modalSlice, receiversSlice, usersSlice } from './'

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    receivers: receiversSlice.reducer,
    users: usersSlice.reducer
  }
})
