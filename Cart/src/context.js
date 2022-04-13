import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(()=>{
    dispatch({type:"SET-LOADING"});
    fetch(url).then(response => response.json()).then(data => dispatch({type:"DATA-FETCH", payload: data}));
  },[]);

  const contextProps = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider
      value={contextProps}
    >
      {children}
    </AppContext.Provider>
  )
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider };
