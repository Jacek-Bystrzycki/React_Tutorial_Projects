import { useEffect } from 'react';
import autoFetch from './axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await autoFetch.get("/react-store-products");
      console.log(resp);    
    } catch (err) {
      console.log(err.response);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
