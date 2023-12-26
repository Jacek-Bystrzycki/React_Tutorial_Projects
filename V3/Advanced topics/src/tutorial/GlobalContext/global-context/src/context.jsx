import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [status, setStatus] = useState('testing');
  return (
    <>
      <GlobalContext.Provider value={{ status, setStatus }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default AppContext;
