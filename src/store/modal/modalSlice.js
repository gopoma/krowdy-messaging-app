
import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    component: ''
  },
  reducers: {
    onOpenModal: (state, { payload }) => {
      state.isModalOpen = true
      state.component = payload
    },
    onCloseModal: (state) => {
      state.isModalOpen = false
      state.component = ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { onOpenModal, onCloseModal } = modalSlice.actions
