import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalSLice from './features/modal/modalSLice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSLice,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware),
});

setupListeners(store.dispatch);
