import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalSLice from './features/modal/modalSLice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSLice,
  },
});
