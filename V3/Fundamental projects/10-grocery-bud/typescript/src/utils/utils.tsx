import { InitState } from '../context/GroceryContext';

const localKey: string = 'GROCERY';

export const saveToLacal = (data: InitState[]): void => {
  localStorage.setItem(localKey, JSON.stringify(data));
};

export const loadFromLocal = (): InitState[] => {
  if (localStorage.getItem(localKey) !== null) {
    return JSON.parse(localStorage.getItem(localKey) as string);
  } else {
    return [];
  }
};
