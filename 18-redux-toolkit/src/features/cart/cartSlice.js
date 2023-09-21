import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { openModal } from '../modal/modalSlice'
// import cartItems from '../../cartItems'

const initialState = {
  // cartItems: cartItems,
  cartItems: [],
  amount: 5,
  total: 10,
  isLoading: true,
}

const url = 'https://course-api.com/react-useReducer-cart-project'

// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err))
// })

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url)
      // thunkAPI.dispatch(openModal())
      return resp.data
    } catch (error) {
      thunkAPI.rejectWithValue('something went wrong')
    }
  },
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount = cartItem.amount - 1
    },
    caculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     state.isLoading = false
  //     state.cartItems = action.payload
  //   },
  //   [getCartItems.rejected]: (state) => {
  //     state.isLoading = false
  //   },
  // },
})

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  caculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
