
import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    onLoadUsers: (state, { payload }) => {
      state.users = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { onLoadUsers } = usersSlice.actions
