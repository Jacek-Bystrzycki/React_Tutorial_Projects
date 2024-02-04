import type { CartType } from '../features/cartSlice';

const isCartType = (data: unknown): data is CartType => {
  if (data !== null && typeof data === 'object' && Object.keys(data).length === 11) {
    return (
      'id' in data &&
      'title' in data &&
      'company' in data &&
      'description' in data &&
      'category' in data &&
      'image' in data &&
      'price' in data &&
      'freeShipping' in data &&
      'color' in data &&
      'count' in data &&
      'total' in data
    );
  } else return false;
};

export const isArrayCartType = (data: unknown): data is CartType[] => {
  if (data !== null && Array.isArray(data) && data.length > 0) {
    return data.every((item) => isCartType(item));
  } else return false;
};
