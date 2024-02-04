import { useCallback, useRef } from 'react';

const SearchForm = () => {
  const input = useRef();

  const onChangeDebaunce = useCallback(() => {
    let timeout;
    return (ev) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onSubmitHandle(ev);
      }, 1500);
    };
  }, []);

  const onSubmitHandle = (ev) => {
    if (ev.target.name === 'form') ev.preventDefault();
    if (!input.current.value) return;
    //do something here!!!
    console.log(input.current.value);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={onSubmitHandle} className="search-form" name="form">
        <input ref={input} onChange={onChangeDebaunce()} type="text" className="form-input search-input" name="search" placeholder="Search product here..." />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
