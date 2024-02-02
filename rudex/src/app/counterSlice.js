import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementvalue: (state , action) => {
      state.value += action.payload
    },
    decrementvalue: (state , action) => {
      state.value -= action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,incrementvalue ,decrementvalue  } = counterSlice.actions

export default counterSlice.reducer