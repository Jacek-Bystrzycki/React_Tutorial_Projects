import axios from 'axios';
import { useEffect } from 'react';
import "./axios/global";

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios.get(productsUrl);
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1);
      console.log(resp2);
    } catch (err) {
      console.log(err.response);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
