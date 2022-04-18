import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const {loading, data, setItemsPerPage, itemsPerPage} = useFetch();
  const [localItemsPerPage, setLocalItemsPerPage] = useState(itemsPerPage);

  const changePage = (ev) => {
    const pageNo = parseInt(ev.target.dataset.id);
    const action = ev.target.dataset.action;
    if (pageNo) {
      setPage(pageNo)
    } else {
      if (action === "prev") {
        if (page <= 1) setPage(data.length);
        else setPage(page - 1);
      } else if (action === "next") {
        if (page >= data.length) setPage(1);
        else setPage(page + 1);
      };
    };
  };

  const changeItemsPerPage = (ev) => {
    ev.preventDefault();
    setItemsPerPage(localItemsPerPage);
  };

  useEffect(() => {
    if (page < 1 ){
      setItems(data[0]);
    } else if (page >= data.length){
      setItems(data[data.length - 1]);
    } else {
      setItems(data[page - 1]);
    };
  },[page, data]);

  return <main>
    <div className="section-title">
      <h1>{loading? "loading...": "pagination"}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {items && items.map(item => {
          return <Follower key={item.id} {...item}/>
        })}
      </div>
      <div className="btn-container">
        <button className='prev-btn' data-action="prev" onClick={changePage}>prev</button>
        {data && data.map ((_, index) => {
          return <button className={`page-btn${index + 1 === page?" active-btn":""}`} key={index + 1} data-id={index + 1} onClick={changePage}>{index + 1}</button>
        })}
        <button className='next-btn' data-action="next" onClick={changePage}>next</button>
      </div>
      <div className="btn-container">
        <form onSubmit={changeItemsPerPage}>
          <label htmlFor="pages">Items per page: </label>
          <input type="number" id='pages' placeholder={localItemsPerPage} value={localItemsPerPage} onChange={(ev)=>{setLocalItemsPerPage(ev.target.value)}}/>
        </form>
      </div>
    </section>
  </main>
};

export default App;
