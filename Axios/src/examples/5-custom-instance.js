import { useEffect } from 'react';
import autoFetch from './axios/custom';
import axios from "axios";

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await autoFetch.get("/react-store-products");
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1.data);
      const {first, last} = resp2.data.results[0].name;
      console.log(first, last);
    } catch (err) {
      console.log(err.response);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
