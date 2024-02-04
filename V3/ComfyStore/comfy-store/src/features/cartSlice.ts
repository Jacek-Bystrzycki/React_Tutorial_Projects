import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { getObjProperty } from '../utils/getObjectProperty';
import { countTotals } from '../utils/countTotals';
import { saveToLocal } from '../utils/localStorage';

export type CartType = {
  id: number;
  title: string;
  company: string;
  description: string;
  category: string;
  image: string;
  price: number;
  freeShipping: boolean;
  color: string;
  count: number;
  total: number;
};

export type TotalsTypes = {
  totalCount: number;
  subTotal: number;
  shipping: number;
  tax: number;
  total: number;
};

interface CartState {
  cards: CartType[];
  totals: TotalsTypes;
}

const initialState: CartState = {
  cards: [],
  totals: {
    totalCount: 0,
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: (create) => ({
    addToCart: create.reducer((state, action: PayloadAction<CartType>) => {
      const newCart = action.payload;
      let cartExists: boolean = false;
      //   state.cards.forEach((cart) => {
      //     if (getObjProperty(cart, 'id') === newCart.id && getObjProperty(cart, 'color') === newCart.color) {
      //       cart.total += newCart.total;
      //       cart.count += newCart.count;
      //       cartExists = true;
      //     }
      //   });
      state.cards.forEach((cart) => {
        if (cart.id === newCart.id && cart.color === newCart.color) {
          cart.total += newCart.total;
          cart.count += newCart.count;
          cartExists = true;
        }
      });
      if (!cartExists) state.cards.push(newCart);
      state.totals = countTotals(state.cards);
      saveToLocal(state.cards);
    }),
    clearCart: create.reducer((state) => {
      state.cards = [];
      state.totals = countTotals(state.cards);
    }),
    removeFromCart: create.reducer((state, action: PayloadAction<CartType>) => {
      const removeCart = action.payload;
      state.cards = state.cards.filter((cart) => {
        if (cart.id !== removeCart.id || (cart.id === removeCart.id && cart.color !== removeCart.color)) return cart;
      });
      state.totals = countTotals(state.cards);
      saveToLocal(state.cards);
    }),
    updateCart: create.reducer((state, action: PayloadAction<CartType>) => {
      const updatedCart = action.payload;
      state.cards = state.cards.map((cart) => {
        if (cart.id === updatedCart.id && cart.color === updatedCart.color) {
          cart.count = updatedCart.count;
          cart.total = updatedCart.count * updatedCart.price;
        }
        return cart;
      });
      state.totals = countTotals(state.cards);
      saveToLocal(state.cards);
    }),
    addOneToCart: create.reducer((state, action: PayloadAction<CartType>) => {
      const addOneCart = action.payload;
      state.cards = state.cards.map((cart) => {
        if (cart.id === addOneCart.id && cart.color === addOneCart.color) {
          cart.total = cart.total + addOneCart.price;
          cart.count += 1;
        }
        return cart;
      });
      state.totals = countTotals(state.cards);
      saveToLocal(state.cards);
    }),
    subOneFromCart: create.reducer((state, action: PayloadAction<CartType>) => {
      const removeOneCart = action.payload;
      state.cards = state.cards.map((cart) => {
        if (cart.id === removeOneCart.id && cart.color === removeOneCart.color) {
          if (cart.count > 1) {
            cart.total = cart.total - removeOneCart.price;
            cart.count -= 1;
          }
        }
        return cart;
      });
      state.totals = countTotals(state.cards);
      saveToLocal(state.cards);
    }),
    loadCart: create.reducer((state, action: PayloadAction<CartType[]>) => {
      state.cards = action.payload;
      state.totals = countTotals(state.cards);
    }),
  }),
});

export const { addToCart, clearCart, removeFromCart, updateCart, addOneToCart, subOneFromCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
