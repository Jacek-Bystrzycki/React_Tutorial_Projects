import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import cart from '../../cartItems';
import axios from 'axios';
// import { showModal } from '../modal/modalSLice';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
  try {
    // console.log(name);
    // console.log(thunkAPI);
    // console.log(thunkAPI.getState());
    // thunkAPI.dispatch(showModal());
    const { data } = await axios.get('https://course-api.com/react-useReducer-cart-project');
    return data;
  } catch (error) {
    // return thunkAPI.rejectWithValue('something gone wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.cartItems = [];
    });
  },
  reducers: (create) => ({
    increment: create.reducer((state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) item.amount += 1;
      });
    }),
    decrement: create.reducer((state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) item.amount -= 1;
      });
    }),
    removeItem: create.reducer((state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    }),
    clearItems: create.reducer((state) => {
      state.cartItems = [];
    }),
    countTotals: create.reducer((state) => {
      state.total = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        state.cartItems.reduce((acu, cur) => {
          return acu + cur.price * cur.amount;
        }, 0)
      );
      state.amount = state.cartItems.reduce((acc, cur) => {
        return acc + cur.amount;
      }, 0);
    }),
  }),
});

export const { increment, decrement, removeItem, clearItems, countTotals } = cartSlice.actions;
export default cartSlice.reducer;
