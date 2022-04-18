import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const getProducts = useCallback( () => {
    axios.get(url).then(resp => {
      setData(paginate(resp.data, itemsPerPage));
      setLoading(false);
      }
      ).catch(err => {
        if (err.response){
          console.log(err.response);
        } else {
          console.log(err);
        };
      });
  },[itemsPerPage]);
  
  useEffect(() => {
    getProducts()
  }, [getProducts]);

  return { loading, data, setItemsPerPage, itemsPerPage };
};
