import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { isSetSortBy, type SetSortBy } from '../types/API';

interface FilterState {
  search: string;
  company: string;
  category: string;
  order: SetSortBy;
  price: string;
  shipping: boolean;
}

const initFilter: FilterState = {
  search: '',
  company: 'all',
  category: 'all',
  order: 'a-z',
  price: '100000',
  shipping: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initFilter,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFree: (state) => {
      state.shipping = !state.shipping;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      const priceNumber: number = parseInt(action.payload, 10);
      if (priceNumber > -1 || priceNumber <= 100000) state.price = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      if (isSetSortBy(action.payload)) state.order = action.payload;
    },
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetForm: (state) => {
      Object.assign(state, initFilter);
    },
  },
});

export const { setSearch, setFree, setPrice, setSortBy, setCategory, setCompany, resetForm } = filterSlice.actions;

export default filterSlice.reducer;
