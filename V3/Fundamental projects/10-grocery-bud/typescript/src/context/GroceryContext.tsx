import { ReactElement, createContext, useReducer } from 'react';
import { nanoid } from 'nanoid';
import { saveToLacal, loadFromLocal } from '../utils/utils';

export type InitState = {
  id: string;
  checked: boolean;
  title: string;
};

const initState: InitState[] = [];

const REDUCER_ACTION = {
  ADD: 'ADD',
  CHECK: 'CHECK',
  REMOVE: 'REMOVE',
  CLEAR: 'CLEAR',
  LOAD: 'LOAD',
};

type ReducerPayloadCheckType = Pick<InitState, 'id' | 'checked'>;
type ReducerPayloadType = string | ReducerPayloadCheckType;
type ReducerAction = {
  type: string;
  payload?: ReducerPayloadType;
};

const reducer = (state: InitState[], action: ReducerAction): InitState[] => {
  switch (action.type) {
    case REDUCER_ACTION.ADD:
      if (!action.payload || typeof action.payload !== 'string') throw new Error('Payload as String is needed in the "ADD" reducer action!');

      const newState: InitState = {
        id: nanoid(),
        checked: false,
        title: action.payload,
      };
      saveToLacal([...state, newState]);
      return [...state, newState];

    case REDUCER_ACTION.CHECK:
      if (!action.payload) throw new Error('Payload as String is needed in the "CHECK" reducer action!');

      function isRequiredType(payload: unknown): payload is ReducerPayloadCheckType {
        if (payload !== null && typeof payload === 'object') {
          return 'id' in payload && 'checked' in payload;
        } else return false;
      }

      if (!isRequiredType(action.payload)) throw new Error('Wrong payload data in "Check" reducer');
      const { id, checked } = action.payload;
      const updateState: InitState[] = state.map((item) => {
        if (item.id === id) item.checked = checked;
        return item;
      });
      saveToLacal(updateState);
      return updateState;

    case REDUCER_ACTION.LOAD:
      const loadedData: InitState[] = loadFromLocal();
      return loadedData;

    case REDUCER_ACTION.CLEAR:
      saveToLacal([]);
      return [];

    case REDUCER_ACTION.REMOVE:
      if (!action.payload || typeof action.payload !== 'string') throw new Error('Payload as String is needed in the "Remove" reducer action!');
      const removeId: string = action.payload;
      const filteredState: InitState[] = state.filter((item) => item.id !== removeId);
      saveToLacal(filteredState);
      return [...filteredState];

    default:
      throw new Error('Wrong reducer action');
  }
};

const useGroceryReducer = (initState: InitState[]) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addGrocery = (value: string): void => {
    dispatch({ type: REDUCER_ACTION.ADD, payload: value });
  };

  const checkGrocery = (data: ReducerPayloadCheckType): void => {
    dispatch({ type: REDUCER_ACTION.CHECK, payload: data });
  };

  const loadGrocery = (): void => {
    dispatch({ type: REDUCER_ACTION.LOAD });
  };

  const clearGrocery = (): void => {
    dispatch({ type: REDUCER_ACTION.CLEAR });
  };

  const removeGrocery = (id: string): void => {
    dispatch({ type: REDUCER_ACTION.REMOVE, payload: id });
  };

  return { state, addGrocery, checkGrocery, loadGrocery, clearGrocery, removeGrocery };
};

type UseGroceryReducer = ReturnType<typeof useGroceryReducer>;
const initGroceryReducer: UseGroceryReducer = {
  state: initState,
  addGrocery: () => {},
  checkGrocery: () => {},
  loadGrocery: () => {},
  clearGrocery: () => {},
  removeGrocery: () => {},
};

export const GroceryContext = createContext<UseGroceryReducer>(initGroceryReducer);

type PropsType = {
  children?: ReactElement | ReactElement[];
};
export const GroceryContextProvider = ({ children }: PropsType): ReactElement => {
  return <GroceryContext.Provider value={useGroceryReducer(initState)}>{children}</GroceryContext.Provider>;
};
