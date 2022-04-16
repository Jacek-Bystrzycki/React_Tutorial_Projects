import React, {useRef, useEffect} from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {

  const {setSearchTerm, searchTerm} = useGlobalContext();
  const searchValue = useRef(null);

  const searchCocktail = () => {
      setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
    searchValue.current.value = searchTerm;
  },[searchTerm]);

  return (
    <section className='section search' onSubmit={handleSubmit}>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor='name'>search for your favorite cocktail</label> 
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
