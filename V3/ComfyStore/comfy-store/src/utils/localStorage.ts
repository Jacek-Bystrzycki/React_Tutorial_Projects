import type { CartType } from '../features/cartSlice';
import { isArrayCartType } from './isType';

export const saveToLocal = (carts: CartType[]): void => {
  localStorage.setItem('carts', JSON.stringify(carts));
};

export const loadFromLocal = (): CartType[] => {
  const local: string | null = localStorage.getItem('carts');
  if (local && isArrayCartType(JSON.parse(local))) {
    return JSON.parse(local);
  } else return [];
};
