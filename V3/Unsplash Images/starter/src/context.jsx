import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

const useToggleTheme = (initTheme) => {
  const [isDarkTheme, setDarkTheme] = useState(initTheme);

  const toggleTheme = () => {
    setDarkTheme((prev) => {
      document.body.classList.toggle('dark-theme', !prev);
      return !prev;
    });
  };
  return { toggleTheme, isDarkTheme };
};

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={useToggleTheme(false)}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
