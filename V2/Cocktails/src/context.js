import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { aufoFetch } from './axiosFetch';

const url = '/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDinks = useCallback( async () => {
    try {
      setLoading(true);
      const fullQuery = url + searchTerm;
      const resp = await aufoFetch.get(fullQuery);
      if (resp.data.drinks) {
        const drinks = resp.data.drinks;
        const formatedDrinks = drinks.map(drink => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            glass: drink.strGlass,
            info: drink.strAlcoholic
          }
        });
        setCocktails(formatedDrinks);
      }
      else setCocktails([]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.response);
    };
  },[searchTerm]);

  useEffect(()=>{
    fetchDinks();
  }, [fetchDinks, searchTerm]);

  const globalProps = {
    loading, 
    cocktails,
    setSearchTerm,
    searchTerm
  };

  return <AppContext.Provider value={globalProps}>
    {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider, useGlobalContext };
