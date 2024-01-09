import { ReactElement, createContext, useMemo, useReducer, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { saveToLacal } from '../utils/utils';
import { isRequiredType, isInitStateType, isInitStateArrayType } from '../utils/utils';
import { readData } from '../axios/axios';
import axios from 'axios';

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
  UPDATE: 'UPDATE',
};

export type ReducerPayloadCheckType = Pick<InitState, 'id' | 'checked'>;
type ReducerAction = {
  type: string;
  payload?: unknown;
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
      if (!action.payload) throw new Error('Payload is required in the "CHECK" reducer action!');

      if (!isRequiredType(action.payload)) throw new Error('Wrong payload data in "Check" reducer');
      const { id, checked } = action.payload;
      const updateState: InitState[] = state.map((item) => {
        if (item.id === id) item.checked = checked;
        return item;
      });
      saveToLacal(updateState);
      return updateState;

    case REDUCER_ACTION.LOAD:
      if (isInitStateArrayType(action.payload)) return action.payload;
      return [];

    case REDUCER_ACTION.CLEAR:
      saveToLacal([]);
      return [];

    case REDUCER_ACTION.REMOVE:
      if (!action.payload || typeof action.payload !== 'string') throw new Error('Payload as String is needed in the "Remove" reducer action!');
      const removeId: string = action.payload;
      const filteredState: InitState[] = state.filter((item) => item.id !== removeId);
      saveToLacal(filteredState);
      return [...filteredState];

    case REDUCER_ACTION.UPDATE:
      if (!action.payload) throw new Error("Payload is required in 'UPDATE' action");

      if (!isInitStateType(action.payload)) throw new Error('Wrong type');
      const newItem: InitState = action.payload;
      const updatedState: InitState[] = state.map((item) => {
        if (item.id === newItem.id) item = newItem;
        return item;
      });
      saveToLacal(updatedState);
      return updatedState;

    default:
      throw new Error('Wrong reducer action');
  }
};

const useGroceryReducer = (initState: InitState[]) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const REDUCER_ACTION_MEMO: typeof REDUCER_ACTION = useMemo(() => REDUCER_ACTION, []);

  const loadFromDB = useCallback(async (): Promise<void> => {
    try {
      const { data } = await readData.get<InitState[]>('/');
      dispatch({ type: REDUCER_ACTION.LOAD, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        return;
      }
      console.log('Unexpected error');
    }
  }, []);

  return { state, loadFromDB, dispatch, REDUCER_ACTION: REDUCER_ACTION_MEMO };
};

export type UseGroceryReducer = ReturnType<typeof useGroceryReducer>;
const initGroceryReducer: UseGroceryReducer = {
  state: initState,
  loadFromDB: async () => {},
  dispatch: () => {},
  REDUCER_ACTION: REDUCER_ACTION,
};

export const GroceryContext = createContext<UseGroceryReducer>(initGroceryReducer);

type PropsType = {
  children?: ReactElement | ReactElement[];
};
export const GroceryContextProvider = ({ children }: PropsType): ReactElement => {
  return <GroceryContext.Provider value={useGroceryReducer(initState)}>{children}</GroceryContext.Provider>;
};
