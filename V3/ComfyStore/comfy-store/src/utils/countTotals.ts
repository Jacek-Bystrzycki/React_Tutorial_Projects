import type { CartType, TotalsTypes } from '../features/cartSlice';
import { countProps } from '../types/countProps';

export const countTotals = (cards: CartType[]): TotalsTypes => {
  const totalCount: number = countProps(cards, 'count');
  const subTotal: number = countProps(cards, 'total');
  const tax: number = subTotal * 0.1;
  let shipping: number = 0;
  cards.forEach((cart) => {
    if (!cart.freeShipping) {
      shipping = 500;
      return;
    }
  });
  const total: number = subTotal + tax + shipping;

  return { totalCount, subTotal, tax, shipping, total };
};
