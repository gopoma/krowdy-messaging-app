
import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const receivers = JSON.parse(localStorage.getItem('receivers')) ?? []

  return { receivers }
})()

export const receiversSlice = createSlice({
  name: 'receivers',
  initialState,
  reducers: {
    onAddReceiver: (state, { payload }) => {
      state.receivers.push(payload)
    },
    onDeleteReceiver: (state, { payload }) => {
      state.receivers = state.receivers.filter((receiver) => receiver.id !== payload.id)
    }
  }
})

// Action creators are generated for each case reducer function
export const { onAddReceiver, onDeleteReceiver } = receiversSlice.actions
