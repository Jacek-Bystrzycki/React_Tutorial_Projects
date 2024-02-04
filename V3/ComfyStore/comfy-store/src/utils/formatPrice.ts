export const formtPrice = (price: string): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseInt(price, 10) / 100);
};
